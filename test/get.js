'use strict';

describe('getAge:', function () {
    describe('2000年6月1日からの年齢', function () {
        var date = new UltraDate('2000/06/01');
        it('2001年1月1日の時の年齢', function () {
            expect(date.getAge('2001/01/01')).toEqual(0);
        });
        it('2001年6月1日の時の年齢', function () {
            var date1 = new UltraDate('2001/06/01');
            expect(date.getAge(date1)).toEqual(1);
        });
        it('2001年7月1日の時の年齢', function () {
            expect(date.getAge('2001/07/01')).toEqual(1);
        });
        it('2002年1月1日の時の年齢', function () {
            expect(date.getAge('2002/01/01')).toEqual(1);
        });
    });
    describe('2004年2月29日からの年齢', function () {
        var date = new UltraDate('2004/02/29');
        it('2005年1月1日の時の年齢', function () {
            expect(date.getAge('2005/01/01')).toEqual(0);
        });
        it('2005年2月28日の時の年齢', function () {
            var date1 = new UltraDate('2005/02/28');
            expect(date.getAge(date1)).toEqual(0);
        });
        it('2005年3月1日の時の年齢', function () {
            expect(date.getAge('2005/03/01')).toEqual(1);
        });
        it('2008年2月29日の時の年齢', function () {
            expect(date.getAge('2008/02/29')).toEqual(4);
        });
    });
});
describe('getRealMonth:', function () {
    var date1 = new UltraDate('2015/01/01');
    it('1月の戻り値は「1」', function () {
        expect(date1.getRealMonth()).toEqual(1);
    });
    var date2 = new UltraDate('2015/12/01');
    it('12月の戻り値は「12」', function () {
        expect(date2.getRealMonth()).toEqual(12);
    });
});
describe('getDayCountsInMonth:', function () {
    var date20150103 = new UltraDate('2015/01/03');
    it('1月3日の戻り値は「1」', function () {
        expect(date20150103.getDayCountsInMonth()).toEqual(1);
    });
    var date20150107 = new UltraDate('2015/01/07');
    it('1月7日の戻り値は「1」', function () {
        expect(date20150107.getDayCountsInMonth()).toEqual(1);
    });
    var date20150108 = new UltraDate('2015/01/08');
    it('1月8日の戻り値は「2」', function () {
        expect(date20150108.getDayCountsInMonth()).toEqual(2);
    });
    var date20150131 = new UltraDate('2015/01/31');
    it('1月7日の戻り値は「1」', function () {
        expect(date20150131.getDayCountsInMonth()).toEqual(5);
    });
});
describe('getISOWeekWithYear:', function () {
    // 2004 --------------------------------------------------------------------
    it('2004年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/01');
        var ret = {
            year: 2004,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/02');
        var ret = {
            year: 2004,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/03');
        var ret = {
            year: 2004,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/04');
        var ret = {
            year: 2004,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/05');
        var ret = {
            year: 2004,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/06');
        var ret = {
            year: 2004,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/07');
        var ret = {
            year: 2004,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/08');
        var ret = {
            year: 2004,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2004/01/09');
        var ret = {
            year: 2004,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2004 年末----------------------------------------------------------------
    it('2004年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/23');
        var ret = {
            year: 2004,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/24');
        var ret = {
            year: 2004,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/25');
        var ret = {
            year: 2004,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/26');
        var ret = {
            year: 2004,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/27');
        var ret = {
            year: 2004,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/28');
        var ret = {
            year: 2004,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/29');
        var ret = {
            year: 2004,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/30');
        var ret = {
            year: 2004,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2004年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2004/12/31');
        var ret = {
            year: 2004,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2005 --------------------------------------------------------------------
    it('2005年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/01');
        var ret = {
            year: 2004,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/02');
        var ret = {
            year: 2004,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/03');
        var ret = {
            year: 2005,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/04');
        var ret = {
            year: 2005,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/05');
        var ret = {
            year: 2005,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/06');
        var ret = {
            year: 2005,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/07');
        var ret = {
            year: 2005,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/08');
        var ret = {
            year: 2005,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2005/01/09');
        var ret = {
            year: 2005,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2005 年末----------------------------------------------------------------
    it('2005年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/23');
        var ret = {
            year: 2005,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/24');
        var ret = {
            year: 2005,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/25');
        var ret = {
            year: 2005,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/26');
        var ret = {
            year: 2005,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/27');
        var ret = {
            year: 2005,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/28');
        var ret = {
            year: 2005,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/29');
        var ret = {
            year: 2005,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/30');
        var ret = {
            year: 2005,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2005年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2005/12/31');
        var ret = {
            year: 2005,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2006 --------------------------------------------------------------------
    it('2006年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/01');
        var ret = {
            year: 2005,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/02');
        var ret = {
            year: 2006,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/03');
        var ret = {
            year: 2006,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/04');
        var ret = {
            year: 2006,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/05');
        var ret = {
            year: 2006,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/06');
        var ret = {
            year: 2006,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/07');
        var ret = {
            year: 2006,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/08');
        var ret = {
            year: 2006,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2006/01/09');
        var ret = {
            year: 2006,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2006 年末----------------------------------------------------------------
    it('2006年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/23');
        var ret = {
            year: 2006,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/24');
        var ret = {
            year: 2006,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/25');
        var ret = {
            year: 2006,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/26');
        var ret = {
            year: 2006,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/27');
        var ret = {
            year: 2006,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/28');
        var ret = {
            year: 2006,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/29');
        var ret = {
            year: 2006,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/30');
        var ret = {
            year: 2006,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2006年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2006/12/31');
        var ret = {
            year: 2006,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2007 --------------------------------------------------------------------
    it('2007年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/01');
        var ret = {
            year: 2007,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/02');
        var ret = {
            year: 2007,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/03');
        var ret = {
            year: 2007,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/04');
        var ret = {
            year: 2007,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/05');
        var ret = {
            year: 2007,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/06');
        var ret = {
            year: 2007,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/07');
        var ret = {
            year: 2007,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/08');
        var ret = {
            year: 2007,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2007/01/09');
        var ret = {
            year: 2007,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2007 年末----------------------------------------------------------------
    it('2007年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/23');
        var ret = {
            year: 2007,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/24');
        var ret = {
            year: 2007,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/25');
        var ret = {
            year: 2007,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/26');
        var ret = {
            year: 2007,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/27');
        var ret = {
            year: 2007,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/28');
        var ret = {
            year: 2007,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/29');
        var ret = {
            year: 2007,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/30');
        var ret = {
            year: 2007,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2007年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2007/12/31');
        var ret = {
            year: 2008,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2008 --------------------------------------------------------------------
    it('2008年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/01');
        var ret = {
            year: 2008,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/02');
        var ret = {
            year: 2008,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/03');
        var ret = {
            year: 2008,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/04');
        var ret = {
            year: 2008,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/05');
        var ret = {
            year: 2008,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/06');
        var ret = {
            year: 2008,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/07');
        var ret = {
            year: 2008,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/08');
        var ret = {
            year: 2008,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2008/01/09');
        var ret = {
            year: 2008,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2008 年末----------------------------------------------------------------
    it('2008年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/23');
        var ret = {
            year: 2008,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/24');
        var ret = {
            year: 2008,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/25');
        var ret = {
            year: 2008,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/26');
        var ret = {
            year: 2008,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/27');
        var ret = {
            year: 2008,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/28');
        var ret = {
            year: 2008,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/29');
        var ret = {
            year: 2009,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/30');
        var ret = {
            year: 2009,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2008年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2008/12/31');
        var ret = {
            year: 2009,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2009 --------------------------------------------------------------------
    it('2009年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/01');
        var ret = {
            year: 2009,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/02');
        var ret = {
            year: 2009,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/03');
        var ret = {
            year: 2009,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/04');
        var ret = {
            year: 2009,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/05');
        var ret = {
            year: 2009,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/06');
        var ret = {
            year: 2009,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/07');
        var ret = {
            year: 2009,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/08');
        var ret = {
            year: 2009,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2009/01/09');
        var ret = {
            year: 2009,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2009 年末----------------------------------------------------------------
    it('2009年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/23');
        var ret = {
            year: 2009,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/24');
        var ret = {
            year: 2009,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/25');
        var ret = {
            year: 2009,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/26');
        var ret = {
            year: 2009,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/27');
        var ret = {
            year: 2009,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/28');
        var ret = {
            year: 2009,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/29');
        var ret = {
            year: 2009,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/30');
        var ret = {
            year: 2009,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2009年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2009/12/31');
        var ret = {
            year: 2009,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2010 --------------------------------------------------------------------
    it('2010年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/01');
        var ret = {
            year: 2009,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/02');
        var ret = {
            year: 2009,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/03');
        var ret = {
            year: 2009,
            week: 53
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/04');
        var ret = {
            year: 2010,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/05');
        var ret = {
            year: 2010,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/06');
        var ret = {
            year: 2010,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/07');
        var ret = {
            year: 2010,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/08');
        var ret = {
            year: 2010,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2010/01/09');
        var ret = {
            year: 2010,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2010 年末----------------------------------------------------------------
    it('2010年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/23');
        var ret = {
            year: 2010,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/24');
        var ret = {
            year: 2010,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/25');
        var ret = {
            year: 2010,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/26');
        var ret = {
            year: 2010,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/27');
        var ret = {
            year: 2010,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/28');
        var ret = {
            year: 2010,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/29');
        var ret = {
            year: 2010,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/30');
        var ret = {
            year: 2010,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2010年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2010/12/31');
        var ret = {
            year: 2010,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2011 --------------------------------------------------------------------
    it('2011年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/01');
        var ret = {
            year: 2010,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/02');
        var ret = {
            year: 2010,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/03');
        var ret = {
            year: 2011,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/04');
        var ret = {
            year: 2011,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/05');
        var ret = {
            year: 2011,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/06');
        var ret = {
            year: 2011,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/07');
        var ret = {
            year: 2011,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/08');
        var ret = {
            year: 2011,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2011/01/09');
        var ret = {
            year: 2011,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2011 年末----------------------------------------------------------------
    it('2011年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/23');
        var ret = {
            year: 2011,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/24');
        var ret = {
            year: 2011,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/25');
        var ret = {
            year: 2011,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/26');
        var ret = {
            year: 2011,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/27');
        var ret = {
            year: 2011,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/28');
        var ret = {
            year: 2011,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/29');
        var ret = {
            year: 2011,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/30');
        var ret = {
            year: 2011,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2011年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2011/12/31');
        var ret = {
            year: 2011,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2012 --------------------------------------------------------------------
    it('2012年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/01');
        var ret = {
            year: 2011,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/02');
        var ret = {
            year: 2012,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/03');
        var ret = {
            year: 2012,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/04');
        var ret = {
            year: 2012,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/05');
        var ret = {
            year: 2012,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/06');
        var ret = {
            year: 2012,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/07');
        var ret = {
            year: 2012,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/08');
        var ret = {
            year: 2012,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2012/01/09');
        var ret = {
            year: 2012,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2012 年末----------------------------------------------------------------
    it('2012年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/23');
        var ret = {
            year: 2012,
            week: 51
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/24');
        var ret = {
            year: 2012,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/25');
        var ret = {
            year: 2012,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/26');
        var ret = {
            year: 2012,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/27');
        var ret = {
            year: 2012,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/28');
        var ret = {
            year: 2012,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/29');
        var ret = {
            year: 2012,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/30');
        var ret = {
            year: 2012,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2012年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2012/12/31');
        var ret = {
            year: 2013,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2013 --------------------------------------------------------------------
    it('2013年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/01');
        var ret = {
            year: 2013,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/02');
        var ret = {
            year: 2013,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/03');
        var ret = {
            year: 2013,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/04');
        var ret = {
            year: 2013,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/05');
        var ret = {
            year: 2013,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/06');
        var ret = {
            year: 2013,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/07');
        var ret = {
            year: 2013,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/08');
        var ret = {
            year: 2013,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2013/01/09');
        var ret = {
            year: 2013,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2013 年末----------------------------------------------------------------
    it('2013年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/23');
        var ret = {
            year: 2013,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/24');
        var ret = {
            year: 2013,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/25');
        var ret = {
            year: 2013,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/26');
        var ret = {
            year: 2013,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/27');
        var ret = {
            year: 2013,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/28');
        var ret = {
            year: 2013,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/29');
        var ret = {
            year: 2013,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/30');
        var ret = {
            year: 2014,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2013年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2013/12/31');
        var ret = {
            year: 2014,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2014 --------------------------------------------------------------------
    it('2014年1月1日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/01');
        var ret = {
            year: 2014,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月2日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/02');
        var ret = {
            year: 2014,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月3日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/03');
        var ret = {
            year: 2014,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月4日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/04');
        var ret = {
            year: 2014,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月5日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/05');
        var ret = {
            year: 2014,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月6日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/06');
        var ret = {
            year: 2014,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月7日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/07');
        var ret = {
            year: 2014,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月8日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/08');
        var ret = {
            year: 2014,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年1月9日のISO週番号、年', function () {
        var date = new UltraDate('2014/01/09');
        var ret = {
            year: 2014,
            week: 2
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    // 2014 年末----------------------------------------------------------------
    it('2014年12月23日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/23');
        var ret = {
            year: 2014,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月24日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/24');
        var ret = {
            year: 2014,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月25日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/25');
        var ret = {
            year: 2014,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月26日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/26');
        var ret = {
            year: 2014,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月27日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/27');
        var ret = {
            year: 2014,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月28日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/28');
        var ret = {
            year: 2014,
            week: 52
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月29日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/29');
        var ret = {
            year: 2015,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月30日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/30');
        var ret = {
            year: 2015,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
    it('2014年12月31日のISO週番号、年', function () {
        var date = new UltraDate('2014/12/31');
        var ret = {
            year: 2015,
            week: 1
        };
        expect(date.getISOWeekWithYear()).toEqual(ret);
    });
});

describe('getISOWeek:', function () {
    // 2000 --------------------------------------------------------------------
    it('2000年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2000/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2000年1月2日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2000/01/02');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2000年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2000年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2000年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2000年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2000年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2000年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2000年1月9日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/09');
        expect(date.getISOWeek()).toEqual(1);
    });
    // 2000 年末----------------------------------------------------------------
    it('2000年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2000/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2000年12月24日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2000/12/24');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2000年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2000年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2000年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2000年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2000年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2000年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2000年12月31日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/31');
        expect(date.getISOWeek()).toEqual(52);
    });
    // 2001 --------------------------------------------------------------------
    it('2001年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2001年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2001年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2001年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2001年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2001年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2001年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2001年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2001/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2001年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2001/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2001 年末----------------------------------------------------------------
    it('2001年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2001/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2001年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2001年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2001年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2001年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2001年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2001年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2001年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2001年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2001/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2002 --------------------------------------------------------------------
    it('2002年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2002年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2002年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2002年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2002年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2002年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2002年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2002/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2002年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2002/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2002年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2002/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2002 年末----------------------------------------------------------------
    it('2002年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2002年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2002年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2002年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2002年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2002年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2002年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2002年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2002/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2002年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2002/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2003 --------------------------------------------------------------------
    it('2003年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2003年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2003年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2003年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2003年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2003年1月6日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/06');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2003年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2003年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2003年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2003 年末----------------------------------------------------------------
    it('2003年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2003年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2003年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2003年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2003年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2003年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2003年12月29日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2003/12/29');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2003年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2003/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2003年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2003/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2004 --------------------------------------------------------------------
    it('2004年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2004/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2004年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2004/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2004年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2004/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2004年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2004/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2004年1月5日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/05');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2004年1月6日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/06');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2004年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2004年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2004年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2004 年末----------------------------------------------------------------
    it('2004年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2004/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2004年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2004/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2004年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2004/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2004年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2004/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2004年12月27日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/27');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2004年12月28日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/28');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2004年12月29日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/29');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2004年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2004年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2005 --------------------------------------------------------------------
    it('2005年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2005/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2005年1月2日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2005/01/02');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2005年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2005年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2005年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2005年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2005年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2005年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2005年1月9日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/09');
        expect(date.getISOWeek()).toEqual(1);
    });
    // 2005 年末----------------------------------------------------------------
    it('2005年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2005/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2005年12月24日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2005/12/24');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2005年12月25日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2005/12/25');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2005年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2005年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2005年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2005年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2005年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2005年12月31日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/31');
        expect(date.getISOWeek()).toEqual(52);
    });
    // 2006 --------------------------------------------------------------------
    it('2006年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2006/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2006年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2006年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2006年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2006年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2006年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2006年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2006年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2006年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2006/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2006 年末----------------------------------------------------------------
    it('2006年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2006/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2006年12月24日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2006/12/24');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2006年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2006年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2006年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2006年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2006年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2006年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2006年12月31日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/31');
        expect(date.getISOWeek()).toEqual(52);
    });
    // 2007 --------------------------------------------------------------------
    it('2007年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2007年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2007年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2007年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2007年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2007年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2007年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2007年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2007/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2007年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2007/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2007 年末----------------------------------------------------------------
    it('2007年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2007/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2007年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2007年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2007年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2007年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2007年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2007年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2007年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2007年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2007/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2008 --------------------------------------------------------------------
    it('2008年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2008年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2008年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2008年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2008年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2008年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2008年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2008/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2008年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2008/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2008年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2008/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2008 年末----------------------------------------------------------------
    it('2008年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2008年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2008年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2008年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2008年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2008年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2008年12月29日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2008/12/29');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2008年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2008/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2008年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2008/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2009 --------------------------------------------------------------------
    it('2009年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2009/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2009年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2009/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2009年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2009/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2009年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2009/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2009年1月5日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/05');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2009年1月6日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/06');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2009年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2009年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2009年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2009 年末----------------------------------------------------------------
    it('2009年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2009年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2009年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2009年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2009年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2009年12月28日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/28');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2009年12月29日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/29');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2009年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2009年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2010 --------------------------------------------------------------------
    it('2010年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2010/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2010年1月2日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2010/01/02');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2010年1月3日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2010/01/03');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2010年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2010年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2010年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2010年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2010年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2010年1月9日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/09');
        expect(date.getISOWeek()).toEqual(1);
    });
    // 2010 年末----------------------------------------------------------------
    it('2010年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2010/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2010年12月24日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2010/12/24');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2010年12月25日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2010/12/25');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2010年12月26日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2010/12/26');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2010年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2010年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2010年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2010年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2010年12月31日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/31');
        expect(date.getISOWeek()).toEqual(52);
    });
    // 2011 --------------------------------------------------------------------
    it('2011年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2011/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2011年1月2日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2011/01/02');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2011年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2011年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2011年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2011年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2011年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2011年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2011年1月9日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/09');
        expect(date.getISOWeek()).toEqual(1);
    });
    // 2011 年末----------------------------------------------------------------
    it('2011年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2011/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2011年12月24日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2011/12/24');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2011年12月25日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2011/12/25');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2011年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2011年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2011年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2011年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2011年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2011年12月31日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/31');
        expect(date.getISOWeek()).toEqual(52);
    });
    // 2012 --------------------------------------------------------------------
    it('2012年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2012/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2012年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2012年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2012年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2012年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2012年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2012年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2012年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2012年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2012/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2012 年末----------------------------------------------------------------
    it('2012年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2012/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2012年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2012年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2012年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2012年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2012年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2012年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2012年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2012年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2012/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2013 --------------------------------------------------------------------
    it('2013年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2013年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2013年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2013年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2013年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2013年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2013年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2013/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2013年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2013/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2013年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2013/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2013 年末----------------------------------------------------------------
    it('2013年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2013年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2013年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2013年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2013年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2013年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2013年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2013年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2013/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2013年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2013/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2014 --------------------------------------------------------------------
    it('2014年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2014年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2014年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2014年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2014年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2014年1月6日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/06');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2014年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2014年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2014年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2014 年末----------------------------------------------------------------
    it('2014年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2014年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2014年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2014年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2014年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2014年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2014年12月29日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2014/12/29');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2014年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2014/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2014年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2014/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2015 --------------------------------------------------------------------
    it('2015年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2015/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2015年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2015/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2015年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2015/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2015年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2015/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2015年1月5日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/05');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2015年1月6日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/06');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2015年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2015年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2015年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2015 年末----------------------------------------------------------------
    it('2015年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2015年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2015年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2015年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2015年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2015年12月28日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/28');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2015年12月29日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/29');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2015年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2015年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2016 --------------------------------------------------------------------
    it('2016年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2016/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2016年1月2日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2016/01/02');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2016年1月3日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2016/01/03');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2016年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2016年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2016年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2016年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2016年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2016年1月9日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/09');
        expect(date.getISOWeek()).toEqual(1);
    });
    // 2016 年末----------------------------------------------------------------
    it('2016年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2016/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2016年12月24日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2016/12/24');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2016年12月25日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2016/12/25');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2016年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2016年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2016年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2016年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2016年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2016年12月31日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/31');
        expect(date.getISOWeek()).toEqual(52);
    });
    // 2017 --------------------------------------------------------------------
    it('2017年1月1日のISO週番号の戻り値は「0」', function () {
        var date = new UltraDate('2017/01/01');
        expect(date.getISOWeek()).toEqual(0);
    });
    it('2017年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2017年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2017年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2017年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2017年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2017年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2017年1月8日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/08');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2017年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2017/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2017 年末----------------------------------------------------------------
    it('2017年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2017/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2017年12月24日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2017/12/24');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2017年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2017年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2017年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2017年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2017年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2017年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2017年12月31日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/31');
        expect(date.getISOWeek()).toEqual(52);
    });
    // 2018 --------------------------------------------------------------------
    it('2018年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2018年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2018年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2018年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2018年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2018年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2018年1月7日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/07');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2018年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2018/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2018年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2018/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2018 年末----------------------------------------------------------------
    it('2018年12月23日のISO週番号の戻り値は「51」', function () {
        var date = new UltraDate('2018/12/23');
        expect(date.getISOWeek()).toEqual(51);
    });
    it('2018年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2018年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2018年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2018年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2018年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2018年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2018年12月30日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/30');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2018年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2018/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2019 --------------------------------------------------------------------
    it('2019年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2019年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2019年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2019年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2019年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2019年1月6日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/06');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2019年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2019/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2019年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2019/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2019年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2019/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2019 年末----------------------------------------------------------------
    it('2019年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2019年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2019年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2019年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2019年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2019年12月28日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/28');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2019年12月29日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/29');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2019年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2019/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2019年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2019/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
    // 2020 --------------------------------------------------------------------
    it('2020年1月1日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/01');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2020年1月2日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/02');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2020年1月3日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/03');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2020年1月4日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/04');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2020年1月5日のISO週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/05');
        expect(date.getISOWeek()).toEqual(1);
    });
    it('2020年1月6日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/06');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2020年1月7日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/07');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2020年1月8日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/08');
        expect(date.getISOWeek()).toEqual(2);
    });
    it('2020年1月9日のISO週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/09');
        expect(date.getISOWeek()).toEqual(2);
    });
    // 2020 年末----------------------------------------------------------------
    it('2020年12月23日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/23');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2020年12月24日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/24');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2020年12月25日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/25');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2020年12月26日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/26');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2020年12月27日のISO週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/27');
        expect(date.getISOWeek()).toEqual(52);
    });
    it('2020年12月28日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/28');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2020年12月29日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/29');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2020年12月30日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/30');
        expect(date.getISOWeek()).toEqual(53);
    });
    it('2020年12月31日のISO週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/31');
        expect(date.getISOWeek()).toEqual(53);
    });
});
describe('getUSWeek:', function () {
    // 2000 --------------------------------------------------------------------
    it('2000年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2000/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2000年1月2日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2000/01/02');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2000年1月3日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2000/01/03');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2000年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2000/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2000年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2000/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2000年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2000/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2000年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2000/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2000年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2000/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2000年1月9日のUSA週番号の戻り値は「3」', function () {
        var date = new UltraDate('2000/01/09');
        expect(date.getUSWeek()).toEqual(3);
    });
    // 2000 年末----------------------------------------------------------------
    it('2000年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2000/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2000年12月24日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2000/12/24');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2000年12月25日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2000/12/25');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2000年12月26日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2000/12/26');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2000年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2000/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2000年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2000/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2000年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2000/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2000年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2000/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2000年12月31日のUSA週番号の戻り値は「54」', function () {
        var date = new UltraDate('2000/12/31');
        expect(date.getUSWeek()).toEqual(54);
    });
    // 2001 --------------------------------------------------------------------
    it('2001年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2001年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2001年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2001年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2001年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2001年1月6日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2001/01/06');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2001年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2001/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2001年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2001/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2001年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2001/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2001 年末----------------------------------------------------------------
    it('2001年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2001年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2001年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2001年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2001年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2001年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2001年12月29日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2001/12/29');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2001年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2001/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2001年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2001/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2002 --------------------------------------------------------------------
    it('2002年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2002年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2002年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2002年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2002年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2002/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2002年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2002/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2002年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2002/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2002年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2002/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2002年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2002/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2002 年末----------------------------------------------------------------
    it('2002年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2002年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2002年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2002年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2002年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2002年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2002/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2002年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2002/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2002年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2002/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2002年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2002/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2003 --------------------------------------------------------------------
    it('2003年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2003年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2003年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2003年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2003/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2003年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2003年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2003年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2003年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2003年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2003/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2003 年末----------------------------------------------------------------
    it('2003年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2003年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2003年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2003年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2003年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2003/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2003年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2003/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2003年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2003/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2003年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2003/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2003年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2003/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2004 --------------------------------------------------------------------
    it('2004年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2004/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2004年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2004/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2004年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2004/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2004年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2004年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2004年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2004年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2004年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2004年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2004/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2004 年末----------------------------------------------------------------
    it('2004年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2004/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2004年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2004/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2004年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2004/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2004年12月26日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/26');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2004年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2004年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2004年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2004年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2004年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2004/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2005 --------------------------------------------------------------------
    it('2005年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2005/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2005年1月2日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2005/01/02');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2005年1月3日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2005/01/03');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2005年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2005/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2005年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2005/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2005年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2005/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2005年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2005/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2005年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2005/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2005年1月9日のUSA週番号の戻り値は「3」', function () {
        var date = new UltraDate('2005/01/09');
        expect(date.getUSWeek()).toEqual(3);
    });
    // 2005 年末----------------------------------------------------------------
    it('2005年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2005年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2005/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2005年12月25日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2005/12/25');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2005年12月26日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2005/12/26');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2005年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2005/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2005年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2005/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2005年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2005/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2005年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2005/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2005年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2005/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2006 --------------------------------------------------------------------
    it('2006年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2006年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2006年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2006年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2006年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2006年1月6日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/06');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2006年1月7日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2006/01/07');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2006年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2006/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2006年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2006/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2006 年末----------------------------------------------------------------
    it('2006年12月23日のUSA週番号の戻り値は「51」', function () {
        var date = new UltraDate('2006/12/23');
        expect(date.getUSWeek()).toEqual(51);
    });
    it('2006年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2006年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2006年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2006年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2006年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2006年12月29日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/29');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2006年12月30日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2006/12/30');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2006年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2006/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2007 --------------------------------------------------------------------
    it('2007年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2007年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2007年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2007年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2007年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2007年1月6日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2007/01/06');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2007年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2007/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2007年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2007/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2007年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2007/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2007 年末----------------------------------------------------------------
    it('2007年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2007年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2007年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2007年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2007年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2007年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2007年12月29日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2007/12/29');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2007年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2007/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2007年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2007/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2008 --------------------------------------------------------------------
    it('2008年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2008年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2008年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2008年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2008年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2008/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2008年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2008/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2008年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2008/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2008年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2008/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2008年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2008/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2008 年末----------------------------------------------------------------
    it('2008年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2008年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2008年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2008年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2008年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2008/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2008年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2008/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2008年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2008/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2008年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2008/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2008年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2008/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2009 --------------------------------------------------------------------
    it('2009年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2009/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2009年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2009/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2009年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2009/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2009年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2009年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2009年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2009年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2009年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2009年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2009/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2009 年末----------------------------------------------------------------
    it('2009年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2009年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2009年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2009年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2009/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2009年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2009年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2009年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2009年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2009年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2009/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2010 --------------------------------------------------------------------
    it('2010年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2010年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2010/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2010年1月3日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2010/01/03');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2010年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2010/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2010年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2010/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2010年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2010/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2010年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2010/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2010年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2010/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2010年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2010/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2010 年末----------------------------------------------------------------
    it('2010年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2010年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2010年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2010/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2010年12月26日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2010/12/26');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2010年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2010/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2010年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2010/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2010年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2010/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2010年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2010/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2010年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2010/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2011 --------------------------------------------------------------------
    it('2011年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2011/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2011年1月2日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2011/01/02');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2011年1月3日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2011/01/03');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2011年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2011/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2011年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2011/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2011年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2011/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2011年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2011/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2011年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2011/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2011年1月9日のUSA週番号の戻り値は「3」', function () {
        var date = new UltraDate('2011/01/09');
        expect(date.getUSWeek()).toEqual(3);
    });
    // 2011 年末----------------------------------------------------------------
    it('2011年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2011年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2011/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2011年12月25日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2011/12/25');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2011年12月26日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2011/12/26');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2011年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2011/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2011年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2011/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2011年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2011/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2011年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2011/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2011年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2011/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2012 --------------------------------------------------------------------
    it('2012年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2012年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2012年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2012年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2012年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2012年1月6日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/06');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2012年1月7日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2012/01/07');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2012年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2012/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2012年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2012/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2012 年末----------------------------------------------------------------
    it('2012年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2012年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2012年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2012年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2012年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2012年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2012年12月29日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2012/12/29');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2012年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2012/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2012年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2012/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2013 --------------------------------------------------------------------
    it('2013年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2013年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2013年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2013年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2013年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2013/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2013年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2013/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2013年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2013/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2013年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2013/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2013年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2013/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2013 年末----------------------------------------------------------------
    it('2013年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2013年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2013年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2013年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2013年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2013年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2013/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2013年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2013/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2013年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2013/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2013年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2013/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2014 --------------------------------------------------------------------
    it('2014年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2014年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2014年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2014年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2014/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2014年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2014年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2014年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2014年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2014年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2014/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2014 年末----------------------------------------------------------------
    it('2014年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2014年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2014年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2014年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2014年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2014/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2014年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2014/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2014年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2014/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2014年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2014/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2014年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2014/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2015 --------------------------------------------------------------------
    it('2015年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2015/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2015年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2015/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2015年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2015/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2015年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2015年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2015年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2015年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2015年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2015年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2015/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2015 年末----------------------------------------------------------------
    it('2015年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2015年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2015年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2015年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2015/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2015年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2015年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2015年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2015年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2015年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2015/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2016 --------------------------------------------------------------------
    it('2016年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2016年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2016/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2016年1月3日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2016/01/03');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2016年1月4日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2016/01/04');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2016年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2016/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2016年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2016/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2016年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2016/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2016年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2016/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2016年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2016/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2016 年末----------------------------------------------------------------
    it('2016年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2016年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2016/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2016年12月25日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2016/12/25');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2016年12月26日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2016/12/26');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2016年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2016/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2016年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2016/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2016年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2016/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2016年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2016/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2016年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2016/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2017 --------------------------------------------------------------------
    it('2017年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2017年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2017年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2017年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2017年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2017年1月6日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/06');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2017年1月7日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2017/01/07');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2017年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2017/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2017年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2017/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2017 年末----------------------------------------------------------------
    it('2017年12月23日のUSA週番号の戻り値は「51」', function () {
        var date = new UltraDate('2017/12/23');
        expect(date.getUSWeek()).toEqual(51);
    });
    it('2017年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2017年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2017年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2017年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2017年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2017年12月29日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/29');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2017年12月30日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2017/12/30');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2017年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2017/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2018 --------------------------------------------------------------------
    it('2018年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2018年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2018年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2018年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2018年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2018年1月6日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2018/01/06');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2018年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2018/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2018年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2018/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2018年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2018/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2018 年末----------------------------------------------------------------
    it('2018年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2018年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2018年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2018年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2018年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2018年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2018年12月29日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2018/12/29');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2018年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2018/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2018年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2018/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2019 --------------------------------------------------------------------
    it('2019年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2019年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2019年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2019年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2019年1月5日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2019/01/05');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2019年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2019/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2019年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2019/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2019年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2019/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2019年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2019/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2019 年末----------------------------------------------------------------
    it('2019年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2019年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2019年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2019年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2019年12月27日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/27');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2019年12月28日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2019/12/28');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2019年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2019/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2019年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2019/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2019年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2019/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
    // 2020 --------------------------------------------------------------------
    it('2020年1月1日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/01');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2020年1月2日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/02');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2020年1月3日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/03');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2020年1月4日のUSA週番号の戻り値は「1」', function () {
        var date = new UltraDate('2020/01/04');
        expect(date.getUSWeek()).toEqual(1);
    });
    it('2020年1月5日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/05');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2020年1月6日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/06');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2020年1月7日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/07');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2020年1月8日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/08');
        expect(date.getUSWeek()).toEqual(2);
    });
    it('2020年1月9日のUSA週番号の戻り値は「2」', function () {
        var date = new UltraDate('2020/01/09');
        expect(date.getUSWeek()).toEqual(2);
    });
    // 2020 年末----------------------------------------------------------------
    it('2020年12月23日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/23');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2020年12月24日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/24');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2020年12月25日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/25');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2020年12月26日のUSA週番号の戻り値は「52」', function () {
        var date = new UltraDate('2020/12/26');
        expect(date.getUSWeek()).toEqual(52);
    });
    it('2020年12月27日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/27');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2020年12月28日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/28');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2020年12月29日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/29');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2020年12月30日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/30');
        expect(date.getUSWeek()).toEqual(53);
    });
    it('2020年12月31日のUSA週番号の戻り値は「53」', function () {
        var date = new UltraDate('2020/12/31');
        expect(date.getUSWeek()).toEqual(53);
    });
});
describe('getISODay:', function () {
    var date1 = new UltraDate('2015/01/04');
    it('2015年1月4日（日曜日）のISO曜日番号の戻り値は「7」', function () {
        expect(date1.getISODay()).toEqual(7);
    });
    var date2 = new UltraDate('2015/01/05');
    it('2015年1月5日（月曜日）のISO曜日番号の戻り値は「1」', function () {
        expect(date2.getISODay()).toEqual(1);
    });
});
describe('getOrdinalDate:', function () {
    var date1 = new UltraDate('2015/01/01');
    it('2015年1月1日の年間通算日の戻り値は「1」', function () {
        expect(date1.getOrdinalDate()).toEqual(1);
    });
    var date2 = new UltraDate('2015/12/31');
    it('2015年12月31日の年間通算日の戻り値は「365」', function () {
        expect(date2.getOrdinalDate()).toEqual(365);
    });
    var date3 = new UltraDate('2016/12/31');
    it('2016年12月31日の年間通算日の戻り値は「366」', function () {
        expect(date3.getOrdinalDate()).toEqual(366);
    });
});
describe('getLastDate:', function () {
    var date2015 = new UltraDate('2015/01/01');
    it('2015年1月末日の戻り値は「31」', function () {
        expect(date2015.getLastDate()).toEqual(31);
    });
    it('2015年1月の翌月の末日の戻り値は「28」', function () {
        expect(date2015.getLastDate(1)).toEqual(28);
    });
    it('2015年1月の翌々月の末日の戻り値は「31」', function () {
        expect(date2015.getLastDate(2)).toEqual(31);
    });
    it('2015年1月の前月の末日の戻り値は「31」', function () {
        expect(date2015.getLastDate(-1)).toEqual(31);
    });
    it('2015年1月の前々月の末日の戻り値は「30」', function () {
        expect(date2015.getLastDate(-2)).toEqual(30);
    });
    var date2016 = new UltraDate('2016/02/01');
    it('2016年2月の末日の戻り値は「29」', function () {
        expect(date2016.getLastDate()).toEqual(29);
    });
});
describe('getHolidays:', function () {
    var obj = {};
    it('2015年デフォルトの戻り値は「空のオブジェクト」', function () {
        expect(UltraDate.getHolidays(2015, 'def')).toEqual(obj);
    });
    var obj2015 = {
        '2015/01/01': '元日',
        '2015/01/12': '成人の日',
        '2015/02/11': '建国記念の日',
        '2015/03/21': '春分の日',
        '2015/04/29': '昭和の日',
        '2015/05/03': '憲法記念日',
        '2015/05/04': 'みどりの日',
        '2015/05/05': 'こどもの日',
        '2015/05/06': '振替休日',
        '2015/07/20': '海の日',
        '2015/09/21': '敬老の日',
        '2015/09/22': '国民の休日',
        '2015/09/23': '秋分の日',
        '2015/10/12': '体育の日',
        '2015/11/03': '文化の日',
        '2015/11/23': '勤労感謝の日',
        '2015/12/23': '天皇誕生日'
    };
    it('2015年日本の祝祭日の戻り値は「obj2015」', function () {
        expect(UltraDate.getHolidays(2015)).toEqual(obj2015);
    });
    var obj2016 = {
        '2016/01/01': '元日',
        '2016/01/11': '成人の日',
        '2016/02/11': '建国記念の日',
        '2016/03/20': '春分の日',
        '2016/03/21': '振替休日',
        '2016/04/29': '昭和の日',
        '2016/05/03': '憲法記念日',
        '2016/05/04': 'みどりの日',
        '2016/05/05': 'こどもの日',
        '2016/07/18': '海の日',
        '2016/08/11': '山の日',
        '2016/09/19': '敬老の日',
        '2016/09/22': '秋分の日',
        '2016/10/10': '体育の日',
        '2016/11/03': '文化の日',
        '2016/11/23': '勤労感謝の日',
        '2016/12/23': '天皇誕生日'
    };
    it('2015年日本の祝祭日の戻り値は「obj2015」', function () {
        expect(UltraDate.getHolidays(2016)).toEqual(obj2016);
    });
});
describe('getHoliday:', function () {
    var date20150101 = new UltraDate('2015/01/01');
    it('2015年1月1日の戻り値は「元日」', function () {
        expect(date20150101.getHoliday()).toEqual('元日');
    });
    var date20150102 = new UltraDate('2015/01/02');
    it('2015年1月2日の戻り値は「空文字」', function () {
        expect(date20150102.getHoliday()).toEqual('');
    });
});

describe('getISOLastWeekNum:', function () {
    it('2015年最終週の戻り値は「53」', function () {
        expect(UltraDate.getISOLastWeekNum(2015)).toEqual(53);
    });
    it('2016年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2016)).toEqual(52);
    });
    it('2017年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2017)).toEqual(52);
    });
    it('2018年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2018)).toEqual(52);
    });
    it('2019年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2019)).toEqual(52);
    });
    it('2020年最終週の戻り値は「53」', function () {
        expect(UltraDate.getISOLastWeekNum(2020)).toEqual(53);
    });
    it('2021年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2021)).toEqual(52);
    });
    it('2022年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2022)).toEqual(52);
    });
    it('2023年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2023)).toEqual(52);
    });
    it('2024年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2024)).toEqual(52);
    });
    it('2025年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2025)).toEqual(52);
    });
    it('2026年最終週の戻り値は「53」', function () {
        expect(UltraDate.getISOLastWeekNum(2026)).toEqual(53);
    });
    it('2027年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2027)).toEqual(52);
    });
    it('2028年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2028)).toEqual(52);
    });
    it('2029年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2029)).toEqual(52);
    });
    it('2030年最終週の戻り値は「52」', function () {
        expect(UltraDate.getISOLastWeekNum(2030)).toEqual(52);
    });
});

describe('getUSLastWeekNum:', function () {
    it('2015年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2015)).toEqual(53);
    });
    it('2016年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2016)).toEqual(53);
    });
    it('2017年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2017)).toEqual(53);
    });
    it('2018年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2018)).toEqual(53);
    });
    it('2019年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2019)).toEqual(53);
    });
    it('2020年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2020)).toEqual(53);
    });
    it('2021年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2021)).toEqual(53);
    });
    it('2022年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2022)).toEqual(53);
    });
    it('2023年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2023)).toEqual(53);
    });
    it('2024年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2024)).toEqual(53);
    });
    it('2025年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2025)).toEqual(53);
    });
    it('2026年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2026)).toEqual(53);
    });
    it('2027年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2027)).toEqual(53);
    });
    it('2028年最終週の戻り値は「54」', function () {
        expect(UltraDate.getUSLastWeekNum(2028)).toEqual(54);
    });
    it('2029年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2029)).toEqual(53);
    });
    it('2030年最終週の戻り値は「53」', function () {
        expect(UltraDate.getUSLastWeekNum(2030)).toEqual(53);
    });
});