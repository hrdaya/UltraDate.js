"use strict";

describe("test of utility groupe:", function () {
    describe("copy:", function () {
        var date = new UltraDate();
        it("コピーした日付が同じ", function () {
            expect(date.copy().getTime()).toEqual(date.getTime());
        });
    });
    describe("getDefaultFormat:", function () {
        it("デフォルトのフォーマットは「yyyy/MM/dd」", function () {
            expect(UltraDate.getDefaultFormat()).toEqual("yyyy/MM/dd");
        });
    });
    describe("setFormatOption:", function () {
        // @mytodo setFormatOptionのテストを書く
    });
    describe("setHolidayOption:", function () {
        // @mytodo setHolidayOptionのテストを書く
    });
    describe("setDefaultLocale:", function () {
        it("デフォルトロケールの引数に空文字をセットしたときはエラーがスローされる", function () {
            try {
                UltraDate.setDefaultLocale();
            } catch (e) {
                expect(e.message).toMatch("Data type of the argument is incorrect");
            }
        });
        it("デフォルトロケールの引数に「def」を設定したときに" +
                "getHolidaysで取得できるオブジェクトは空", function () {
                    var date = new UltraDate();
                    UltraDate.setDefaultLocale("def");
                    expect(date.getHolidays()).toEqual({});
                });
    });
});