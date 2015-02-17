"use strict";

describe("test of set groupe:", function () {
    describe("setRealMonth:", function () {
        var date = new UltraDate("2015/01/01").setRealMonth(3);
        it("3月にセットしたので戻り値は「3」", function () {
            expect(date.getRealMonth()).toEqual(3);
        });
    });
    describe("setDayCountsInMonth:", function () {
        var date14 = new UltraDate("2015/01/01").setDayCountsInMonth(1, 4);
        it("第1木曜日にセットしたので月の戻り値は「1」日の戻り値は「1」", function () {
            expect(date14.getRealMonth()).toEqual(1);
            expect(date14.getDate()).toEqual(1);
        });
        var date10 = new UltraDate("2015/01/01").setDayCountsInMonth(1, 0);
        it("第1日曜日にセットしたので月の戻り値は「1」日の戻り値は「4」", function () {
            expect(date10.getRealMonth()).toEqual(1);
            expect(date10.getDate()).toEqual(4);
        });
        var date33 = new UltraDate("2015/01/01").setDayCountsInMonth(3, 3);
        it("第3日曜日にセットしたので月の戻り値は「1」日の戻り値は「21」", function () {
            expect(date33.getRealMonth()).toEqual(1);
            expect(date33.getDate()).toEqual(21);
        });
        // 翌月持ち越しの確認
        var date60 = new UltraDate("2015/01/01").setDayCountsInMonth(6, 0);
        it("第6日曜日にセットしたので月の戻り値は「2」日の戻り値は「8」", function () {
            expect(date60.getRealMonth()).toEqual(2);
            expect(date60.getDate()).toEqual(8);
        });
    });
    describe("setFirstDate:", function () {
        var date1 = new UltraDate("2015/01/31 12:00:00").setFirstDate();
        var setDate1 = new UltraDate("2015/01/01");
        it("2015年1月31日12時の月初の戻り値は2015年1月1日0時", function () {
            expect(date1.getTime()).toEqual(setDate1.getTime());
        });
        var date2 = new UltraDate("2015/01/31 12:00:00").setFirstDate(1);
        var setDate2 = new UltraDate("2015/02/01");
        it("2015年1月31日12時の翌月 月初戻り値は2015年2月1日0時", function () {
            expect(date2.getTime()).toEqual(setDate2.getTime());
        });
        var date3 = new UltraDate("2015/01/31 12:00:00").setFirstDate(2);
        var setDate3 = new UltraDate("2015/03/01");
        it("2015年1月31日12時の翌々月 月初戻り値は2015年3月1日0時", function () {
            expect(date3.getTime()).toEqual(setDate3.getTime());
        });
        var date12 = new UltraDate("2015/01/31 12:00:00").setFirstDate(-1);
        var setDate12 = new UltraDate("2014/12/01");
        it("2015年1月31日12時の前月 月初戻り値は2014年12月1日0時", function () {
            expect(date12.getTime()).toEqual(setDate12.getTime());
        });
        var date11 = new UltraDate("2015/01/31 12:00:00").setFirstDate(-2);
        var setDate11 = new UltraDate("2014/11/01");
        it("2015年1月31日12時の前々月 月初戻り値は2014年11月1日0時", function () {
            expect(date11.getTime()).toEqual(setDate11.getTime());
        });
    });
    describe("setEndDate:", function () {
        var date1 = new UltraDate("2015/01/31 12:00:00").setEndDate();
        var setDate1 = new UltraDate("2015/01/31");
        it("2015年1月31日12時の月末の戻り値は2015年1月31日0時", function () {
            expect(date1.getTime()).toEqual(setDate1.getTime());
        });
        var date2 = new UltraDate("2015/01/31 12:00:00").setEndDate(1);
        var setDate2 = new UltraDate("2015/02/28");
        it("2015年1月31日12時の翌月 月末戻り値は2015年2月28日0時", function () {
            expect(date2.getTime()).toEqual(setDate2.getTime());
        });
        var date3 = new UltraDate("2015/01/31 12:00:00").setEndDate(2);
        var setDate3 = new UltraDate("2015/03/31");
        it("2015年1月31日12時の翌々月 月末戻り値は2015年3月31日0時", function () {
            expect(date3.getTime()).toEqual(setDate3.getTime());
        });
        var date12 = new UltraDate("2015/01/31 12:00:00").setEndDate(-1);
        var setDate12 = new UltraDate("2014/12/31");
        it("2015年1月31日12時の前月 月末戻り値は2014年12月31日0時", function () {
            expect(date12.getTime()).toEqual(setDate12.getTime());
        });
        var date11 = new UltraDate("2015/01/31 12:00:00").setEndDate(-2);
        var setDate11 = new UltraDate("2014/11/30");
        it("2015年1月31日12時の前々月 月末戻り値は2014年11月30日0時", function () {
            expect(date11.getTime()).toEqual(setDate11.getTime());
        });
    });
    describe("setBeforeWeekday:", function () {
        var date1 = new UltraDate("2014/05/03").setBeforeWeekday();
        it("2015年5月3日の土日祝祭日の前の平日は2日", function () {
            expect(date1.getDate()).toEqual(2);
        });
        var date2 = new UltraDate("2014/05/03").setBeforeWeekday(1);
        it("2015年5月3日の土日の前の平日は2日", function () {
            expect(date2.getDate()).toEqual(2);
        });
        var date3 = new UltraDate("2014/05/03").setBeforeWeekday(2);
        it("2015年5月3日の日祝の前の平日は3日", function () {
            expect(date3.getDate()).toEqual(2);
        });
        var date4 = new UltraDate("2014/05/03").setBeforeWeekday(3);
        it("2015年5月3日の日曜日の前の平日は3日", function () {
            expect(date4.getDate()).toEqual(3);
        });
        var date5 = new UltraDate("2014/05/03").setBeforeWeekday(4);
        it("2015年5月3日の祝日の前の平日は2日", function () {
            expect(date5.getDate()).toEqual(2);
        });
    });
    describe("setAfterWeekday:", function () {
        var date1 = new UltraDate("2014/05/03").setAfterWeekday();
        it("2015年5月3日の土日祝祭日の後の平日は7日", function () {
            expect(date1.getDate()).toEqual(7);
        });
        var date2 = new UltraDate("2014/05/03").setAfterWeekday(1);
        it("2015年5月3日の土日の後の平日は5日", function () {
            expect(date2.getDate()).toEqual(5);
        });
        var date3 = new UltraDate("2014/05/03").setAfterWeekday(2);
        it("2015年5月3日の日祝の後の平日は7日", function () {
            expect(date3.getDate()).toEqual(7);
        });
        var date4 = new UltraDate("2014/05/03").setAfterWeekday(3);
        it("2015年5月3日の日曜日の後の平日は3日", function () {
            expect(date4.getDate()).toEqual(3);
        });
        var date5 = new UltraDate("2014/05/03").setAfterWeekday(4);
        it("2015年5月3日の祝日の後の平日は7日", function () {
            expect(date5.getDate()).toEqual(7);
        });
    });
    describe("clearTime:", function () {
        var date = new UltraDate("2015-01-31T12:59:59.123Z").clearTime();
        var setDate = new UltraDate("2015/01/31");
        it("2015年1月31日12時59分59秒123ミリ秒のクリア時間の戻り値は" +
                "2015年1月31日00時00分00秒0ミリ秒", function () {
                    expect(date.getTime()).toEqual(setDate.getTime());
                });
    });
});