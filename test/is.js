"use strict";
describe("isLeapYear:", function () {
    var date2015 = new UltraDate("2015/01/01");
    var date2016 = new UltraDate("2016/01/01");
    it("2015年はうるう年でないので「false」", function () {
        expect(date2015.isLeapYear()).toBe(false);
    });
    it("2016年はうるう年なので「true」", function () {
        expect(date2016.isLeapYear()).toBe(true);
    });
    it("2016年はうるう年なので「true」（引数あり）", function () {
        expect(date2015.isLeapYear(2016)).toBe(true);
    });
});
describe("isDayCountsInMonth:", function () {
    var date = new UltraDate("2015/01/15");
    it("2015年1月15日は第3木曜日なので「true」", function () {
        expect(date.isDayCountsInMonth(3, 4)).toBe(true);
    });
    it("2015年1月15日は第2木曜日ではないので「false」", function () {
        expect(date.isDayCountsInMonth(2, 4)).toBe(false);
    });
    it("2015年1月15日は第3日曜日ではないので「false」", function () {
        expect(date.isDayCountsInMonth(3, 0)).toBe(false);
    });
});
describe("isISOWeekDay:", function () {
    // @mytodo 週番号が前年か今年か来年かの検証が必要
    var date20150101 = new UltraDate("2015/01/01");
    it("2015年1月1日は1週目の木曜日なので「true」", function () {
        expect(date20150101.isISOWeekDay(1, 4)).toBe(true);
    });
    it("2015年1月1日は1週目の日曜日ではないので「false」", function () {
        expect(date20150101.isISOWeekDay(1, 0)).toBe(false);
    });
    var date20160101 = new UltraDate("2016/01/01");
    it("2016年1月1日は1週目の金曜日ではないので「false」", function () {
        expect(date20160101.isISOWeekDay(1, 5)).toBe(false);
    });
    // 2015年の53週目（2016年だと0週目としたいところ）
    it("2016年1月1日は53週目の金曜日なので「true」", function () {
        expect(date20160101.isISOWeekDay(53, 5)).toBe(true);
    });
//        it("2016年1月1日は0週目の金曜日なので「true」", function () {
//            expect(date20160101.isISOWeek(0, 5)).toBe(true);
//        });
    var date20160103 = new UltraDate("2016/01/03");
    it("2016年1月3日は1週目の月曜日ではないので「false」", function () {
        expect(date20160103.isISOWeekDay(1, 1)).toBe(false);
    });
    var date20160104 = new UltraDate("2016/01/04");
    it("2016年1月4日は1週目の月曜日なので「true」", function () {
        expect(date20160104.isISOWeekDay(1, 1)).toBe(true);
    });
    var date20151231 = new UltraDate("2015/12/31");
    it("2015年12月31日は53週目の木曜日なので「true」", function () {
        expect(date20151231.isISOWeekDay(53, 4)).toBe(true);
    });
    var date20161231 = new UltraDate("2016/12/31");
    it("2016年12月31日は53週目の土曜日ではないので「false」", function () {
        expect(date20161231.isISOWeekDay(53, 6)).toBe(false);
    });
    var date20181231 = new UltraDate("2018/12/31");
//        it("2018年12月31日は1週目の月曜日なので「true」", function () {
//            expect(date20181231.isISOWeekDay(1, 1)).toBe(true);
//        });
    // 2018年の53週目だが本当は2019年の1週目
    it("2018年12月31日は53週目の月曜日なので「true」", function () {
        expect(date20181231.isISOWeekDay(53, 1)).toBe(true);
    });
});
describe("isUSWeekDay:", function () {
    var date20150101 = new UltraDate("2015/01/01");
    it("2015年1月1日は1週目の木曜日なので「true」", function () {
        expect(date20150101.isUSWeekDay(1, 4)).toBe(true);
    });
    it("2015年1月1日は1週目の日曜日ではないので「false」", function () {
        expect(date20150101.isUSWeekDay(1, 0)).toBe(false);
    });
    var date20150103 = new UltraDate("2015/01/03");
    it("2015年1月3日は1週目の土曜日なので「true」", function () {
        expect(date20150103.isUSWeekDay(1, 6)).toBe(true);
    });
    var date20150104 = new UltraDate("2015/01/04");
    it("2015年1月4日は1週目の日曜日ではないので「false」", function () {
        expect(date20150104.isUSWeekDay(1, 0)).toBe(false);
    });
    var date20151231 = new UltraDate("2015/12/31");
    it("2015年12月31日は53週目の木曜日なので「true」", function () {
        expect(date20151231.isUSWeekDay(53, 4)).toBe(true);
    });
    var date20281231 = new UltraDate("2028/12/31");
    it("2028年12月31日は54週目の日曜日なので「true」", function () {
        expect(date20281231.isUSWeekDay(54, 0)).toBe(true);
    });
});
describe("isISOWeek:", function () {
    // @mytodo 週番号が前年か今年か来年かの検証が必要
    var date20150101 = new UltraDate("2015/01/01");
    it("2015年1月1日は1週目なので「true」", function () {
        expect(date20150101.isISOWeek(1)).toBe(true);
    });
    var date20160101 = new UltraDate("2016/01/01");
    it("2016年1月1日は1週目ではないので「false」", function () {
        expect(date20160101.isISOWeek(1)).toBe(false);
    });
    // 2015年の53週目（2016年だと0週目としたいところ）
    it("2016年1月1日は53週目なので「true」", function () {
        expect(date20160101.isISOWeek(53)).toBe(true);
    });
//        it("2016年1月1日は0週目なので「true」", function () {
//            expect(date20160101.isISOWeek(0)).toBe(true);
//        });
    var date20160103 = new UltraDate("2016/01/03");
    it("2016年1月3日は1週目ではないので「false」", function () {
        expect(date20160103.isISOWeek(1)).toBe(false);
    });
    var date20160104 = new UltraDate("2016/01/04");
    it("2016年1月4日は1週目なので「true」", function () {
        expect(date20160104.isISOWeek(1)).toBe(true);
    });
    var date20151231 = new UltraDate("2015/12/31");
    it("2015年12月31日は53週目なので「true」", function () {
        expect(date20151231.isISOWeek(53)).toBe(true);
    });
    var date20161231 = new UltraDate("2016/12/31");
    it("2016年12月31日は53週目ではないので「false」", function () {
        expect(date20161231.isISOWeek(53)).toBe(false);
    });
    var date20181231 = new UltraDate("2018/12/31");
//        it("2018年12月31日は1週目なので「true」", function () {
//            expect(date20181231.isISOWeek(1)).toBe(true);
//        });
    // 2018年の53週目だが本当は2019年の1週目
    it("2018年12月31日は53週目なので「true」", function () {
        expect(date20181231.isISOWeek(53)).toBe(true);
    });
});
describe("isUSWeek:", function () {
    var date20150101 = new UltraDate("2015/01/01");
    it("2015年1月1日は1週目なので「true」", function () {
        expect(date20150101.isUSWeek(1)).toBe(true);
    });
    var date20150103 = new UltraDate("2015/01/03");
    it("2015年1月3日は1週目なので「true」", function () {
        expect(date20150103.isUSWeek(1)).toBe(true);
    });
    var date20150104 = new UltraDate("2015/01/04");
    it("2015年1月4日は1週目ではないので「false」", function () {
        expect(date20150104.isUSWeek(1)).toBe(false);
    });
    var date20151231 = new UltraDate("2015/12/31");
    it("2015年12月31日は53週目なので「true」", function () {
        expect(date20151231.isUSWeek(53)).toBe(true);
    });
    var date20281231 = new UltraDate("2028/12/31");
    it("2028年12月31日は54週目なので「true」", function () {
        expect(date20281231.isUSWeek(54)).toBe(true);
    });
});
describe("isWeekday:", function () {
    var date1 = new UltraDate("2014/05/03");
    it("2015年5月3日は土日祝祭日以外の戻り値は「false」", function () {
        expect(date1.isWeekday()).toBe(false);
    });
    it("2015年5月3日は土日以外の戻り値は「false」", function () {
        expect(date1.isWeekday(1)).toBe(false);
    });
    it("2015年5月3日は日祝以外の戻り値は「false」", function () {
        expect(date1.isWeekday(2)).toBe(false);
    });
    it("2015年5月3日は日曜日以外の戻り値は「true」", function () {
        expect(date1.isWeekday(3)).toBe(true);
    });
    it("2015年5月3日は祝日以外の戻り値は「false」", function () {
        expect(date1.isWeekday(4)).toBe(false);
    });
});
describe("isSameDate:", function () {
    var date1 = new UltraDate("2015/01/01 00:00:00");
    var dateUltra = new UltraDate("2015/01/01 23:00:00");
    it("2015年1月1日0時と2015年1月1日23時は同じ日付なので「true」[UltraDate Object]", function () {
        expect(date1.isSameDate(dateUltra)).toBe(true);
    });

    var dateObject = new Date("2015/01/01 23:00:00");
    it("2015年1月1日0時と2015年1月1日23時は同じ日付なので「true」[Date Object]", function () {
        expect(date1.isSameDate(dateObject)).toBe(true);
    });

    var dateString = "2015/01/01 23:00:00";
    it("2015年1月1日0時と2015年1月1日23時は同じ日付なので「true」[String]", function () {
        expect(date1.isSameDate(dateString)).toBe(true);
    });

    var dateNumber = 1420081000000;
    it("2015年1月1日0時と2015年1月1日23時は同じ日付なので「true」[Number]", function () {
        expect(date1.isSameDate(dateNumber)).toBe(true);
    });

    var date2 = new UltraDate("2015/01/02 00:00:00");
    it("2015年1月1日0時と2015年1月2日0時は同じ日付ではないなので「false」", function () {
        expect(date1.isSameDate(date2)).toBe(false);
    });
});
describe("isBeforeDate:", function () {
    var date1 = new UltraDate("2015/01/02");
    var date2 = new UltraDate("2015/01/02 12:00:00");
    var tomorrow = new UltraDate("2015/01/03");
    var yesterday = new UltraDate("2015/01/01");
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            date2.format("yyyy/MM/dd HH:mm:ss") +
            "の前日ではないなので「false」", function () {
                expect(date1.isBeforeDate(date2)).toBe(false);
            });
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            tomorrow.format("yyyy/MM/dd HH:mm:ss") +
            "の前日なので「true」", function () {
                expect(date1.isBeforeDate(tomorrow)).toBe(true);
            });
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            yesterday.format("yyyy/MM/dd HH:mm:ss") +
            "の前日ではないなので「false」", function () {
                expect(date1.isBeforeDate(yesterday)).toBe(false);
            });
});
describe("isAfterDate:", function () {
    var date1 = new UltraDate("2015/01/02");
    var date2 = new UltraDate("2015/01/02 12:00:00");
    var tomorrow = new UltraDate("2015/01/03");
    var yesterday = new UltraDate("2015/01/01");
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            date2.format("yyyy/MM/dd HH:mm:ss") +
            "の翌日ではないなので「false」", function () {
                expect(date1.isBeforeDate(date2)).toBe(false);
            });
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            tomorrow.format("yyyy/MM/dd HH:mm:ss") +
            "の翌日なので「true」", function () {
                expect(date1.isBeforeDate(tomorrow)).toBe(true);
            });
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            yesterday.format("yyyy/MM/dd HH:mm:ss") +
            "の翌日ではないので「false」", function () {
                expect(date1.isBeforeDate(yesterday)).toBe(false);
            });
});
describe("isBetween:", function () {
    var date1 = new UltraDate("2015/01/02 01:00:00");
    var date2 = new UltraDate("2015/01/02 13:00:00");
    var date3 = new UltraDate("2015/01/03");
    it(date2.format("yyyy/MM/dd HH:mm:ss") + "は" +
            date1.format("yyyy/MM/dd HH:mm:ss") + "と" +
            date3.format("yyyy/MM/dd HH:mm:ss") + "の間の時間なので「true」", function () {
        expect(date2.isBetween(date1, date3)).toBe(true);
    });
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            date2.format("yyyy/MM/dd HH:mm:ss") + "と" +
            date3.format("yyyy/MM/dd HH:mm:ss") + "の間の時間ではないので「false」", function () {
        expect(date1.isBetween(date2, date3)).toBe(false);
    });
    it(date1.format("yyyy/MM/dd HH:mm:ss") + "は" +
            date2.format("yyyy/MM/dd HH:mm:ss") + "と" +
            date3.format("yyyy/MM/dd HH:mm:ss") + "の間の日付なので「true」", function () {
        expect(date1.isBetween(date2, date3, true)).toBe(true);
    });
});
describe("isToday:", function () {
    var today = new UltraDate();
    var tomorrow = new UltraDate().addDate(1);
    var yesterday = new UltraDate().addDate(-1);
    it(today.format("yyyy/MM/dd ") + "は今日なので「true」", function () {
        expect(today.isToday()).toBe(true);
    });
    it(tomorrow.format("yyyy/MM/dd ") + "は明日なので「false」", function () {
        expect(tomorrow.isToday()).toBe(false);
    });
    it(yesterday.format("yyyy/MM/dd ") + "は昨日なので「false」", function () {
        expect(yesterday.isToday()).toBe(false);
    });
});
describe("isTomorrow:", function () {
    var today = new UltraDate();
    var tomorrow = new UltraDate().addDate(1);
    var yesterday = new UltraDate().addDate(-1);
    it(today.format("yyyy/MM/dd ") + "は今日なので「false」", function () {
        expect(today.isTomorrow()).toBe(false);
    });
    it(tomorrow.format("yyyy/MM/dd ") + "は明日なので「true」", function () {
        expect(tomorrow.isTomorrow()).toBe(true);
    });
    it(yesterday.format("yyyy/MM/dd ") + "は昨日なので「false」", function () {
        expect(yesterday.isTomorrow()).toBe(false);
    });
});
describe("isYesterday:", function () {
    var today = new UltraDate();
    var tomorrow = new UltraDate().addDate(1);
    var yesterday = new UltraDate().addDate(-1);
    it(today.format("yyyy/MM/dd ") + "は今日なので「false」", function () {
        expect(today.isYesterday()).toBe(false);
    });
    it(tomorrow.format("yyyy/MM/dd ") + "は明日なので「false」", function () {
        expect(tomorrow.isYesterday()).toBe(false);
    });
    it(yesterday.format("yyyy/MM/dd ") + "は昨日なので「true」", function () {
        expect(yesterday.isYesterday()).toBe(true);
    });
});
describe("isNDate:", function () {
    var today = new UltraDate();
    var tomorrow = new UltraDate().addDate(1);
    var yesterday = new UltraDate().addDate(-1);
    it(today.format("yyyy/MM/dd ") + "は" +
            tomorrow.format("yyyy/MM/dd ") + "の日付まで1日なので「true」", function () {
        expect(today.isNDate(tomorrow, 1)).toBe(true);
    });
    it(today.format("yyyy/MM/dd ") + "は" +
            yesterday.format("yyyy/MM/dd ") + "の日付まで-1日なので「true」", function () {
        expect(today.isNDate(yesterday, -1)).toBe(true);
    });
    it(today.format("yyyy/MM/dd ") + "は" +
            today.format("yyyy/MM/dd ") + "の日付まで0日なので「true」", function () {
        expect(today.isNDate(today, 0)).toBe(true);
    });
});
// @mytodo　isNDateThisToThat(num, date)「オブジェクトと引数dateの日付の間は引数num日間」isNDate()と引数逆
//describe("isNDateThisToThat:", function () {
//    var today = new UltraDate();
//    var tomorrow = new UltraDate().addDate(1);
//    var yesterday = new UltraDate().addDate(-1);
//    it(today.format("yyyy/MM/dd ") + "は" +
//            tomorrow.format("yyyy/MM/dd ") + "の日付まで1日なので「true」", function () {
//        expect(today.isAfterNDate(tomorrow, 1)).toBe(true);
//    });
//    it(today.format("yyyy/MM/dd ") + "は" +
//            yesterday.format("yyyy/MM/dd ") + "の日付まで-1日なので「true」", function () {
//        expect(today.isAfterNDate(yesterday, -1)).toBe(true);
//    });
//    it(today.format("yyyy/MM/dd ") + "は" +
//            today.format("yyyy/MM/dd ") + "の日付まで0日なので「true」", function () {
//        expect(today.isAfterNDate(today, 0)).toBe(true);
//    });
//});
// @mytodo　isWeekday(option, locale)平日かどうかの判定
//describe("isWeekday:", function () {
//    var date20150101 = new UltraDate("2015/01/01");
//    it("2015年1月1日「土日祝日チェック」は木曜の元日なので「false」", function () {
//        expect(date20150101.isWeekday(0)).toBe(false);
//    });
//    it("2015年1月1日「土日チェック」は木曜の元日なので「true」", function () {
//        expect(date20150101.isWeekday(1)).toBe(true);
//    });
//    it("2015年1月1日「日祝チェック」は木曜の元日なので「false」", function () {
//        expect(date20150101.isWeekday(2)).toBe(false);
//    });
//    it("2015年1月1日「日曜チェック」は木曜の元日なので「true」", function () {
//        expect(date20150101.isWeekday(3)).toBe(true);
//    });
//    it("2015年1月1日「祝日チェック」は木曜の元日なので「false」", function () {
//        expect(date20150101.isWeekday(4)).toBe(false);
//    });
//
//    var date20150102 = new UltraDate("2015/01/02");
//    it("2015年1月2日「土日祝日チェック」は金曜の平日なので「true」", function () {
//        expect(date20150102.isWeekday(0)).toBe(true);
//    });
//    it("2015年1月2日「土日チェック」は金曜の平日なので「true」", function () {
//        expect(date20150102.isWeekday(1)).toBe(true);
//    });
//    it("2015年1月2日「日祝チェック」は金曜の平日なので「true」", function () {
//        expect(date20150102.isWeekday(2)).toBe(true);
//    });
//    it("2015年1月2日「日曜チェック」は金曜の平日なので「true」", function () {
//        expect(date20150102.isWeekday(3)).toBe(true);
//    });
//    it("2015年1月2日「祝日チェック」は金曜の平日なので「true」", function () {
//        expect(date20150102.isWeekday(4)).toBe(true);
//    });
//
//    var date20150103 = new UltraDate("2015/01/03");
//    it("2015年1月3日「土日祝日チェック」は土曜日なので「false」", function () {
//        expect(date20150103.isWeekday(0)).toBe(false);
//    });
//    it("2015年1月3日「土日チェック」は土曜日なので「false」", function () {
//        expect(date20150103.isWeekday(1)).toBe(false);
//    });
//    it("2015年1月3日「日祝チェック」は土曜日なので「true」", function () {
//        expect(date20150103.isWeekday(2)).toBe(true);
//    });
//    it("2015年1月3日「日曜チェック」は土曜日なので「true」", function () {
//        expect(date20150103.isWeekday(3)).toBe(true);
//    });
//    it("2015年1月3日「祝日チェック」は土曜日なので「true」", function () {
//        expect(date20150103.isWeekday(4)).toBe(true);
//    });
//
//    var date20150104 = new UltraDate("2015/01/04");
//    it("2015年1月4日「土日祝日チェック」は日曜日なので「false」", function () {
//        expect(date20150104.isWeekday(0)).toBe(false);
//    });
//    it("2015年1月4日「土日チェック」は日曜日なので「false」", function () {
//        expect(date20150104.isWeekday(1)).toBe(false);
//    });
//    it("2015年1月4日「日祝チェック」は日曜日なので「false」", function () {
//        expect(date20150104.isWeekday(2)).toBe(false);
//    });
//    it("2015年1月4日「日曜チェック」は日曜日なので「false」", function () {
//        expect(date20150104.isWeekday(3)).toBe(false);
//    });
//    it("2015年1月4日「祝日チェック」は日曜日なので「true」", function () {
//        expect(date20150104.isWeekday(4)).toBe(true);
//    });
//});
describe("isHoliday:", function () {
    var date20150101 = new UltraDate("2015/01/01");
    it("2015年1月1日は元日なので「true」", function () {
        expect(date20150101.isHoliday()).toBe(true);
    });
    var date20150102 = new UltraDate("2015/01/02");
    it("2015年1月1日は平日なので「false」", function () {
        expect(date20150102.isHoliday()).toBe(false);
    });
});