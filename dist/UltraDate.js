/*!
 * UltraDate.js v1.0.0 (http://hrdaya.github.io/UltraDate.js/)
 *
 * Copyright 2015 yu-ki higa (https://github.com/hrdaya)
 * Licensed under MIT (https://github.com/hrdaya/UltraDate.js/blob/master/LICENSE)
 */

function UltraDate(year, month, day, hours, minutes, seconds, ms) {
    "use strict";
    var _getInt = function (num) {
        num = parseInt(num, 10);
        return isNaN(num) ? 0 : num;
    };

    if (this instanceof UltraDate) {
        this.date = {
            _value: undefined,
            get value() {
                return this._value;
            },
            set value(val) {
                if (isNaN(val.getTime())) {
                    throw new Error("not Date Object");
                } else {
                    this._value = val;
                }
            }
        };

        switch (arguments.length) {
            case 0:
                this.date.value = new Date();
                break;
            case 1:
                this.date.value = new Date(year);
                break;
            default:
                this.date.value = new Date(
                        _getInt(year),
                        _getInt(month),
                        _getInt(day),
                        _getInt(hours),
                        _getInt(minutes),
                        _getInt(seconds),
                        _getInt(ms)
                        );
                break;
        }
    } else {
        switch (arguments.length) {
            case 0:
                return new UltraDate();
            case 1:
                return new UltraDate(year);
            default:
                return new UltraDate(year, month, day, hours, minutes, seconds, ms);
        }
    }
}

(function () {
    "use strict";
    /**-------------------------------------------------------------------------
     * クロージャ
     *------------------------------------------------------------------------*/
    // デフォルトのフォーマット文字列
    var _defaultFormat = "yyyy/MM/dd";

    // デフォルトのロケール
    var _defaultLocale = "def";

    /**
     * 祝祭日のオプション群
     */
    var _holidays = {
        def: {
            get: function (year) {
                return {};
            }
        }
    };
    /**
     * 日付フォーマットのオプション群
     */
    var _formats = {
        /**
         * デフォルトのオブジェクト
         */
        def: {
            longDay: ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"],
            shortDay: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longMonth: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
            shortMonth: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            smallNoon: ["am", "pm"],
            largeNoon: ["AM", "PM"],
            era: function (date) {
                return {
                    longName: "A.D.",
                    shortName: "AD",
                    alphaName: "A",
                    year: date.getFullYear()
                };
            },
            eraStrict: function (date) {
                return this.era(date);
            }
        }
    };

    /**
     * 整数変換（文字列で指定してきた時等の対策）
     *
     * @param {Number} num 変換する数字
     *
     * @return {Number} 数字に変換した値
     *                   変換できなかったときは「0」
     */
    var _getInt = function (num) {
        num = parseInt(num, 10);
        return isNaN(num) ? 0 : num;
    };

    /**
     * 左側0埋め
     *
     * @param {Number} val ０埋めする値
     * @param {Number} num 桁数
     *
     * @return {String} 左側を０埋めした文字列
     */
    var _padZero = function (val, num) {
        num = parseInt(num, 10);
        if (isNaN(num)) {
            num = 2;
        }
        // 桁数が1以下の場合は何もしない
        if (num < 2) {
            return val;
        }
        return (new Array(num).join("0") + val).slice(num * -1);
    };

    /**
     * Dateオブジェクトの取得
     *
     * @param {UltraDate|Date|String|Number} date {Date} 何もしないでそのまま返す
     *                                   {String} 引数を元にDateオブジェクトの作成
     *                                   {Number} 引数を元にDateオブジェクトの作成
     *                                   undefinedの時は今日のDateオブジェクトの作成
     *
     * @return {UltraDate} 日付オブジェクト
     */
    var _getDate = function (date) {
        if (date === undefined) {
            date = new UltraDate();
        } else {
            date = new UltraDate(date);
        }
        if (isNaN(date.getTime())) {
            throw new Error("not UltraDate Object");
        }
        return date;
    };

    /**
     * 週番号を取得
     *
     * @param {Number} days 起点となる曜日番号
     * 0〜6までの数字で曜日の日〜土を指定する
     * 引数が0の時は曜日番号に1を足す
     * 引数が1～6の場合は(曜日番号 - (引数 - 1))を適用して0以下になったものに7を足す
     *
     * @param {Number} offset 第1週の計算方法（第1週必要日数）
     * 引数が0の時は1月1日のある週を第1週として割り算は切り上げ
     * 引数が1～6の場合はオフセット初期値に(7 - 引数)を適用して割り算は切り捨て
     *
     * 日付の差分は1月1日から該当日を引くことになるが、そうすると年初めからの日数
     * とはならない為、引いた値を日数に変換後1を足す（Dateオブジェクトはミリ秒）
     *
     * 週の起点の曜日を1として1～7の曜日番号を使用する
     * 日曜起点ならJavaScriptの曜日番号と同じ並びなので1を足すのみ
     * そうでない場合は起点曜日が1になるように引き算を行い、0以下に7を足す
     *
     * 該当日の週が7で割り切れるように7から週番号を引いた値で満たす
     *
     * 1月1日のある週を第1週とする場合は先頭の週に1日でも存在すれば第1週となる為、
     * 7で割った値を切り上げた値が週番号となる
     *
     * 1月1日のある週がn日以上必要な場合は7からn日を引いた値を先頭週の日数に足す。
     * 足した週が7より小さい場合は要件を満たしていない（日数 < n）という事になるので、
     * 切り捨てた値が週番号となる。
     * 週番号が0となった場合（日数 < n）は前年の最終週の週番号が週番号となる
     *
     * http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {UltraDate} that UltraDateオブジェクト
     *
     * @return {Number} 週番号
     */
    var _getWeek = function (days, offset, that) {
        days = parseInt(days, 10);
        offset = parseInt(offset, 10);
        if (isNaN(days) || (days < 0 && 6 < days)) {
            days = 1;
        }
        if (isNaN(offset) || (offset < 0 && 6 < offset)) {
            offset = 4;
        }
        var FirstDate = new UltraDate(that.getFullYear(), 0, 1).clearTime();
        var nowDate = new UltraDate(that).clearTime();
        var weekNumber = 0;
        var weekDay = nowDate.getDay();
        if (days === 0) {
            weekDay++;
        } else if (0 < days && days < 7) {
            weekDay = weekDay - (days - 1);
            if (weekDay < 1) {
                weekDay += 7;
            }
        }
        weekDay = 7 - weekDay;
        offset = 7 - offset;
        var getLapsedDays = function (nowDate, FirstDate, weekDay, offset) {
            return ((nowDate - FirstDate) / (24 * 60 * 60 * 1000)) + 1 + weekDay + offset;
        };
        var lapsedDays = getLapsedDays(nowDate, FirstDate, weekDay, offset);
//        if (lapsedDays < 7 && offset !== 0) {
//            FirstDate.addYear(-1);
//            lapsedDays = getLapsedDays(nowDate, FirstDate, weekDay, offset);
//        }
        if (offset === 0) {
            weekNumber = Math.ceil(lapsedDays / 7);
        } else if (0 < offset && offset <= 7) {
            weekNumber = Math.floor(lapsedDays / 7);
        }
        return weekNumber;
    };

    /**-------------------------------------------------------------------------
     *
     * UltraDateのメソッド
     *
     *------------------------------------------------------------------------*/
    /**
     * Date.now
     *
     * @static
     */
    UltraDate.now = function () {
        if (!Date.now) {
            return new Date().getTime();
        } else {
            return Date.now();
        }
    };

    /**
     * Date.parse
     *
     * @static
     * @param {String} dateString
     */
    UltraDate.parse = function (dateString) {
        return Date.parse(dateString);
    };

    /**
     * Date.UTC
     *
     * @static
     */
    UltraDate.UTC = function () {
        var args = [].slice.apply(arguments);
        return Date.UTC.apply(null, args);
    };

    /**
     * デフォルトのフォーマットを取得する
     *
     * @static
     *
     * @return {String} デフォルトのフォーマット日付
     */
    UltraDate.getDefaultFormat = function () {
        return _defaultFormat;
    };

    /**
     * 日付フォーマットのオプション追加
     *
     * @static
     *
     * @param {String} locale フォーマット用のロケール
     * @param {Object} options フォーマットのオプション
     *
     * @return {this} 自身に返す（チェーンメソッド用）
     */
    UltraDate.setFormatOption = function (locale, options) {
        if (typeof locale !== "string" ||
                locale === "def" ||
                locale === "" ||
                Object.prototype.toString.call(options) !== "[object Object]") {
            throw new Error("Data type of the argument is incorrect");
        } else {
            if (!(locale in _formats)) {
                _formats[locale] = {};
            }
            if ("era" in options && !("eraStrict" in options)) {
                options.eraStrict = options.era;
            }
            for (var key in _formats.def) {
                if (key in options) {
                    _formats[locale][key] = options[key];
                } else {
                    _formats[locale][key] = _formats.def[key];
                }
            }
        }
        return this;
    };

    /**
     * 祝祭日データの追加
     *
     * @static
     *
     * @param {String} locale 祝祭日用のロケール
     * @param {Object} options 祝祭日用のオプション
     *
     * @return {this} 自身に返す（チェーンメソッド用）
     */
    UltraDate.setHolidayOption = function (locale, options) {
        if (typeof locale !== "string" ||
                locale === "def" ||
                locale === "" ||
                Object.prototype.toString.call(options) !== "[object Object]") {
            throw new Error("Data type of the argument is incorrect");
        } else if (!("get" in options)) {
            throw new Error("get() does not exist");
        } else if (Object.prototype.toString.call(options.get) !== "[object Function]") {
            throw new Error("get is not Function");
        } else {
            _holidays[locale] = options;
        }
        return this;
    };

    /**
     * デフォルトのロケールをセットする
     *
     * @static
     *
     * @param {String} locale デフォルトで使用するロケール
     *
     * @return {this} 自身に返す（チェーンメソッド用）
     */
    UltraDate.setDefaultLocale = function (locale) {
        if (typeof locale !== "string" || locale === "") {
            throw new Error("Data type of the argument is incorrect");
        } else {
            _defaultLocale = locale;
        }
        return this;
    };

    /**-------------------------------------------------------------------------
     *
     * UltraDate.prototypeの拡張
     *
     *------------------------------------------------------------------------*/
    UltraDate.prototype = {
        // コンストラクタ
        constructor: UltraDate,
        /**-------------------------------------------------------------------------
         * ユーティリティ
         *------------------------------------------------------------------------*/
        /**
         * 日付のコピーを作成する
         *
         * @return {UltraDate} 新規に作成したUltraDateオブジェクトを返信
         */
        copy: function () {
            return new UltraDate(this.date.value);
        },
        /**-------------------------------------------------------------------------
         * format（日付のフォーマット）
         *------------------------------------------------------------------------*/
        /**
         * 日付フォーマット
         *
         * @param {String} format 日付のフォーマット
         * @param {Boolean} eraStrict 厳格な元号計算を利用するかどうか
         * @param {String} locale フォーマット用のロケール
         *
         * @return {String} 変換された文字列
         *
         *
         * yyyy: 4桁の年（2015）
         * yy:   2桁の年（15）
         * eeee: 元号計算で出された年を4桁で0埋め（0006）
         * eee:  元号計算で出された年を3桁で0埋め（006）
         * ee:   元号計算で出された年を2桁で0埋め（06）
         * e:    元号計算で出された年
         * ggg:  長い形式の元号（平成）
         * gg:   短い形式の元号（平）
         * g:    アルファベットの頭文字（H）
         * MMMM: 長い形式の月表記文字列（January）
         * MMM:  短い形式の月表記文字列（Jan）
         * MM:   2桁で0埋めされた月（01）
         * M:    月（1）
         * dddd: 年間通算日（1）
         * ddd:  3桁で0埋めされた年間通算日（001）
         * dd:   2桁で0埋めされた日（01）
         * d:    日（1）
         * HH:   2桁で0埋めされた24時間表記（01）（24）
         * H:    24時間表記（1）（24）
         * hh:   2桁で0埋めされた12時間表記（01）（12）
         * h:    12時間表記（1）（12）
         * mm:   2桁で0埋めされた分（01）
         * m:    分（1）
         * ss:   2桁で0埋めされた秒（01）
         * s:    秒（1）
         * fff:  3桁で0埋めされたミリ秒（001）
         * f:    ミリ秒（1）
         * TT:   大文字の午前、午後（AM）
         * tt:   小文字の午前、午後（am）
         * www:  月の中の週番号（1）
         * ww:   2桁で0埋めされたISO形式の週番号（01）
         * w:    ISO形式の週番号（1）
         * WW:   2桁で0埋めされたUS形式の週番号（01）
         * W:    US形式の週番号（1）
         * DDD:  長い形式の曜日表記文字列（Sunday）
         * DD:   短い形式の曜日表記文字列（Sun）
         * D:    ISO形式の曜日番号（1～7）
         */
        format: function (format, eraStrict, locale) {
            if (typeof format !== "string") {
                return format;
            }
            if (typeof locale !== "string") {
                locale = _defaultLocale;
            }
            if (!(locale in _formats)) {
                _formats[locale] = _formats.def;
            }
            var options = _formats[locale];

            var era = options.era(this);
            if (eraStrict === true) {
                era = options.eraStrict(this);
            }
            var noon = 0;
            if (this.getHours() >= 12) {
                noon = 1;
            }
            var formats = {
                yyyy: this.getFullYear(),
                yy: _padZero(this.getFullYear()),
                eeee: _padZero(era.year, 4),
                eee: _padZero(era.year, 3),
                ee: _padZero(era.year),
                e: era.year,
                ggg: era.longName,
                gg: era.shortName,
                g: era.alphaName,
                MMMM: options.longMonth[this.getMonth()],
                MMM: options.shortMonth[this.getMonth()],
                MM: _padZero(this.getRealMonth()),
                M: this.getRealMonth(),
                dddd: this.getOrdinalDate(),
                ddd: _padZero(this.getOrdinalDate(), 3),
                dd: _padZero(this.getDate()),
                d: this.getDate(),
                HH: _padZero(this.getHours()),
                H: this.getHours(),
                hh: _padZero((this.getHours() - 12 * noon)),
                h: this.getHours() - 12 * noon,
                mm: _padZero(this.getMinutes()),
                m: this.getMinutes(),
                ss: _padZero(this.getSeconds()),
                s: this.getSeconds(),
                fff: _padZero(this.getMilliseconds(), 3),
                f: this.getMilliseconds(),
                TT: options.largeNoon[noon],
                tt: options.smallNoon[noon],
                www: this.getDayCountsInMonth(),
                ww: _padZero(this.getISOWeek()),
                w: this.getISOWeek(),
                WW: _padZero(this.getUSWeek()),
                W: this.getUSWeek(),
                DDD: options.longDay[this.getDay()],
                DD: options.shortDay[this.getDay()],
                D: this.getISODay()
            };

            var esc = "_____-----_____-----_____-----_____-----_____-----_____";
            var strEsc = format.replace(/("")/g, esc);
            var split = strEsc.split('"');

            var regs = [];
            for (var key in formats) {
                regs.push(key);
            }
            regs = "(" + regs.join("|") + ")";
            var reg = new RegExp(regs, "g");

            for (var i = 0, len = split.length; i < len; i += 2) {
                split[i] = split[i].replace(reg, function (match) {
                    return formats[match];
                });
            }

            format = split.join("");

            return format.replace(new RegExp("(" + esc + ")", "g"), '"');
        },
        /**-------------------------------------------------------------------------
         * add系（値の増減）
         * チェーンメソッド対応
         *------------------------------------------------------------------------*/
        /**
         * 年を足す（マイナスで引く）
         *
         * @param {Number} num 数字
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        addYear: function (num) {
            this.setFullYear(this.getFullYear() + _getInt(num));
            return this;
        },
        /**
         * 月を足す（マイナスで引く）
         *
         * @param {Number} num 数字
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        addMonth: function (num) {
            this.setMonth(this.getMonth() + _getInt(num));
            return this;
        },
        /**
         * 日を足す（マイナスで引く）
         *
         * @param {Number} num 数字
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        addDate: function (num) {
            this.setDate(this.getDate() + _getInt(num));
            return this;
        },
        /**
         * 時間を足す（マイナスで引く）
         *
         * @param {Number} num 数字
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        addHours: function (num) {
            this.setHours(this.getHours() + _getInt(num));
            return this;
        },
        /**
         * 分を足す（マイナスで引く）
         *
         * @param {Number} num 数字
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        addMinutes: function (num) {
            this.setMinutes(this.getMinutes() + _getInt(num));
            return this;
        },
        /**
         * 秒を足す（マイナスで引く）
         *
         * @param {Number} num 数字
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        addSeconds: function (num) {
            this.setSeconds(this.getSeconds() + _getInt(num));
            return this;
        },
        /**
         * ミリ秒を足す（マイナスで引く）
         *
         * @param {Number} num 数字
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        addMilliseconds: function (num) {
            this.setMilliseconds(this.getMilliseconds() + _getInt(num));
            return this;
        },
        /**-------------------------------------------------------------------------
         * set系（値の設定）
         * チェーンメソッド対応
         *------------------------------------------------------------------------*/
        /**
         * 実際の月の数字で月を設定
         *
         * @param {Number} num N月
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setRealMonth: function (num) {
            this.setMonth(_getInt(num) - 1);
            return this;
        },
        /**
         * 現在の月のn回目のw曜日に設定（例：第３月曜日）
         *
         * @param {Number} count 何回目。第1回目なら1。第3回目なら3
         * @param {Number} day 曜日。0〜6までの数字で曜日の日〜土を指定する
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setDayCountsInMonth: function (count, day) {
            count = parseInt(count, 10);
            day = parseInt(day, 10);
            if (isNaN(count) || isNaN(day) || (day < 0 && 6 < day)) {
                throw new Error("Data type of the argument is incorrect");
            } else {
                this.setDate(1);
                var date = day - this.getDay() + 1;
                if (date < 1) {
                    date += 7;
                }
                date += (count - 1) * 7;
                this.setDate(date);
            }
            return this;
        },
        /**
         * 日付を月初に変更
         * 日付比較用に時間を0時に合わせる
         *
         * @param {Number} num Nヶ月後
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setFirstDate: function (num) {
            this.clearTime().setFullYear(this.getFullYear(), this.getMonth() + _getInt(num), 1);
            return this;
        },
        /**
         * 日付を月末に変更
         *
         * @param {Number} num Nヶ月後
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setEndDate: function (num) {
            this.setFirstDate().addMonth(_getInt(num) + 1).setDate(0);
            return this;
        },
        /**
         * 日付を引数「option」でしたものの前の平日に変更
         *
         * @param {Number} option 0：土曜日、日曜日、引数「locale」で取得される祝祭日一覧
         *                         1：土曜日、日曜日のみ
         *                         2：日曜日、引数「locale」で取得される祝祭日一覧のみ
         *                         3：日曜日のみ
         *                         4：引数「locale」で取得される祝祭日一覧のみ
         * @param {String} locale 取得する祝祭日
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setBeforeWeekday: function (option, locale) {
            while (!this.isWeekday(option, locale)) {
                this.addDate(-1);
            }
            return this;
        },
        /**
         * 日付を引数「option」でしたものの後の平日に変更
         *
         * @param {Number} option 0：土曜日、日曜日、引数「locale」で取得される祝祭日一覧
         *                         1：土曜日、日曜日のみ
         *                         2：日曜日、引数「locale」で取得される祝祭日一覧のみ
         *                         3：日曜日のみ
         *                         4：引数「locale」で取得される祝祭日一覧のみ
         * @param {String} locale 取得する祝祭日
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setAfterWeekday: function (option, locale) {
            while (!this.isWeekday(option, locale)) {
                this.addDate(1);
            }
            return this;
        },
        /**
         * 現在の年の年間通算日の日付にセット
         *
         * @param {Number} num 年間通算日
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setOrdinalDate: function (num) {
            this.setFullYear(this.getFullYear(), 0, 1);
            this.addDate(_getInt(num) - 1);
            return this;
        },
        /**
         * 時間を0時0分0秒000にする
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        clearTime: function () {
            this.setHours(0, 0, 0, 0);
            return this;
        },
        /**-------------------------------------------------------------------------
         * get系（値の取得）
         *------------------------------------------------------------------------*/

        /**
         * 実際の月の数字を取得
         *
         * @return {Number} getMonth()に1を足した数字
         */
        getRealMonth: function () {
            return this.getMonth() + 1;
        },
        /**
         * 現在の日付がその月の何回の曜日かを取得する
         *
         * @return {Number} その曜日の回数
         */
        getDayCountsInMonth: function () {
            return Math.ceil(this.getDate() / 7);
        },
        /**
         * ISO8601形式の週番号を取得（月曜日起点、第1週は4日以上）
         *
         * @return {Number} 週番号
         */
        getISOWeek: function () {
            return _getWeek(1, 4, this);
        },
        /**
         * US形式の週番号を取得（日曜日起点、1月1日第一週）
         *
         * @return {Number} 週番号
         */
        getUSWeek: function () {
            return _getWeek(0, 0, this);
        },
        /**
         * ISO形式の曜日番号の取得
         *
         * @return {Number} 月曜日が 1、日曜日は 7
         */
        getISODay: function () {
            return (this.getDay() === 0) ? 7 : this.getDay();
        },
        /**
         * 年間通算日を取得
         *
         * @return {Number} 年間通算日
         */
        getOrdinalDate: function () {
            var date = new UltraDate(this.getFullYear(), 0, 1).addDate(-1);
            var thisDate = this.copy().clearTime();
            return (thisDate - date) / (24 * 60 * 60 * 1000);
        },
        /**
         * 月の最終日を取得
         *
         * @param {Number} num Nヶ月後
         *
         * @return {Number} 最終日の日付
         */
        getEndDate: function (num) {
            return this.copy().setEndDate(num).getDate();
        },
        /**
         * 年の祝祭日を取得して日付文字列と祝日名のオブジェクトを返信
         *
         * @param {Number} year 取得する年
         *                       undefinedの場合は現在のDateオブジェクトの年
         * @param {String} locale 取得するロケール
         *                       undefinedの場合は現在のデフォルトのロケール
         *
         * @return {Object} key:{String} 日付（yyyy/MM/dd形式）
         *                   value:{String} 祝祭日名
         */
        getHolidays: function (year, locale) {
            year = (!year) ? this.getFullYear() : _getInt(year);
            locale = (!locale) ? _defaultLocale : locale;
            if (!(locale in _holidays)) {
                _holidays[locale] = _holidays.def;
            }
            return _holidays[locale].get(year);
        },
        /**
         * 現在の日付の祝祭日名を返信（祝祭日で無い場合は空文字）
         *
         * @param {String} locale 取得するロケール
         *                       undefinedの場合は現在のデフォルトのロケール
         *
         * @return {String} 祝祭日の名前
         *                   祝祭日で無い場合は空文字
         */
        getHoliday: function (locale) {
            var holidays = this.getHolidays(this.getFullYear(), locale);
            var strDate = this.format(_defaultFormat);
            return (strDate in holidays) ? holidays[strDate] : "";
        },
        /**-------------------------------------------------------------------------
         * diff系
         *------------------------------------------------------------------------*/

        /**
         * 現在の日時から指定日時までの差分を取得
         * 日時の差分を日、時、分、秒、ミリ秒に変換して返す
         *
         * △△まで残り○○日○○時間○○分○○秒○○○の「○○」の部分をそれぞれ取得します
         *
         * @param {Date|String|Number} date 差分を取得する日付
         *                                   undefinedの場合は現在時刻
         *
         * @return {Object} after:{Boolean}現在の日付より後かどうか
         *                   day:{Number}日の差分
         *                   hour:{Number}時の差分
         *                   minute:{Number}分の差分
         *                   second:{Number}秒の差分
         *                   millisecond:{Number}ミリ秒の差分
         */
        diff: function (date) {
            date = _getDate(date);
            var diff = date.getTime() - this.getTime();
            var plus = diff >= 0;
            if (!plus) {
                diff *= -1;
            }
            var mSecond = 1000,
                    second = mSecond * 60,
                    minute = second * 60,
                    hour = minute * 24;

            var msVal = 0, seVal = 0, miVal = 0, hoVal = 0;
            var msTmp = 0, seTmp = 0, miTmp = 0, hoTmp = 0;

            msVal = diff % mSecond;
            msTmp = diff - msVal;
            if (msTmp > 0) {
                seVal = msTmp % second;
                seTmp = msTmp - seVal;
            }
            if (seTmp > 0) {
                miVal = seTmp % minute;
                miTmp = seTmp - miVal;
            }
            if (miTmp > 0) {
                hoVal = miTmp % hour;
                hoTmp = miTmp - hoVal;
            }

            return {
                after: plus,
                day: hoTmp / hour,
                hour: hoVal / minute,
                minute: miVal / second,
                second: seVal / mSecond,
                ms: msVal
            };
        },
        /**
         * 現在の日付から指定日付までの差分を月単位で取得
         * 今月の場合は「0」、翌月の場合は「1」、前月の場合は「-1」
         *
         * @param {Date|String|Number} date 差分を取得する日付
         *                                   undefinedの場合は現在時刻
         *
         * @return {Number} 月の差分
         */
        diffMonth: function (date) {
            date = _getDate(date);
            return ((date.getFullYear() * 12) + date.getMonth()) -
                    ((this.getFullYear() * 12) + this.getMonth());
        },
        /**
         * 現在の日付から指定日付までの差分を日単位で取得
         * 今日の場合は「0」、明日の場合は「1」、昨日の場合は「-1」
         *
         * @param {Date|String|Number} date 差分を取得する日付
         *                                   undefinedの場合は現在時刻
         *
         * @return {Number} 日の差分
         */
        diffDate: function (date) {
            date = _getDate(date);
            var diff = date.clearTime().getTime() -
                    this.copy().clearTime().getTime();
            return diff / (24 * 60 * 60 * 1000);
        },
        /**-------------------------------------------------------------------------
         * is系
         *------------------------------------------------------------------------*/

        /**
         * うるう年かどうか
         *
         * @param {Number} year 確認する年
         *
         * @return {Boolean}
         */
        isLeapYear: function (year) {
            year = (year) ? _getInt(year) : this.getFullYear();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },
        /**
         * 現在の月のn回目のw曜日かどうかの判定（例：第３月曜日）
         *
         * @param {Number} count 何回目。第1回目なら1。第3回目なら3
         * @param {Number} day 曜日。0〜6までの数字で曜日の日〜土を指定する
         *
         * @return {Boolean}
         */
        isDayCountsInMonth: function (count, day) {
            return this.getDayCountsInMonth() === _getInt(count) && this.getDay() === _getInt(day);
        },
        /**
         * ISO8601形式の週番号のw曜日かどうかの判定（例：第27週の月曜日）
         *
         * @param {Number} week 何週目。第1週目なら1。第3週目なら3
         * @param {Number} day 曜日。0〜6までの数字で曜日の日〜土を指定する
         *
         * @return {Boolean}
         */
        isISOWeekDay: function (week, day) {
            return this.getISOWeek() === _getInt(week) && this.getDay() === _getInt(day);
        },
        /**
         * US形式の週番号のw曜日かどうかの判定（例：第27週の月曜日）
         *
         * @param {Number} week 何週目。第1週目なら1。第3週目なら3
         * @param {Number} day 曜日。0〜6までの数字で曜日の日〜土を指定する
         *
         * @return {Boolean}
         */
        isUSWeekDay: function (week, day) {
            return this.getUSWeek() === _getInt(week) && this.getDay() === _getInt(day);
        },
        /**
         * ISO8601形式の週番号内の日かどうかの判定
         *
         * @param {Number} week 何週目。第1週目なら1。第3週目なら3
         *
         * @return {Boolean}
         */
        isISOWeek: function (week) {
            return this.getISOWeek() === _getInt(week);
        },
        /**
         * US形式の週番号内の日かどうかの判定
         *
         * @param {Number} week 何週目。第1週目なら1。第3週目なら3
         *
         * @return {Boolean}
         */
        isUSWeek: function (week) {
            return this.getUSWeek() === _getInt(week);
        },
        /**
         * 平日かどうかの判定
         *
         * @param {Number} option 0：土曜日、日曜日、引数「locale」で取得される祝祭日一覧
         *                         1：土曜日、日曜日のみ
         *                         2：日曜日、引数「locale」で取得される祝祭日一覧のみ
         *                         3：日曜日のみ
         *                         4：引数「locale」で取得される祝祭日一覧のみ
         * @param {String} locale 取得する祝祭日
         *
         * @return {Boolean}
         */
        isWeekday: function (option, locale) {
            switch (_getInt(option)) {
                case 0:
                    return (this.getDay() !== 6 && this.getDay() !== 0 && !this.isHoliday(locale));
                case 1:
                    return (this.getDay() !== 6 && this.getDay() !== 0);
                case 2:
                    return (this.getDay() !== 0 && !this.isHoliday(locale));
                case 3:
                    return (this.getDay() !== 0);
                case 4:
                    return (!this.isHoliday(locale));
            }
        },
        /**
         * 指定日と同じ日かどうかの判定
         *
         * @param {Date|String|Number} date 比較する日付
         *                                   undefinedの場合は今日
         *
         * @return {Boolean}
         */
        isSameDate: function (date) {
            return this.copy().clearTime().getTime() === _getDate(date).clearTime().getTime();
        },
        /**
         * 指定日より前かどうかの判定
         *
         * @param {Date|String|Number} date 比較する日付
         *                                   undefinedの場合は今日
         *
         * @return {Boolean}
         */
        isBeforeDate: function (date) {
            return this.copy().clearTime() < _getDate(date).clearTime();
        },
        /**
         * 指定日より後かどうかの判定
         *
         * @param {Date|String|Number} date 比較する日付
         *                                   undefinedの場合は今日
         *
         * @return {Boolean}
         */
        isAfterDate: function (date) {
            return this.copy().clearTime() > _getDate(date).clearTime();
        },
        /**
         * 引数の日付の中に納まっているかどうかを確認する関数
         *
         * @param {Date|String|Number} startDate 比較する日付
         *                                        undefinedの場合は今日
         * @param {Date|String|Number} endDate   比較する日付
         *                                        undefinedの場合は今日
         * @param {Boolean} useDaily             日単位かどうか
         *
         * @return {Boolean}
         */
        isBetween: function (startDate, endDate, useDaily) {
            startDate = _getDate(startDate);
            endDate = _getDate(endDate);
            if (useDaily === true) {
                startDate.clearTime();
                endDate.clearTime().addDate(1).addMilliseconds(-1);
            }
            return startDate <= this && this <= endDate;
        },
        /**
         * 今日かどうかの判定
         *
         * @return {Boolean}
         */
        isToday: function () {
            return this.isSameDate(new UltraDate());
        },
        /**
         * 明日かどうかの判定
         *
         * @return {Boolean}
         */
        isTomorrow: function () {
            return this.isSameDate(new UltraDate().addDate(1));
        },
        /**
         * 昨日かどうかの判定
         *
         * @return {Boolean}
         */
        isYesterday: function () {
            return this.isSameDate(new UltraDate().addDate(-1));
        },
        /**
         * 現在の日付が指定日の日付までN日かを判定
         *
         * @param {Number} num N日
         * @param {Date|String|Number} date 比較する日付
         *                                   undefinedの場合は今日
         *
         * @return {Boolean}
         */
        isNDateToThat: function (num, date) {
            date = _getDate(date);
            return this.isSameDate(date.addDate(_getInt(num) * -1));
        },
        /**
         * 祝祭日かどうかの判定
         *
         * @param {String} locale 取得するロケール
         *
         * @return {Boolean}
         */
        isHoliday: function (locale) {
            return this.getHoliday(locale) !== "";
        }
    };
    /**
     * 現在Date.prototypeに設定されているプロパティをUltraDate.prototypeに設定
     * constructor以外
     *
     * 同名のプロパティがある場合は上書きされるので注意
     */
    var keys = Object.getOwnPropertyNames(Date.prototype);
    for (var i in keys) {
        (function (key) {
            if (key !== "constructor") {
                UltraDate.prototype[key] = function () {
                    return  Date.prototype[key].apply(this.date.value, Array.prototype.slice.call(arguments));
                };
            }
        })(keys[i]);
    }
}());