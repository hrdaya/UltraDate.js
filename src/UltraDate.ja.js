/*!
 * <pkg.name>.jsの日本用設定 (<pkg.homepage>)
 *
 * Copyright 2015 <pkg.author.name> (<pkg.author.url>)
 * Licensed under <pkg.license.type> (<pkg.license.url>)
 */

(function () {
    /**
     * 日付フォーマット、祝祭日のオプション追加のサンプル
     *
     * 日本で使用する日付フォーマットや祝祭日計算を追加してデフォルトのロケールを変更
     *
     * デフォルトのロケールを変更する場合は日付フォーマット、祝祭日データ取得で
     * 使用するので片方だけの追加にならないように注意が必要
     * ロケールが設定されていない場合は「def」が使用される
     */
    'use strict';
    /**
     * 定数
     */
    var consts = {
        defaultFormat: UltraDate.getDefaultFormat(), // デフォルトのフォーマット
        strLocale: 'ja', // デフォルトに設定するロケール
        strFurikae: '振替休日', // 振替休日用の文字列
        dateFurikae: new Date(1973, 3, 12), // 振替休日の施行日
        strKokumin: '国民の休日', // 国民の休日用の文字列
        dateKokumin: new Date(1985, 11, 27), // 国民の休日の施行日
        dateReiwa: new Date(2019, 4, 1), // 令和の始まり
        dateHeisei: new Date(1989, 0, 8), // 平成の始まり
        dateShowa: new Date(1926, 11, 25), // 昭和の始まり
        dateTaisho: new Date(1912, 6, 30), // 大正の始まり
        dateMeiji: new Date(1868, 0, 25), // 明治の始まり
        yearReiwa: 2018, // 平成の始まり年の前の年
        yearHeisei: 1988, // 平成の始まり年の前の年
        yearShowa: 1925, // 昭和の始まり年の前の年
        yearTaisho: 1911, // 大正の始まり年の前の年
        yearMeiji: 1867 // 明治の始まり年の前の年
    };
    // 日付フォーマットのオプション追加
    UltraDate.setFormatOption(consts.strLocale,
            {
                firstYear: '元',
                longDay: ['日曜日', '月曜日', '火曜日', '水曜日',
                    '木曜日', '金曜日', '土曜日'],
                shortDay: ['日', '月', '火', '水', '木', '金', '土'],
                longMonth: ['睦月', '如月', '弥生', '卯月', '皐月', '水無月',
                    '文月', '葉月', '長月', '神無月', '霜月', '師走'],
                shortMonth: ['睦月', '如月', '弥生', '卯月', '皐月', '水無月',
                    '文月', '葉月', '長月', '神無月', '霜月', '師走'],
                smallNoon: ['AM', 'PM'],
                largeNoon: ['午前', '午後'],
                era: function (date) {
                    var year = date.getFullYear();
                    var ret = {
                        longName: '西暦',
                        shortName: '西',
                        alphaName: 'AD',
                        year: year
                    };
                    if (year > consts.yearReiwa) {
                        ret = {
                            longName: '令和',
                            shortName: '令',
                            alphaName: 'R',
                            year: year - consts.yearReiwa
                        };
                    } else if (year > consts.yearHeisei) {
                        ret = {
                            longName: '平成',
                            shortName: '平',
                            alphaName: 'H',
                            year: year - consts.yearHeisei
                        };
                    } else if (year > consts.yearShowa) {
                        ret = {
                            longName: '昭和',
                            shortName: '昭',
                            alphaName: 'S',
                            year: year - consts.yearShowa
                        };
                    } else if (year > consts.yearTaisho) {
                        ret = {
                            longName: '大正',
                            shortName: '大',
                            alphaName: 'T',
                            year: year - consts.yearTaisho
                        };
                    } else if (year > consts.yearMeiji) {
                        ret = {
                            longName: '明治',
                            shortName: '明',
                            alphaName: 'M',
                            year: year - consts.yearMeiji
                        };
                    }
                    return ret;
                },
                eraStrict: function (date) {
                    if (date >= consts.dateReiwa) {
                        return {
                            longName: '令和',
                            shortName: '令',
                            alphaName: 'R',
                            year: date.getFullYear() - consts.yearReiwa
                        };
                    } else if (date >= consts.dateHeisei) {
                        return {
                            longName: '平成',
                            shortName: '平',
                            alphaName: 'H',
                            year: date.getFullYear() - consts.yearHeisei
                        };
                    } else if (date >= consts.dateShowa) {
                        return {
                            longName: '昭和',
                            shortName: '昭',
                            alphaName: 'S',
                            year: date.getFullYear() - consts.yearShowa
                        };
                    } else if (date >= consts.dateTaisho) {
                        return {
                            longName: '大正',
                            shortName: '大',
                            alphaName: 'T',
                            year: date.getFullYear() - consts.yearTaisho
                        };
                    } else if (date >= consts.dateMeiji) {
                        return {
                            longName: '明治',
                            shortName: '明',
                            alphaName: 'M',
                            year: date.getFullYear() - consts.yearMeiji
                        };
                    } else {
                        return {
                            longName: '西暦',
                            shortName: '西',
                            alphaName: 'AD',
                            year: date.getFullYear()
                        };
                    }
                }
            }
    );
    // 祝祭日のオプション追加
    UltraDate.setHolidayOption(consts.strLocale,
            {
                /**
                 * 指定年の祝祭日を取得
                 *
                 * @param {Number} year 取得する年
                 *
                 * @return {Object} key:{String} 日付（yyyy/MM/dd形式）
                 *                   value:{String} 祝祭日名
                 */
                get: function (year) {
                    if (!this.cache.hasOwnProperty(year)) {
                        this.create(year);
                    }
                    return this.cache[year];
                },
                /**
                 * 取得した祝祭日データのキャッシュ
                 */
                cache: {},
                /**
                 * 現在の年の祝祭日の配列を作成してキャッシュに保存
                 *
                 * @param {Number} year 作成する年
                 *
                 * @return {Void} 特になし
                 */
                create: function (year) {
                    var date = new UltraDate(year, 0, 1);
                    this.cache[year] = {};
                    // 祝日設定の配列を元に祝日のオブジェクトを作成する
                    for (var i = 0, len = this.holidays.length; i < len; i++) {
                        if (this.holidays[i][0] <= year &&
                                year <= this.holidays[i][1]) {
                            this.setHoliday(
                                    date,
                                    year,
                                    this.holidays[i][2] - 1,
                                    this.holidays[i][3],
                                    this.holidays[i][4]
                                    );
                        }
                    }
                    // キャッシュのオブジェクトのキー一覧を取得する
                    var keys = Object.keys(this.cache[year]).sort();
                    // キーの順番に振替休日と国民の休日を確認していく
                    for (i = 0, len = keys.length; i < len; i++) {
                        // 該当する日付をパースして、ミリ秒の時間を取得
                        var parse = UltraDate.parse(keys[i] + ' 00:00:00');
                        // 日付をセット
                        date.setTime(parse);
                        // 振替休日の関数実行
                        this.setFurikae(date, year);
                        // 日付を再セット
                        date.setTime(parse);
                        // 国民の休日の関数実行
                        this.setKokumin(date, year);
                    }
                },
                /**
                 * 祝祭日の設定
                 *
                 * @param {UltraDate} date 祝祭日の設定に使用するUltraDateオブジェクト
                 * @param {Number} year 祝祭日を設定する年
                 * @param {Number} month 月
                 * @param {Number|Array|String} dateVal 数字：固定日付
                 *                                      配列：[week,day]形式の配列
                 *                                      文字列：日付を取得する関数
                 * @param {String} name 祝祭日名
                 *
                 * @return {Void} 特になし
                 */
                setHoliday: function (date, year, month, dateVal, name) {
                    var toClassString = Object.prototype.toString;
                    // とりあえずその月の1日にセット
                    date.setFullYear(year, month, 1);
                    switch (toClassString.call(dateVal)) {
                        case '[object Number]':
                            date.setDate(dateVal);
                            break;
                        case '[object Array]':
                            date.setDayCountsInMonth(dateVal[0], dateVal[1]);
                            break;
                        case '[object String]':
                            date.setDate(this[dateVal](year));
                            break;
                        default:
                            break;
                    }
                    // キャッシュにデータを挿入する
                    this.cache[year][date.format(consts.defaultFormat)] = name;
                },
                /**
                 * 振替休日の設定
                 *
                 * http://www.wikiwand.com/ja/%E6%8C%AF%E6%9B%BF%E4%BC%91%E6%97%A5
                 *
                 * @param {UltraDate} date 設定に使用するUltraDateオブジェクト
                 * @param {Number} year 祝祭日を設定する年
                 *
                 * @return {Void} 特になし
                 */
                setFurikae: function (date, year) {
                    // 祝日が1973年4月12日以降で、日曜日に当たる場合は
                    // 翌日に振替休日を設定
                    if (date.getDay() === 0 && date >= consts.dateFurikae) {
                        while (this.cache[year].hasOwnProperty(date.format(consts.defaultFormat)) ||
                                date.getDay() === 0) {
                            date.addDate(1);
                        }
                        var format = date.format(consts.defaultFormat);
                        this.cache[year][format] = consts.strFurikae;
                    }
                },
                /**
                 * 国民の休日の設定
                 * 1985年12月27日以降で祝日と祝日に挟まれた平日の場合は
                 * 挟まれた平日を国民の休日にする
                 *
                 * http://www.wikiwand.com/ja/%E5%9B%BD%E6%B0%91%E3%81%AE%E4%BC%91%E6%97%A5
                 *
                 * @param {UltraDate} date 設定に使用するUltraDateオブジェクト
                 * @param {Number} year 祝祭日を設定する年
                 *
                 * @return {Void} 特になし
                 */
                setKokumin: function (date, year) {
                    // 日付を二日前にセット
                    date.setDate(date.getDate() - 2);
                    if (this.cache[year].hasOwnProperty(date.format(consts.defaultFormat)) &&
                            date >= consts.dateKokumin) {
                        var day = date.addDate(1).getDay();
                        var format = date.format(consts.defaultFormat);
                        // 挟まれた平日が休日なので該当日が火曜日以降
                        // 該当日が月曜日の場合は振替休日となっている
                        if (day > 1 && !this.cache[year].hasOwnProperty(format)) {
                            this.cache[year][format] = consts.strKokumin;
                        }
                    }
                },
                /**
                 * 春分の日の日付を取得
                 *
                 * http://www.wikiwand.com/ja/%E6%98%A5%E5%88%86%E3%81%AE%E6%97%A5
                 * http://www.wikiwand.com/ja/%E6%98%A5%E5%88%86
                 *
                 * @param {Number} year 取得する年
                 *
                 * @return {Number} 春分の日の日付
                 */
                getSyunbun: function (year) {
                    var surplus = year % 4;
                    if (1800 <= year && year <= 1827) {
                        return 21;
                    } else if (1828 <= year && year <= 1859) {
                        return surplus < 1 ? 20 : 21;
                    } else if (1860 <= year && year <= 1891) {
                        return surplus < 2 ? 20 : 21;
                    } else if (1892 <= year && year <= 1899) {
                        return surplus < 3 ? 20 : 21;
                    } else if (1900 <= year && year <= 1923) {
                        return surplus < 3 ? 21 : 22;
                    } else if (1924 <= year && year <= 1959) {
                        return 21;
                    } else if (1960 <= year && year <= 1991) {
                        return surplus < 1 ? 20 : 21;
                    } else if (1992 <= year && year <= 2023) {
                        return surplus < 2 ? 20 : 21;
                    } else if (2024 <= year && year <= 2055) {
                        return surplus < 3 ? 20 : 21;
                    } else if (2056 <= year && year <= 2091) {
                        return 20;
                    } else if (2092 <= year && year <= 2099) {
                        return surplus < 1 ? 19 : 20;
                    } else if (2100 <= year && year <= 2123) {
                        return surplus < 1 ? 20 : 21;
                    } else if (2124 <= year && year <= 2155) {
                        return surplus < 2 ? 20 : 21;
                    } else if (2156 <= year && year <= 2187) {
                        return surplus < 3 ? 20 : 21;
                    } else if (2188 <= year && year <= 2199) {
                        return 20;
                    } else {
                        return 20;
                    }
                },
                /**
                 * 秋分の日の日付を取得
                 *
                 * http://www.wikiwand.com/ja/%E7%A7%8B%E5%88%86%E3%81%AE%E6%97%A5
                 * http://www.wikiwand.com/ja/%E7%A7%8B%E5%88%86
                 *
                 * @param {Number} year 取得する年
                 *
                 * @return {Number} 秋分の日の日付
                 */
                getSyuubun: function (year) {
                    var surplus = year % 4;
                    if (1800 <= year && year <= 1823) {
                        return surplus < 2 ? 23 : 24;
                    } else if (1824 <= year && year <= 1851) {
                        return surplus < 3 ? 23 : 24;
                    } else if (1852 <= year && year <= 1887) {
                        return 23;
                    } else if (1888 <= year && year <= 1899) {
                        return surplus < 1 ? 22 : 23;
                    } else if (1900 <= year && year <= 1919) {
                        return surplus < 1 ? 23 : 24;
                    } else if (1920 <= year && year <= 1947) {
                        return surplus < 2 ? 23 : 24;
                    } else if (1948 <= year && year <= 1979) {
                        return surplus < 3 ? 23 : 24;
                    } else if (1980 <= year && year <= 2011) {
                        return 23;
                    } else if (2012 <= year && year <= 2043) {
                        return surplus < 1 ? 22 : 23;
                    } else if (2044 <= year && year <= 2075) {
                        return surplus < 2 ? 22 : 23;
                    } else if (2076 <= year && year <= 2099) {
                        return surplus < 3 ? 22 : 23;
                    } else if (2100 <= year && year <= 2103) {
                        return surplus < 3 ? 23 : 24;
                    } else if (2104 <= year && year <= 2139) {
                        return 23;
                    } else if (2140 <= year && year <= 2167) {
                        return surplus < 1 ? 22 : 23;
                    } else if (2168 <= year && year <= 2199) {
                        return surplus < 2 ? 22 : 23;
                    } else {
                        return 23;
                    }
                },
                /**
                 * 祝祭日の配列
                 *
                 * [開始年、終了年、月、日、祝祭日名]
                 * 日は数字ならその日、配列なら[第何週、曜日]、文字列なら実行する関数名
                 *
                 * http://www.wikiwand.com/ja/%E5%9B%BD%E6%B0%91%E3%81%AE%E7%A5%9D%E6%97%A5
                 * http://www.wikiwand.com/ja/%E5%9B%BD%E6%B0%91%E3%81%AE%E7%A5%9D%E6%97%A5%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%B3%95%E5%BE%8B
                 * http://www.wikiwand.com/ja/%E7%A5%9D%E7%A5%AD%E6%97%A5
                 *
                 */
                holidays: [
                    [1874, 1948, 1, 1, '四方節'],
                    [1949, 9999, 1, 1, '元日'],
                    [1874, 1948, 1, 3, '元始祭'],
                    [1874, 1948, 1, 5, '新年宴会'],
                    [1949, 1999, 1, 15, '成人の日'],
                    [2000, 9999, 1, [2, 1], '成人の日'],
                    [1874, 1912, 1, 30, '孝明天皇祭'],
                    [1874, 1948, 2, 11, '紀元節'],
                    [1967, 9999, 2, 11, '建国記念の日'],
                    [2020, 9999, 2, 23, '天皇誕生日'],
                    [1989, 1989, 2, 24, '昭和天皇の大喪の礼'],
                    [1879, 1948, 3, 'getSyunbun', '春季皇霊祭'],
                    [1949, 2199, 3, 'getSyunbun', '春分の日'],
                    [1874, 1948, 4, 3, '神武天皇祭'],
                    [1959, 1959, 4, 10, '皇太子・明仁親王の結婚の儀'],
                    [1927, 1948, 4, 29, '天長節'],
                    [1949, 1988, 4, 29, '天皇誕生日'],
                    [1989, 2006, 4, 29, 'みどりの日'],
                    [2007, 9999, 4, 29, '昭和の日'],
                    [2019, 2019, 5, 1, '即位の礼'],
                    [1949, 9999, 5, 3, '憲法記念日'],
                    [2007, 9999, 5, 4, 'みどりの日'],
                    [1949, 9999, 5, 5, 'こどもの日'],
                    [1993, 1993, 6, 9, '皇太子・徳仁親王の結婚の儀'],
                    [1996, 2002, 7, 20, '海の日'],
                    [2003, 9999, 7, [3, 1], '海の日'],
                    [1913, 1926, 7, 30, '明治天皇祭'],
                    [2016, 9999, 8, 11, '山の日'],
                    [1913, 1926, 8, 31, '天長節'],
                    [1966, 2002, 9, 15, '敬老の日'],
                    [2003, 9999, 9, [3, 1], '敬老の日'],
                    [1874, 1878, 9, 17, '神嘗祭'],
                    [1878, 1947, 9, 'getSyuubun', '秋季皇霊祭'],
                    [1948, 2199, 9, 'getSyuubun', '秋分の日'],
                    [1966, 1999, 10, 10, '体育の日'],
                    [2000, 9999, 10, [2, 1], '体育の日'],
                    [1873, 1879, 10, 17, '神嘗祭'],
                    [2019, 2019, 10, 22, '即位礼正殿の儀'],
                    [1913, 1926, 10, 31, '天長節祝日'],
                    [1873, 1911, 11, 3, '天長節'],
                    [1927, 1947, 11, 3, '明治節'],
                    [1948, 9999, 11, 3, '文化の日'],
                    [1990, 1990, 11, 12, '即位礼正殿の儀'],
                    [1873, 1947, 11, 23, '新嘗祭'],
                    [1948, 9999, 11, 23, '勤労感謝の日'],
                    [1915, 1915, 11, 10, '即位の礼'],
                    [1915, 1915, 11, 14, '大嘗祭'],
                    [1915, 1915, 11, 16, '大饗第1日'],
                    [1928, 1928, 11, 10, '即位の礼'],
                    [1928, 1928, 11, 14, '大嘗祭'],
                    [1928, 1928, 11, 16, '大饗第1日'],
                    [1989, 2018, 12, 23, '天皇誕生日'],
                    [1927, 1947, 12, 25, '大正天皇祭']
                ]
            }
    );
    // デフォルトのロケールを設定
    UltraDate.setDefaultLocale(consts.strLocale);
})();
