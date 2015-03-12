'use strict';
describe('copy:', function () {
    var date = new UltraDate();
    it('コピーした日付が同じ', function () {
        expect(date.copy().getTime()).toEqual(date.getTime());
    });
});
describe('getDefaultFormat:', function () {
    it('デフォルトのフォーマットは「yyyy/MM/dd」', function () {
        expect(UltraDate.getDefaultFormat()).toEqual('yyyy/MM/dd');
    });
});
describe('setFormatOption:', function () {
    it('フォーマットの追加', function () {
        UltraDate.setFormatOption('test',
                {
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
                        if (year > 2000) {
                            ret = {
                                longName: '平成',
                                shortName: '平',
                                alphaName: 'H',
                                year: year - 2000
                            };
                        }
                        return ret;
                    }
                }
        );
        var date = UltraDate('2015-01-01');
        expect(date.format('eeee', true, 'test')).toEqual('0015');
    });
});
describe('setHolidayOption:', function () {
    it('祝祭日の追加', function () {
        UltraDate.setHolidayOption("shopHoliday",
                {
                    get: function (year) {
                        return this.holidays[year];
                    },
                    holidays: {
                        2015: {
                            "2015/01/01": "休み",
                            "2015/01/02": "休み",
                            "2015/01/03": "休み"
                        },
                        2016: {
                            "2016/01/01": "休み",
                            "2016/01/02": "休み",
                            "2016/01/03": "休み"
                        },
                        2017: {
                            "2017/01/01": "休み",
                            "2017/01/02": "休み",
                            "2017/01/03": "休み"
                        },
                        2018: {
                            "2018/01/01": "休み",
                            "2018/01/02": "休み",
                            "2018/01/03": "休み"
                        }
                    }
                }
        );
        var holidays = {
            "2015/01/01": "休み",
            "2015/01/02": "休み",
            "2015/01/03": "休み"
        };
        expect(UltraDate.getHolidays(2015, 'shopHoliday')).toEqual(holidays);
    });
    it('祝祭日の設定の引数が設定されていないときはエラーがスローされる', function () {
        expect(UltraDate.setHolidayOption).toThrow(new Error('Data type of the argument is incorrect'));
    });
    it('祝祭日の設定に「get」が無いときには例外がスローされる', function () {
        expect(function () {
            UltraDate.setHolidayOption('test', {});
        }).toThrow(new Error('get() does not exist'));
    });
    it('祝祭日の設定に「get」が関数でないときには例外がスローされる', function () {
        expect(function () {
            UltraDate.setHolidayOption('test', {get: ''});
        }).toThrow(new Error('get is not Function'));
    });
});
describe('setDefaultLocale:', function () {
    it('デフォルトロケールの引数に空文字をセットしたときはエラーがスローされる', function () {
        expect(UltraDate.setDefaultLocale).toThrow(new Error('Data type of the argument is incorrect'));
    });
    it('デフォルトロケールの引数に「def」を設定したときに' +
            'getHolidaysで取得できるオブジェクトは空', function () {
                UltraDate.setDefaultLocale('def');
                expect(UltraDate.getHolidays()).toEqual({});
            });
});
describe('other:', function () {
    it('インスタンス名の確認', function () {
        var date = new UltraDate();
        expect(date instanceof UltraDate).toBe(true);
    });
});
describe('newなし:', function () {
    it('引数なし', function () {
        var date = UltraDate();
        expect(date instanceof UltraDate).toBe(true);
    });
    it('引数（一つ）', function () {
        var date = UltraDate('2015-01-01');
        expect(date.isSameDate('2015-01-01')).toBe(true);
    });
    it('引数（複数）', function () {
        var date = UltraDate(2015, 0, 1);
        expect(date.isSameDate('2015-01-01')).toBe(true);
    });
});
describe('Dateメソッドとの互換:', function () {
    it('now', function () {
        expect(UltraDate.now() > 1426136310209).toBe(true);
    });
    it('引数（一つ）', function () {
        var date = UltraDate('2015-01-01');
        expect(UltraDate.UTC(2015, 0, 1) === 1420070400000).toBe(true);
    });
});
