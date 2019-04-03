/*!
 * UltraDate.js v2.2.2 (http://hrdaya.github.io/UltraDate.js/)
 *
 * Copyright 2015 yu-ki higa (https://github.com/hrdaya)
 * Licensed under MIT (https://github.com/hrdaya/UltraDate.js/blob/master/LICENSE)
 */

function UltraDate(year, month, day, hours, minutes, seconds, ms) {
    'use strict';
    var _getInt = function (num) {
        num = parseInt(num, 10);
        return isNaN(num) ? 0 : num;
    };

    if (this instanceof UltraDate) {
        this.__value = undefined;

        switch (arguments.length) {
            case 0:
                this.__value = new Date();
                break;
            case 1:
                this.__value = new Date(year);
                break;
            default:
                this.__value = new Date(
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
                return new UltraDate(year, month, day,
                        hours, minutes, seconds, ms);
        }
    }
}

(function () {
    'use strict';
    /**-------------------------------------------------------------------------
     * クロージャ
     *------------------------------------------------------------------------*/
    /**
     * デフォルトのフォーマット文字列
     */
    var _strFormat = 'yyyy/MM/dd';

    /**
     * デフォルトのロケール
     */
    var _defaultLocale = 'def';

    /**
     * 上書きされたprototype
     */
    var _duplicate = [];

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
         * デフォルトのフォーマット
         */
        def: {
            firstYear: null,
            longDay: [
                'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday'
            ],
            shortDay: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            longMonth: [
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'
            ],
            shortMonth: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            smallNoon: ['am', 'pm'],
            largeNoon: ['AM', 'PM'],
            era: function (date) {
                return {
                    longName: 'A.D.',
                    shortName: 'AD',
                    alphaName: 'A',
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
     *                  変換できなかったときは「0」
     */
    var _getInt = function (num) {
        num = parseInt(num, 10);
        return isNaN(parseInt(num, 10)) ? 0 : num;
    };

    /**
     * 左側0埋め（右側から桁数で切り取る）
     *
     * @param {Number} val 0埋めする値
     * @param {Number} num 桁数
     *
     * @return {String} 左側を0埋めした文字列
     */
    var _padSlice = function (val, num) {
        num = parseInt(num, 10);
        num = isNaN(num) ? 2 : num;
        return num < 2 ? val : (new Array(num).join('0') + val).slice(num * -1);
    };

    /**
     * Dateオブジェクトの取得
     *
     * @param {UltraDate|Date|String|Number} date
     *                                   引数を元にUltraDate|オブジェクトの作成
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
        return date;
    };

    /**
     * 週番号を取得
     * http://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param {Number} startDay 起点となる曜日番号
     *                          0〜6までの数字で曜日の日〜土を指定する
     *
     * @param {Number} reqDate 第1週の計算方法（第1週必要日数）
     *                         引数が0の時は1月1日のある週を第1週
     *                         引数が1～6の場合は必要日数
     *
     * @param {Date} date 週番号を計算するDateオブジェクト
     *
     * @return {Number} 週番号
     */
    var _getWeek = function (startDay, reqDate, date) {
        // 1週間となるのに必要な日数初期化（範囲外の時は4日）
        reqDate = parseInt(reqDate, 10);
        if (isNaN(reqDate) || (reqDate < 0 && 6 < reqDate)) {
            reqDate = 4;
        }
        // 1月1日がある週が1週目で無い場合は7日との差分を取得
        // 1月1日のある週がn日以上必要な場合は7からn日を引いた値を先頭週の日数に足す。
        reqDate = reqDate === 0 ? 0 : 7 - reqDate;

        // 現在の日付に影響を与えないように新しいDateオブジェクトを取得
        var thisDate = new Date(date);
        thisDate.setHours(0, 0, 0, 0);

        // 現在の日付の曜日番号を取得
        var thisDay = thisDate.getDay();

        // 起点となる曜日初期化（範囲外の時は月曜日：1）
        startDay = parseInt(startDay, 10);
        if (isNaN(startDay) || (startDay < 0 && 6 < startDay)) {
            startDay = 1;
        }

        // 起点となる曜日が日曜日以外の場合は起点の曜日を0とした週番号を取得する
        if (startDay !== 0) {
            thisDay -= startDay;
            if (thisDay < 0) {
                thisDay += 7;
            }
        }
        // 曜日番号が日数となるように1を足したものを7日から引き差分を取得
        // 該当日の週が7で割り切れるように7から日数を引いた値で満たす
        thisDay = 7 - (thisDay + 1);

        // 1月1日のDateオブジェクトを取得
        var firstDate = new Date(date.getFullYear(), 0, 1);
        // 24 * 60 * 60 * 1000 = 86400000
        // 「((thisDate - firstDate) / 86400000) + 1」で日数を計算
        // 「reqDate + thisDay」1月1日の週、該当日の週に計算で必要な値を足す
        var lapsedDays = ((thisDate - firstDate) / 86400000) + 1 +
                reqDate + thisDay;

        /**
         * 1月1日のある週を第1週とする場合は先頭の週に1日でも存在すれば第1週となる為、
         * 7で割った値を切り上げた値が週番号となる
         *
         * 1月1日のある週がn日以上必要な場合は7からn日を引いた値を先頭週の日数に足す。
         * 足した週が7より小さい場合は要件を満たしていない（日数 < n）という事になるので、
         * 切り捨てた値が週番号となる。
         * 該当年から見た週番号となるため前年の週番号の場合は0、翌年の週番号の場合は
         * 該当年の最終週に1を足した値となる
         */
        return reqDate === 0 ?
                Math.ceil(lapsedDays / 7) : Math.floor(lapsedDays / 7);
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
        return !Date.now ? new Date().getTime() : Date.now();
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
        return Date.UTC.apply(null, [].slice.apply(arguments));
    };

    /**
     * ISO8601形式の最終週の週番号を取得
     *
     * @static
     *
     * @param {Number} year yearがundefindの時は現在の年
     *
     * @return {Number} 最終週番号
     */
    UltraDate.getISOLastWeekNum = function (year) {
        year = year === undefined ?
                new Date().getFullYear() : _getInt(year);
        var date = new UltraDate(year, 11, 31);
        return date.getISODay() < 4 ?
                date.addDate(date.getISODay() * -1).getISOWeek() :
                date.getISOWeek();
    };

    /**
     * US形式の最終週の週番号を取得
     *
     * @static
     *
     * @param {Number} year yearがundefindの時は現在の年
     *
     * @return {Number} 最終週番号
     */
    UltraDate.getUSLastWeekNum = function (year) {
        year = year === undefined ?
                new Date().getFullYear() : _getInt(year);
        return new UltraDate(year, 11, 31).getUSWeek();
    };

    /**
     * 年の祝祭日を取得して日付文字列と祝日名のオブジェクトを返信
     *
     * @param {Number} year 取得する年
     *                      undefinedの場合は今年
     * @param {String} locale 取得するロケール
     *                        undefinedの場合は現在のデフォルトのロケール
     *
     * @return {Object} key:{String} 日付（yyyy/MM/dd形式）
     *                  value:{String} 祝祭日名
     */
    UltraDate.getHolidays = function (year, locale) {
        year = year === undefined ?
                new Date().getFullYear() : _getInt(year);
        locale = !locale ? _defaultLocale : locale;
        return _holidays.hasOwnProperty(locale) ?
                _holidays[locale].get(year) : _holidays.def.get(year);
    };

    /**
     * デフォルトのフォーマットを取得する
     *
     * @static
     *
     * @return {String} デフォルトのフォーマット日付
     */
    UltraDate.getDefaultFormat = function () {
        return _strFormat;
    };

    /**
     * Date.prototypeでUltraDate.prototypeを上書きしているものを取得
     * DateからUltraDateへの乗り換え用
     *
     * @return {Array} プロパティ名を保存した配列
     */
    UltraDate.getDuplicate = function () {
        return _duplicate;
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
     *
     * @throws {Error} 引数「locale」が文字列でない、「def」である、空である時
     *                 引数「options」がオブジェクトでない
     */
    UltraDate.setFormatOption = function (locale, options) {
        if (typeof locale !== 'string' ||
                locale === 'def' ||
                locale === '' ||
                Object.prototype.toString.call(options) !== '[object Object]') {
            throw new Error('Data type of the argument is incorrect');
        } else {
            if (!_formats.hasOwnProperty(locale)) {
                _formats[locale] = {};
            }
            if (options.hasOwnProperty('era') &&
                    !options.hasOwnProperty('eraStrict')) {
                options.eraStrict = options.era;
            }
            var keys = Object.keys(_formats.def);
            for (var i = 0, len = keys.length; i < len; i++) {
                _formats[locale][keys[i]] = options.hasOwnProperty(keys[i]) ?
                        options[keys[i]] : _formats.def[keys[i]];
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
     *
     * @throws {Error} 引数「locale」が文字列でない、「def」である、空である時
     *                 引数「options」がオブジェクトでない
     *                 引数「options」に「get関数」が存在しない
     */
    UltraDate.setHolidayOption = function (locale, options) {
        if (typeof locale !== 'string' ||
                locale === 'def' ||
                locale === '' ||
                Object.prototype.toString.call(options) !== '[object Object]') {
            throw new Error('Data type of the argument is incorrect');
        } else if (!options.hasOwnProperty('get')) {
            throw new Error('get() does not exist');
        } else if (Object.prototype.toString.call(
                options.get) !== '[object Function]') {
            throw new Error('get is not Function');
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
     *
     * @throws {Error} 引数「locale」が文字列でない、空である
     */
    UltraDate.setDefaultLocale = function (locale) {
        if (typeof locale !== 'string' || locale === '') {
            throw new Error('Data type of the argument is incorrect');
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
        /**
         * コンストラクタ
         */
        constructor: UltraDate,
        /**
         * 日付のコピーを作成する
         *
         * @return {UltraDate} 新規に作成したUltraDateオブジェクトを返信
         */
        copy: function () {
            return new UltraDate(this.__value);
        },
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
         * yyyy: 4桁の西暦（0000～9999）
         * yy:   西暦の右2桁の年（00～99）
         * eeee: 元号計算で出された年を4桁で0埋め（0000～9999）
         * eee:  元号計算で出された年を3桁で0埋め（000～999）
         * ee:   元号計算で出された年を2桁で0埋め（00～99）
         * e:    元号計算で出された年
         * EEEE: 元号計算で出された年を4桁で0埋め（0000～9999、元年表記対応）
         * EEE:  元号計算で出された年を3桁で0埋め（000～999、元年表記対応）
         * EE:   元号計算で出された年を2桁で0埋め（00～99、元年表記対応）
         * E:    元号計算で出された年（元年表記対応）
         * ggg:  長い形式の元号（平成）
         * gg:   短い形式の元号（平）
         * g:    アルファベットの頭文字（H）
         * MMMM: 長い形式の月表記文字列（January）
         * MMM:  短い形式の月表記文字列（Jan）
         * MM:   2桁で0埋めされた月（01～12）
         * M:    月（1～12）
         * dddd: 年間通算日（1～366）
         * ddd:  3桁で0埋めされた年間通算日（001～366）
         * dd:   2桁で0埋めされた日（01～31）
         * d:    日（1～31）
         * HH:   2桁で0埋めされた24時間表記（01～24）
         * H:    24時間表記（1～24）
         * hh:   2桁で0埋めされた12時間表記（00～11）
         * h:    12時間表記（0～11）
         * mm:   2桁で0埋めされた分（00～59）
         * m:    分（0～59）
         * ss:   2桁で0埋めされた秒（00～59）
         * s:    秒（0～59）
         * fff:  3桁で0埋めされたミリ秒（000～999）
         * f:    ミリ秒（0～999）
         * TT:   大文字の午前、午後（AM）
         * tt:   小文字の午前、午後（am）
         * www:  月の中の週番号（1～5）
         * ww:   2桁で0埋めされたISO8601形式の週番号（00～53）
         * w:    ISO8601形式の週番号（0～53）
         * WW:   2桁で0埋めされたUS形式の週番号（01～54）
         * W:    US形式の週番号（1～54）
         * DDD:  長い形式の曜日表記文字列（Sunday）
         * DD:   短い形式の曜日表記文字列（Sun）
         * D:    ISO8601形式の曜日番号（1～7）
         */
        format: function (format, eraStrict, locale) {
            if (typeof format !== 'string') {
                return format;
            }
            locale = typeof locale !== 'string' || locale === '' ?
                    _defaultLocale : locale;

            var options = _formats.hasOwnProperty(locale) ?
                    _formats[locale] : _formats.def;
            var era = eraStrict === true ?
                    options.eraStrict(this) : options.era(this);
            var noon = this.getHours() < 12 ? 0 : 1;

            var formatting = {
                yyyy: this.getFullYear(),
                yy: _padSlice(this.getFullYear()),
                eeee: _padSlice(era.year, 4),
                eee: _padSlice(era.year, 3),
                ee: _padSlice(era.year),
                e: era.year,
                EEEE: era.year === 1 && options.firstYear || _padSlice(era.year, 4),
                EEE: era.year === 1 && options.firstYear || _padSlice(era.year, 3),
                EE: era.year === 1 && options.firstYear || _padSlice(era.year),
                E: era.year === 1 && options.firstYear || era.year,
                ggg: era.longName,
                gg: era.shortName,
                g: era.alphaName,
                MMMM: options.longMonth[this.getMonth()],
                MMM: options.shortMonth[this.getMonth()],
                MM: _padSlice(this.getRealMonth()),
                M: this.getRealMonth(),
                dddd: this.getOrdinalDate(),
                ddd: _padSlice(this.getOrdinalDate(), 3),
                dd: _padSlice(this.getDate()),
                d: this.getDate(),
                HH: _padSlice(this.getHours()),
                H: this.getHours(),
                hh: _padSlice(this.getHours() - 12 * noon),
                h: this.getHours() - 12 * noon,
                mm: _padSlice(this.getMinutes()),
                m: this.getMinutes(),
                ss: _padSlice(this.getSeconds()),
                s: this.getSeconds(),
                fff: _padSlice(this.getMilliseconds(), 3),
                f: this.getMilliseconds(),
                TT: options.largeNoon[noon],
                tt: options.smallNoon[noon],
                www: this.getDayCountsInMonth(),
                ww: _padSlice(this.getISOWeek()),
                w: this.getISOWeek(),
                WW: _padSlice(this.getUSWeek()),
                W: this.getUSWeek(),
                DDD: options.longDay[this.getDay()],
                DD: options.shortDay[this.getDay()],
                D: this.getISODay()
            };

            var esc = '_____-----_____-----_____-----_____-----_____-----_____';
            format = format.replace(/("")/g, esc);

            var split = format.split('"');
            var reg = new RegExp(
                    '(' + Object.keys(formatting).join('|') + ')', 'g'
                    );

            for (var i = 0, len = split.length; i < len; i += 2) {
                split[i] = split[i].replace(reg, function (match) {
                    return formatting[match];
                });
            }

            format = split.join('');

            return format.replace(new RegExp('(' + esc + ')', 'g'), '"');
        },
        /**---------------------------------------------------------------------
         * add系（値の増減）
         * チェーンメソッド対応
         *--------------------------------------------------------------------*/
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
        /**---------------------------------------------------------------------
         * set系（値の設定）
         * チェーンメソッド対応
         *--------------------------------------------------------------------*/
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
         * 現在の月のn回目のw曜日に設定（例：第3月曜日）
         *
         * @param {Number} count 何回目。第1回目なら1。第3回目なら3
         * @param {Number} day 0：日曜日
         *                     1：月曜日
         *                     2：火曜日
         *                     3：水曜日
         *                     4：木曜日
         *                     5：金曜日
         *                     6：土曜日
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         *
         * @throws {Error} 引数「count」が数字にパース出来ない時
         *                 引数「day」が数字にパース出来ない時
         *                 引数「day」0～6の範囲に無いとき
         */
        setDayCountsInMonth: function (count, day) {
            count = parseInt(count, 10);
            day = parseInt(day, 10);
            if (isNaN(count) || isNaN(day) || (day < 0 && 6 < day)) {
                throw new Error('Data type of the argument is incorrect');
            } else {
                this.setDate(1);
                var date = day - this.getDay() + 1;
                date += date < 1 ? count * 7 : (count - 1) * 7;
                this.setDate(date);
            }
            return this;
        },
        /**
         * ISO8601形式の週番号とJsの曜日番号で日付をセット
         *
         * @param {Number} week ISO8601形式の週番号
         * @param {Number} day 0：日曜日
         *                     1：月曜日
         *                     2：火曜日
         *                     3：水曜日
         *                     4：木曜日
         *                     5：金曜日
         *                     6：土曜日
         * @param {Number} year 年（undefinedの場合はオブジェクトの年）
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         *
         * @throws {Error} 引数「day」が数字にパース出来ない時
         *                 引数「day」0～6の範囲に無いとき
         */
        setISOWeekDay: function (week, day, year) {
            day = parseInt(day, 10);
            if (isNaN(day) || (day < 0 && 6 < day)) {
                throw new Error('Data type of the argument is incorrect');
            } else {
                year = year === undefined ? this.getFullYear() : _getInt(year);
                this.setFullYear(year, 0, 1);
                day = day === 0 ? 6 : day - 1;
                var offset = this.getDay() < 2 || 4 < this.getDay() ? 0 : 1;
                this.setDayCountsInMonth(0, 1)
                        .addDate(((_getInt(week) - offset) * 7) + day);
            }
            return this;
        },
        /**
         * US形式の週番号とJsの曜日番号で日付をセット
         *
         * @param {Number} week US形式の週番号
         * @param {Number} day 0：日曜日
         *                     1：月曜日
         *                     2：火曜日
         *                     3：水曜日
         *                     4：木曜日
         *                     5：金曜日
         *                     6：土曜日
         * @param {Number} year 年（undefinedの場合はオブジェクトの年）
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         *
         * @throws {Error} 引数「day」が数字にパース出来ない時
         *                 引数「day」0～6の範囲に無いとき
         */
        setUSWeekDay: function (week, day, year) {
            day = parseInt(day, 10);
            if (isNaN(day) || (day < 0 && 6 < day)) {
                throw new Error('Data type of the argument is incorrect');
            } else {
                year = year === undefined ? this.getFullYear() : _getInt(year);
                this.setFullYear(year, 0, 1);
                var offset = this.getDay() === 0 ? 0 : 1;
                this.setDayCountsInMonth(0, 0)
                        .addDate(((_getInt(week) - offset) * 7) + day);
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
            this.clearTime().setFullYear(
                    this.getFullYear(), this.getMonth() + _getInt(num), 1
                    );
            return this;
        },
        /**
         * 日付を月末に変更
         *
         * @param {Number} num Nヶ月後
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         */
        setLastDate: function (num) {
            this.setFirstDate().addMonth(_getInt(num) + 1).setDate(0);
            return this;
        },
        /**
         * 日付を引数「option」でしたものの前の平日に変更
         *
         * @param {Number} option 0：土曜日、日曜日、引数「locale」で取得される祝祭日
         *                        1：土曜日、日曜日のみ
         *                        2：日曜日、引数「locale」で取得される祝祭日のみ
         *                        3：日曜日のみ
         *                        4：引数「locale」で取得される祝祭日一覧のみ
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
         * @param {Number} option 0：土曜日、日曜日、引数「locale」で取得される祝祭日
         *                        1：土曜日、日曜日のみ
         *                        2：日曜日、引数「locale」で取得される祝祭日のみ
         *                        3：日曜日のみ
         *                        4：引数「locale」で取得される祝祭日一覧のみ
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
            this.setFullYear(this.getFullYear(), 0, 0);
            this.addDate(_getInt(num));
            return this;
        },
        /**
         * 分を丸めた時間にセットする
         *
         * @param {Number} time 丸める時間（5, 10, 15, 30, 60）
         * @param {Number} method 丸め方（0：切捨て, 1：切上げ, 2：近いほうに寄せる）
         *
         * @return {this} 自身に返す（チェーンメソッド用）
         *
         * @throws {Error} 引数「time」が（5, 10, 15, 30, 60）で無いとき
         */
        setRoundingTime: function (time, method) {
            time = _getInt(time);
            var arr = [5, 10, 15, 30, 60];
            if (arr.indexOf(time) < 0) {
                throw new Error('Data type of the argument is incorrect');
            } else {
                // 60 * 1000 = 60000
                this.addMilliseconds((this.getTime() % 60000) * -1);
                var sup = this.getTime() % (time * 60000);
                this.setMilliseconds(sup * -1);
                switch (_getInt(method)) {
                    case 1:
                        if (sup !== 0) {
                            this.addMinutes(time);
                        }
                        break;
                    case 2:
                        if (time * 60000 <= sup * 2) {
                            this.addMinutes(time);
                        }
                        break;
                }
            }
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
        /**---------------------------------------------------------------------
         * get系（値の取得）
         *--------------------------------------------------------------------*/
        /**
         * 満年齢を取得（現在の日付から引数dateの日付まで）
         *
         * @param {UltraDate|Date|String|Number} date dateがundefindの時は今日
         *
         * @return {Number} 満年齢
         */
        getAge: function (date) {
            var today = date === undefined ?
                    new UltraDate() : new UltraDate(date);
            var birthday = this.copy().clearTime();
            var years = today.clearTime().getFullYear() -
                    birthday.clearTime().getFullYear();
            birthday.setFullYear(today.getFullYear());
            return today < birthday ? years -= 1 : years;
        },
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
         * ISO8601形式の週番号を年と一緒に取得
         *
         * @return {Object} yearとweekを含むオブジェクト
         */
        getISOWeekWithYear: function () {
            var ret = {
                year: this.getFullYear(),
                week: this.getISOWeek()
            };
            if (ret.week === 0) {
                // 前の年の週番号のときの処理
                ret.year -= 1;
                ret.week = UltraDate.getISOLastWeekNum(ret.year);
            } else if (ret.week > UltraDate.getISOLastWeekNum(ret.year)) {
                // 翌年の週番号のときの処理
                ret.year += 1;
                ret.week = 1;
            }
            return ret;
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
         * ISO8601形式の曜日番号の取得
         *
         * @return {Number} 月曜日が 1、日曜日は 7
         */
        getISODay: function () {
            return this.getDay() === 0 ? 7 : this.getDay();
        },
        /**
         * 年間通算日を取得
         *
         * @return {Number} 年間通算日
         */
        getOrdinalDate: function () {
            var date = new Date(this.getFullYear(), 0, 0);
            var thisDate = this.copy().clearTime();
            // 24 * 60 * 60 * 1000 = 86400000
            return (thisDate - date) / 86400000;
        },
        /**
         * 月の最終日を取得
         *
         * @param {Number} num Nヶ月後
         *
         * @return {Number} 最終日の日付
         */
        getLastDate: function (num) {
            return this.copy().setLastDate(num).getDate();
        },
        /**
         * 現在の日付の祝祭日名を返信（祝祭日で無い場合は空文字）
         *
         * @param {String} locale 取得するロケール
         *                        undefinedの場合は現在のデフォルトのロケール
         *
         * @return {String} 祝祭日の名前
         *                  祝祭日で無い場合は空文字
         */
        getHoliday: function (locale) {
            var holidays = UltraDate.getHolidays(this.getFullYear(), locale);
            var strDate = this.format(_strFormat);
            return holidays.hasOwnProperty(strDate) ? holidays[strDate] : '';
        },
        /**---------------------------------------------------------------------
         * diff系
         *--------------------------------------------------------------------*/

        /**
         * 現在の日時から指定日時までの差分を取得
         * 日時の差分を日、時、分、秒、ミリ秒に変換して返す
         *
         * △△まで残り○○日○○時間○○分○○秒○○○の「○○」の部分をそれぞれ取得
         *
         * @param {UltraDate|Date|String|Number} date 差分を取得する日付
         *                                            undefinedの場合は現在時刻
         *
         * @return {Object} after:{Boolean}現在の日付より後かどうか
         *                  day:{Number}日の差分
         *                  hour:{Number}時の差分
         *                  minute:{Number}分の差分
         *                  second:{Number}秒の差分
         *                  millisecond:{Number}ミリ秒の差分
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
         * @param {UltraDate|Date|String|Number} date 差分を取得する日付
         *                                            undefinedの場合は現在時刻
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
         * @param {UltraDate|Date|String|Number} date 差分を取得する日付
         *                                            undefinedの場合は現在時刻
         *
         * @return {Number} 日の差分
         */
        diffDate: function (date) {
            date = _getDate(date);
            var diff = date.clearTime().getTime() -
                    this.copy().clearTime().getTime();
            // 24 * 60 * 60 * 1000 = 86400000
            return diff / 86400000;
        },
        /**---------------------------------------------------------------------
         * is系
         *--------------------------------------------------------------------*/
        /**
         * うるう年かどうか
         *
         * @return {Boolean}
         */
        isLeapYear: function () {
            var year = this.getFullYear();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },
        /**
         * 現在の月のn回目のw曜日かどうかの判定（例：第３月曜日）
         *
         * @param {Number} count 何回目。第1回目なら1。第3回目なら3
         * @param {Number} day 0：日曜日
         *                     1：月曜日
         *                     2：火曜日
         *                     3：水曜日
         *                     4：木曜日
         *                     5：金曜日
         *                     6：土曜日
         *
         * @return {Boolean}
         */
        isDayCountsInMonth: function (count, day) {
            return this.getDayCountsInMonth() === _getInt(count) &&
                    this.getDay() === _getInt(day);
        },
        /**
         * ISO8601形式の週番号のw曜日かどうかの判定（例：第27週の月曜日）
         *
         * @param {Number} week 何週目。第1週目なら1。第3週目なら3
         * @param {Number} day 0：日曜日
         *                     1：月曜日
         *                     2：火曜日
         *                     3：水曜日
         *                     4：木曜日
         *                     5：金曜日
         *                     6：土曜日
         *
         * @return {Boolean}
         */
        isISOWeekDay: function (week, day) {
            return this.getISOWeek() === _getInt(week) &&
                    this.getDay() === _getInt(day);
        },
        /**
         * US形式の週番号のw曜日かどうかの判定（例：第27週の月曜日）
         *
         * @param {Number} week 何週目。第1週目なら1。第3週目なら3
         * @param {Number} day 0：日曜日
         *                     1：月曜日
         *                     2：火曜日
         *                     3：水曜日
         *                     4：木曜日
         *                     5：金曜日
         *                     6：土曜日
         *
         * @return {Boolean}
         */
        isUSWeekDay: function (week, day) {
            return this.getUSWeek() === _getInt(week) &&
                    this.getDay() === _getInt(day);
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
         * @param {Number} option 0：土曜日、日曜日、引数「locale」で取得される祝祭日
         *                        1：土曜日、日曜日のみ
         *                        2：日曜日、引数「locale」で取得される祝祭日のみ
         *                        3：日曜日のみ
         *                        4：引数「locale」で取得される祝祭日一覧のみ
         * @param {String} locale 取得する祝祭日
         *
         * @return {Boolean}
         */
        isWeekday: function (option, locale) {
            switch (_getInt(option)) {
                case 0:
                    return this.getDay() !== 6 && this.getDay() !== 0 &&
                            !this.isHoliday(locale);
                case 1:
                    return this.getDay() !== 6 && this.getDay() !== 0;
                case 2:
                    return this.getDay() !== 0 && !this.isHoliday(locale);
                case 3:
                    return this.getDay() !== 0;
                case 4:
                    return !this.isHoliday(locale);
            }
        },
        /**
         * 指定日と同じ日かどうかの判定
         *
         * @param {UltraDate|Date|String|Number} date 比較する日付
         *                                            undefinedの場合は今日
         *
         * @return {Boolean}
         */
        isSameDate: function (date) {
            return this.copy().clearTime().getTime() ===
                    _getDate(date).clearTime().getTime();
        },
        /**
         * 指定日より前かどうかの判定
         *
         * @param {UltraDate|Date|String|Number} date 比較する日付
         *                                            undefinedの場合は今日
         *
         * @return {Boolean}
         */
        isBeforeDate: function (date) {
            return this.copy().clearTime() < _getDate(date).clearTime();
        },
        /**
         * 指定日より後かどうかの判定
         *
         * @param {UltraDate|Date|String|Number} date 比較する日付
         *                                            undefinedの場合は今日
         *
         * @return {Boolean}
         */
        isAfterDate: function (date) {
            return this.copy().clearTime() > _getDate(date).clearTime();
        },
        /**
         * 引数の日付の中に納まっているかどうかを確認する関数
         *
         * @param {UltraDate|Date|String|Number} startDate 比較する日付
         *                                                 undefinedの場合は今日
         * @param {UltraDate|Date|String|Number} endDate   比較する日付
         *                                                 undefinedの場合は今日
         * @param {Boolean} useDaily                       日単位かどうか
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
         * 祝祭日かどうかの判定
         *
         * @param {String} locale 取得するロケール
         *
         * @return {Boolean}
         */
        isHoliday: function (locale) {
            var holidays = UltraDate.getHolidays(this.getFullYear(), locale);
            return holidays.hasOwnProperty(this.format(_strFormat));
        },
        /**
         * 現在のオブジェクトが正当な日付オブジェクトかどうかの判定
         *
         * @return {boolean} 正当な日付の場合はtrue
         */
        isValid: function () {
            return !isNaN(this.__value.getTime());
        }
    };
    /**
     * 現在Date.prototypeに設定されているプロパティをUltraDate.prototypeに設定
     * constructor以外
     *
     * 同名のプロパティがある場合は上書きされるので注意
     */
    var keys = Object.getOwnPropertyNames(Date.prototype);
    for (var i = 0, len = keys.length; i < len; i++) {
        (function (key) {
            if (key !== 'constructor') {
                if (UltraDate.hasOwnProperty(key)) {
                    _duplicate.push(key);
                }
                UltraDate.prototype[key] = function () {
                    return  Date.prototype[key].apply(
                            this.__value,
                            Array.prototype.slice.call(arguments)
                            );
                };
            }
        }(keys[i]));
    }
}());