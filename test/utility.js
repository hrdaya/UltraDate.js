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
    // @mytodo setFormatOptionのテストを書く
});
describe('setHolidayOption:', function () {
    // @mytodo setHolidayOptionのテストを書く
});
describe('setDefaultLocale:', function () {
    it('デフォルトロケールの引数に空文字をセットしたときはエラーがスローされる', function () {
        try {
            UltraDate.setDefaultLocale();
        } catch (e) {
            expect(e.message).toMatch('Data type of the argument is incorrect');
        }
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