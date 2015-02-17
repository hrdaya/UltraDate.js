"use strict";

describe("getRealMonth:", function () {
    var date1 = new UltraDate("2015/01/01");
    it("1月の戻り値は「1」", function () {
        expect(date1.getRealMonth()).toEqual(1);
    });
    var date2 = new UltraDate("2015/12/01");
    it("12月の戻り値は「12」", function () {
        expect(date2.getRealMonth()).toEqual(12);
    });
});
describe("getDayCountsInMonth:", function () {
    var date20150103 = new UltraDate("2015/01/03");
    it("1月3日の戻り値は「1」", function () {
        expect(date20150103.getDayCountsInMonth()).toEqual(1);
    });
    var date20150107 = new UltraDate("2015/01/07");
    it("1月7日の戻り値は「1」", function () {
        expect(date20150107.getDayCountsInMonth()).toEqual(1);
    });
    var date20150108 = new UltraDate("2015/01/08");
    it("1月8日の戻り値は「2」", function () {
        expect(date20150108.getDayCountsInMonth()).toEqual(2);
    });
    var date20150131 = new UltraDate("2015/01/31");
    it("1月7日の戻り値は「1」", function () {
        expect(date20150131.getDayCountsInMonth()).toEqual(5);
    });
});
describe("getISOWeek:", function () {
    // @mytodo 2016/1/1から2016/1/3は前年の週番号なので0としたいところ
    var date20160101 = new UltraDate("2016/01/01");
    it("2016年1月1日のISO週番号の戻り値は「53」", function () {
        expect(date20160101.getISOWeek()).toEqual(53);
    });
    var date20160102 = new UltraDate("2016/01/02");
    it("2016年1月2日のISO週番号の戻り値は「53」", function () {
        expect(date20160102.getISOWeek()).toEqual(53);
    });
    var date20160103 = new UltraDate("2016/01/03");
    it("2016年1月3日のISO週番号の戻り値は「53」", function () {
        expect(date20160103.getISOWeek()).toEqual(53);
    });
    var date20160104 = new UltraDate("2016/01/04");
    it("2016年1月4日のISO週番号の戻り値は「1」", function () {
        expect(date20160104.getISOWeek()).toEqual(1);
    });
    // @mytodo 2014/12/31の本当の週番号は2015年の1週目
    var date20141231 = new UltraDate("2014/12/31");
    it("2014年12月31日のISO週番号の戻り値は「53」", function () {
        expect(date20141231.getISOWeek()).toEqual(53);
    });
    var date20151231 = new UltraDate("2015/12/31");
    it("2015年12月31日のISO週番号の戻り値は「53」", function () {
        expect(date20151231.getISOWeek()).toEqual(53);
    });
    var date20161231 = new UltraDate("2016/12/31");
    it("2016年12月31日のISO週番号の戻り値は「52」", function () {
        expect(date20161231.getISOWeek()).toEqual(52);
    });
});
describe("getUSWeek:", function () {
    var date20160101 = new UltraDate("2016/01/01");
    it("2016年1月1日のUSA週番号の戻り値は「1」", function () {
        expect(date20160101.getUSWeek()).toEqual(1);
    });
    var date20160102 = new UltraDate("2016/01/02");
    it("2016年1月2日のUSA週番号の戻り値は「1」", function () {
        expect(date20160102.getUSWeek()).toEqual(1);
    });
    var date20160103 = new UltraDate("2016/01/03");
    it("2016年1月3日のUSA週番号の戻り値は「2」", function () {
        expect(date20160103.getUSWeek()).toEqual(2);
    });
    var date20161231 = new UltraDate("2018/12/31");
    it("2016年12月31日のUSA週番号の戻り値は「53」", function () {
        expect(date20161231.getUSWeek()).toEqual(53);
    });
    var date20281231 = new UltraDate("2028/12/31");
    it("2028年12月31日のUSA週番号の戻り値は「54」", function () {
        expect(date20281231.getUSWeek()).toEqual(54);
    });
});
describe("getEndDate:", function () {
    var date2015 = new UltraDate("2015/01/01");
    it("2015年1月末日の戻り値は「31」", function () {
        expect(date2015.getEndDate()).toEqual(31);
    });
    it("2015年1月の翌月の末日の戻り値は「28」", function () {
        expect(date2015.getEndDate(1)).toEqual(28);
    });
    it("2015年1月の翌々月の末日の戻り値は「31」", function () {
        expect(date2015.getEndDate(2)).toEqual(31);
    });
    it("2015年1月の前月の末日の戻り値は「31」", function () {
        expect(date2015.getEndDate(-1)).toEqual(31);
    });
    it("2015年1月の前々月の末日の戻り値は「30」", function () {
        expect(date2015.getEndDate(-2)).toEqual(30);
    });
    var date2016 = new UltraDate("2016/02/01");
    it("2016年2月の末日の戻り値は「29」", function () {
        expect(date2016.getEndDate()).toEqual(29);
    });
});
describe("getHolidays:", function () {
    var date2015 = new UltraDate("2015/01/01");
    var obj = {};
    it("2015年デフォルトの戻り値は「空のオブジェクト」", function () {
        expect(date2015.getHolidays(false, "def")).toEqual(obj);
    });
    var obj2015 = {
        "2015/01/01": "元日",
        "2015/01/12": "成人の日",
        "2015/02/11": "建国記念の日",
        "2015/03/21": "春分の日",
        "2015/04/29": "昭和の日",
        "2015/05/03": "憲法記念日",
        "2015/05/04": "みどりの日",
        "2015/05/05": "こどもの日",
        "2015/05/06": "振替休日",
        "2015/07/20": "海の日",
        "2015/09/21": "敬老の日",
        "2015/09/22": "国民の休日",
        "2015/09/23": "秋分の日",
        "2015/10/12": "体育の日",
        "2015/11/03": "文化の日",
        "2015/11/23": "勤労感謝の日",
        "2015/12/23": "天皇誕生日"
    };
    it("2015年日本の祝祭日の戻り値は「obj2015」", function () {
        expect(date2015.getHolidays()).toEqual(obj2015);
    });
    var obj2016 = {
        "2016/01/01": "元日",
        "2016/01/11": "成人の日",
        "2016/02/11": "建国記念の日",
        "2016/03/20": "春分の日",
        "2016/03/21": "振替休日",
        "2016/04/29": "昭和の日",
        "2016/05/03": "憲法記念日",
        "2016/05/04": "みどりの日",
        "2016/05/05": "こどもの日",
        "2016/07/18": "海の日",
        "2016/08/11": "山の日",
        "2016/09/19": "敬老の日",
        "2016/09/22": "秋分の日",
        "2016/10/10": "体育の日",
        "2016/11/03": "文化の日",
        "2016/11/23": "勤労感謝の日",
        "2016/12/23": "天皇誕生日"
    };
    it("2015年日本の祝祭日の戻り値は「obj2015」", function () {
        expect(date2015.getHolidays(2016)).toEqual(obj2016);
    });
});
describe("getHoliday:", function () {
    var date20150101 = new UltraDate("2015/01/01");
    it("2015年1月1日の戻り値は「元日」", function () {
        expect(date20150101.getHoliday()).toEqual("元日");
    });
    var date20150102 = new UltraDate("2015/01/02");
    it("2015年1月2日の戻り値は「空文字」", function () {
        expect(date20150102.getHoliday()).toEqual("");
    });
});