'use strict';

describe('setRealMonth:', function () {
    var date = new UltraDate('2015/01/01').setRealMonth(3);
    it('3月にセットしたので戻り値は「3」', function () {
        expect(date.getRealMonth()).toEqual(3);
    });
});
describe('setDayCountsInMonth:', function () {
    var date14 = new UltraDate('2015/01/01').setDayCountsInMonth(1, 4);
    it('第1木曜日にセットしたので月の戻り値は「1」日の戻り値は「1」', function () {
        expect(date14.getRealMonth()).toEqual(1);
        expect(date14.getDate()).toEqual(1);
    });
    var date10 = new UltraDate('2015/01/01').setDayCountsInMonth(1, 0);
    it('第1日曜日にセットしたので月の戻り値は「1」日の戻り値は「4」', function () {
        expect(date10.getRealMonth()).toEqual(1);
        expect(date10.getDate()).toEqual(4);
    });
    var date33 = new UltraDate('2015/01/01').setDayCountsInMonth(3, 3);
    it('第3日曜日にセットしたので月の戻り値は「1」日の戻り値は「21」', function () {
        expect(date33.getRealMonth()).toEqual(1);
        expect(date33.getDate()).toEqual(21);
    });
    // 翌月持ち越しの確認
    var date60 = new UltraDate('2015/01/01').setDayCountsInMonth(6, 0);
    it('第6日曜日にセットしたので月の戻り値は「2」日の戻り値は「8」', function () {
        expect(date60.getRealMonth()).toEqual(2);
        expect(date60.getDate()).toEqual(8);
    });
    it('引数が無いときは例外をスロー', function () {
        var date = new UltraDate('2015/01/01');
        expect(date.setDayCountsInMonth).toThrow(new Error('Data type of the argument is incorrect'));
    });
});
describe('setISOWeekDay:', function () {
    it('引数が無いときは例外をスロー', function () {
        var date = new UltraDate('2015/01/01');
        expect(date.setISOWeekDay).toThrow(new Error('Data type of the argument is incorrect'));
    });
    // 2004第0週 ---------------------------------------------------------------
    it('2004年第0週月曜日は12月22日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(22);
    });
    it('2004年第0週火曜日は12月23日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(23);
    });
    it('2004年第0週水曜日は12月24日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(24);
    });
    it('2004年第0週木曜日は12月25日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(25);
    });
    it('2004年第0週金曜日は12月26日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2004年第0週土曜日は12月27日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2004年第0週日曜日は12月28日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    // 2004第1週 ---------------------------------------------------------------
    it('2004年第1週月曜日は12月29日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2004年第1週火曜日は12月30日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2004年第1週水曜日は12月31日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2004年第1週木曜日は1月1日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2004年第1週金曜日は1月2日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2004年第1週土曜日は1月3日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2004年第1週日曜日は1月4日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    // 2004第2週 ---------------------------------------------------------------
    it('2004年第2週月曜日は1月5日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2004年第2週火曜日は1月6日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2004年第2週水曜日は1月7日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2004年第2週木曜日は1月8日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2004年第2週金曜日は1月9日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2004年第2週土曜日は1月10日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2004年第2週日曜日は1月11日', function () {
        var date = new UltraDate('2004/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    // 2005第0週 ---------------------------------------------------------------
    it('2005年第0週月曜日は12月27日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2005年第0週火曜日は12月28日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2005年第0週水曜日は12月29日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2005年第0週木曜日は12月30日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2005年第0週金曜日は12月31日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2004);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2005年第0週土曜日は1月1日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2005年第0週日曜日は1月2日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    // 2005第1週 ---------------------------------------------------------------
    it('2005年第1週月曜日は1月3日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2005年第1週火曜日は1月4日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2005年第1週水曜日は1月5日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2005年第1週木曜日は1月6日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2005年第1週金曜日は1月7日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2005年第1週土曜日は1月8日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2005年第1週日曜日は1月9日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    // 2005第2週 ---------------------------------------------------------------
    it('2005年第2週月曜日は1月10日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2005年第2週火曜日は1月11日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2005年第2週水曜日は1月12日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2005年第2週木曜日は1月13日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    it('2005年第2週金曜日は1月14日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(14);
    });
    it('2005年第2週土曜日は1月15日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(15);
    });
    it('2005年第2週日曜日は1月16日', function () {
        var date = new UltraDate('2005/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(16);
    });
    // 2006第0週 ---------------------------------------------------------------
    it('2006年第0週月曜日は12月26日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2006年第0週火曜日は12月27日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2006年第0週水曜日は12月28日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2006年第0週木曜日は12月29日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2006年第0週金曜日は12月30日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2006年第0週土曜日は12月31日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2005);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2006年第0週日曜日は1月1日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    // 2006第1週 ---------------------------------------------------------------
    it('2006年第1週月曜日は1月2日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2006年第1週火曜日は1月3日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2006年第1週水曜日は1月4日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2006年第1週木曜日は1月5日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2006年第1週金曜日は1月6日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2006年第1週土曜日は1月7日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2006年第1週日曜日は1月8日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    // 2006第2週 ---------------------------------------------------------------
    it('2006年第2週月曜日は1月9日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2006年第2週火曜日は1月10日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2006年第2週水曜日は1月11日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2006年第2週木曜日は1月12日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2006年第2週金曜日は1月13日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    it('2006年第2週土曜日は1月14日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(14);
    });
    it('2006年第2週日曜日は1月15日', function () {
        var date = new UltraDate('2006/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(15);
    });
    // 2007第0週 ---------------------------------------------------------------
    it('2007年第0週月曜日は12月25日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(25);
    });
    it('2007年第0週火曜日は12月26日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2007年第0週水曜日は12月27日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2007年第0週木曜日は12月28日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2007年第0週金曜日は12月29日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2007年第0週土曜日は12月30日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2007年第0週日曜日は12月31日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    // 2007第1週 ---------------------------------------------------------------
    it('2007年第1週月曜日は1月1日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2007年第1週火曜日は1月2日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2007年第1週水曜日は1月3日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2007年第1週木曜日は1月4日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2007年第1週金曜日は1月5日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2007年第1週土曜日は1月6日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2007年第1週日曜日は1月7日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    // 2007第2週 ---------------------------------------------------------------
    it('2007年第2週月曜日は1月8日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2007年第2週火曜日は1月9日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2007年第2週水曜日は1月10日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2007年第2週木曜日は1月11日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2007年第2週金曜日は1月12日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2007年第2週土曜日は1月13日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    it('2007年第2週日曜日は1月14日', function () {
        var date = new UltraDate('2007/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(14);
    });
    // 2008第0週 ---------------------------------------------------------------
    it('2008年第0週月曜日は12月24日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(24);
    });
    it('2008年第0週火曜日は12月25日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(25);
    });
    it('2008年第0週水曜日は12月26日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2008年第0週木曜日は12月27日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2008年第0週金曜日は12月28日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2008年第0週土曜日は12月29日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2008年第0週日曜日は12月30日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    // 2008第1週 ---------------------------------------------------------------
    it('2008年第1週月曜日は12月31日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2008年第1週火曜日は1月1日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2008年第1週水曜日は1月2日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2008年第1週木曜日は1月3日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2008年第1週金曜日は1月4日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2008年第1週土曜日は1月5日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2008年第1週日曜日は1月6日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    // 2008第2週 ---------------------------------------------------------------
    it('2008年第2週月曜日は1月7日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2008年第2週火曜日は1月8日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2008年第2週水曜日は1月9日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2008年第2週木曜日は1月10日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2008年第2週金曜日は1月11日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2008年第2週土曜日は1月12日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2008年第2週日曜日は1月13日', function () {
        var date = new UltraDate('2008/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    // 2009第0週 ---------------------------------------------------------------
    it('2009年第0週月曜日は12月22日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(22);
    });
    it('2009年第0週火曜日は12月23日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(23);
    });
    it('2009年第0週水曜日は12月24日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(24);
    });
    it('2009年第0週木曜日は12月25日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(25);
    });
    it('2009年第0週金曜日は12月26日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2009年第0週土曜日は12月27日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2009年第0週日曜日は12月28日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    // 2009第1週 ---------------------------------------------------------------
    it('2009年第1週月曜日は12月29日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2009年第1週火曜日は12月30日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2009年第1週水曜日は12月31日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2009年第1週木曜日は1月1日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2009年第1週金曜日は1月2日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2009年第1週土曜日は1月3日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2009年第1週日曜日は1月4日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    // 2009第2週 ---------------------------------------------------------------
    it('2009年第2週月曜日は1月5日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2009年第2週火曜日は1月6日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2009年第2週水曜日は1月7日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2009年第2週木曜日は1月8日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2009年第2週金曜日は1月9日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2009年第2週土曜日は1月10日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2009年第2週日曜日は1月11日', function () {
        var date = new UltraDate('2009/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    // 2010第0週 ---------------------------------------------------------------
    it('2010年第0週月曜日は12月28日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2010年第0週火曜日は12月29日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2010年第0週水曜日は12月30日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2010年第0週木曜日は12月31日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2010年第0週金曜日は1月1日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2010年第0週土曜日は1月2日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2010年第0週日曜日は1月3日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    // 2010第1週 ---------------------------------------------------------------
    it('2010年第1週月曜日は1月4日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2010年第1週火曜日は1月5日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2010年第1週水曜日は1月6日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2010年第1週木曜日は1月7日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2010年第1週金曜日は1月8日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2010年第1週土曜日は1月9日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2010年第1週日曜日は1月10日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    // 2010第2週 ---------------------------------------------------------------
    it('2010年第2週月曜日は1月11日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2010年第2週火曜日は1月12日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2010年第2週水曜日は1月13日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    it('2010年第2週木曜日は1月14日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(14);
    });
    it('2010年第2週金曜日は1月15日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(15);
    });
    it('2010年第2週土曜日は1月16日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(16);
    });
    it('2010年第2週日曜日は1月17日', function () {
        var date = new UltraDate('2010/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(17);
    });
    // 2011第0週 ---------------------------------------------------------------
    it('2011年第0週月曜日は12月27日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2011年第0週火曜日は12月28日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2011年第0週水曜日は12月29日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2011年第0週木曜日は12月30日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2011年第0週金曜日は12月31日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2011年第0週土曜日は1月1日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2011年第0週日曜日は1月2日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    // 2011第1週 ---------------------------------------------------------------
    it('2011年第1週月曜日は1月3日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2011年第1週火曜日は1月4日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2011年第1週水曜日は1月5日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2011年第1週木曜日は1月6日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2011年第1週金曜日は1月7日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2011年第1週土曜日は1月8日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2011年第1週日曜日は1月9日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    // 2011第2週 ---------------------------------------------------------------
    it('2011年第2週月曜日は1月10日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2011年第2週火曜日は1月11日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2011年第2週水曜日は1月12日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2011年第2週木曜日は1月13日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    it('2011年第2週金曜日は1月14日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(14);
    });
    it('2011年第2週土曜日は1月15日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(15);
    });
    it('2011年第2週日曜日は1月16日', function () {
        var date = new UltraDate('2011/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(16);
    });
    // 2012第0週 ---------------------------------------------------------------
    it('2012年第0週月曜日は12月26日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2012年第0週火曜日は12月27日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2012年第0週水曜日は12月28日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2012年第0週木曜日は12月29日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2012年第0週金曜日は12月30日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2012年第0週土曜日は12月31日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2012年第0週日曜日は1月1日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    // 2012第1週 ---------------------------------------------------------------
    it('2012年第1週月曜日は1月2日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2012年第1週火曜日は1月3日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2012年第1週水曜日は1月4日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2012年第1週木曜日は1月5日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2012年第1週金曜日は1月6日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2012年第1週土曜日は1月7日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2012年第1週日曜日は1月8日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    // 2012第2週 ---------------------------------------------------------------
    it('2012年第2週月曜日は1月9日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2012年第2週火曜日は1月10日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2012年第2週水曜日は1月11日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2012年第2週木曜日は1月12日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2012年第2週金曜日は1月13日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    it('2012年第2週土曜日は1月14日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(14);
    });
    it('2012年第2週日曜日は1月15日', function () {
        var date = new UltraDate('2012/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(15);
    });
    // 2013第0週 ---------------------------------------------------------------
    it('2013年第0週月曜日は12月24日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(24);
    });
    it('2013年第0週火曜日は12月25日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(25);
    });
    it('2013年第0週水曜日は12月26日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2013年第0週木曜日は12月27日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2013年第0週金曜日は12月28日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2013年第0週土曜日は12月29日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2013年第0週日曜日は12月30日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    // 2013第1週 ---------------------------------------------------------------
    it('2013年第1週月曜日は12月31日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2012);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2013年第1週火曜日は1月1日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2013年第1週水曜日は1月2日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2013年第1週木曜日は1月3日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2013年第1週金曜日は1月4日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2013年第1週土曜日は1月5日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2013年第1週日曜日は1月6日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    // 2013第2週 ---------------------------------------------------------------
    it('2013年第2週月曜日は1月7日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2013年第2週火曜日は1月8日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2013年第2週水曜日は1月9日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2013年第2週木曜日は1月10日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2013年第2週金曜日は1月11日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2013年第2週土曜日は1月12日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2013年第2週日曜日は1月13日', function () {
        var date = new UltraDate('2013/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    // 2014第0週 ---------------------------------------------------------------
    it('2014年第0週月曜日は12月23日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(0, 1);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(23);
    });
    it('2014年第0週火曜日は12月24日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(0, 2);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(24);
    });
    it('2014年第0週水曜日は12月25日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(0, 3);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(25);
    });
    it('2014年第0週木曜日は12月26日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(0, 4);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2014年第0週金曜日は12月27日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(0, 5);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2014年第0週土曜日は12月28日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(0, 6);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2014年第0週日曜日は12月29日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(0, 0);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    // 2014第1週 ---------------------------------------------------------------
    it('2014年第1週月曜日は12月30日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2014年第1週火曜日は12月31日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2013);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2014年第1週水曜日は1月1日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2014年第1週木曜日は1月2日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2014年第1週金曜日は1月3日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2014年第1週土曜日は1月4日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2014年第1週日曜日は1月5日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    // 2014第2週 ---------------------------------------------------------------
    it('2014年第2週月曜日は1月6日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2014年第2週火曜日は1月7日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2014年第2週水曜日は1月8日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2014年第2週木曜日は1月9日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2014年第2週金曜日は1月10日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2014年第2週土曜日は1月11日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2014年第2週日曜日は1月12日', function () {
        var date = new UltraDate('2014/06/01');
        date.setISOWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2014);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
});

describe('setUSWeekDay:', function () {
    it('引数が無いときは例外をスロー', function () {
        var date = new UltraDate('2015/01/01');
        expect(date.setUSWeekDay).toThrow(new Error('Data type of the argument is incorrect'));
    });
    // 2003第1週 ---------------------------------------------------------------
    it('2003年第1週日曜日は12月29日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2002);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2003年第1週月曜日は12月30日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2002);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2003年第1週火曜日は12月31日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2002);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2003年第1週水曜日は1月1日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2003年第1週木曜日は1月2日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2003年第1週金曜日は1月3日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2003年第1週土曜日は1月4日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    // 2003第2週 ---------------------------------------------------------------
    it('2003年第2週日曜日は1月5日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2003年第2週月曜日は1月6日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2003年第2週火曜日は1月7日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2003年第2週水曜日は1月8日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2003年第2週木曜日は1月9日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2003年第2週金曜日は1月10日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2003年第2週土曜日は1月11日', function () {
        var date = new UltraDate('2003/06/01');
        date.setUSWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2003);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    // 2006第1週 ---------------------------------------------------------------
    it('2006年第1週日曜日は1月1日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2006年第1週月曜日は1月2日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2006年第1週火曜日は1月3日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2006年第1週水曜日は1月4日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2006年第1週木曜日は1月5日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2006年第1週金曜日は1月6日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2006年第1週土曜日は1月7日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    // 2006第2週 ---------------------------------------------------------------
    it('2006年第2週日曜日は1月8日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2006年第2週月曜日は1月9日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2006年第2週火曜日は1月10日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2006年第2週水曜日は1月11日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2006年第2週木曜日は1月12日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2006年第2週金曜日は1月13日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    it('2006年第2週土曜日は1月14日', function () {
        var date = new UltraDate('2006/06/01');
        date.setUSWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(14);
    });
    // 2007第1週 ---------------------------------------------------------------
    it('2007年第1週日曜日は12月31日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2006);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2007年第1週月曜日は1月1日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2007年第1週火曜日は1月2日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2007年第1週水曜日は1月3日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2007年第1週木曜日は1月4日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2007年第1週金曜日は1月5日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2007年第1週土曜日は1月6日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    // 2007第2週 ---------------------------------------------------------------
    it('2007年第2週日曜日は1月7日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2007年第2週月曜日は1月8日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2007年第2週火曜日は1月9日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2007年第2週水曜日は1月10日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2007年第2週木曜日は1月11日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2007年第2週金曜日は1月12日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    it('2007年第2週土曜日は1月13日', function () {
        var date = new UltraDate('2007/06/01');
        date.setUSWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(13);
    });
    // 2008第1週 ---------------------------------------------------------------
    it('2008年第1週日曜日は12月30日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2008年第1週月曜日は12月31日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2007);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2008年第1週火曜日は1月1日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2008年第1週水曜日は1月2日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2008年第1週木曜日は1月3日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2008年第1週金曜日は1月4日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2008年第1週土曜日は1月5日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    // 2008第2週 ---------------------------------------------------------------
    it('2008年第2週日曜日は1月6日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2008年第2週月曜日は1月7日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2008年第2週火曜日は1月8日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2008年第2週水曜日は1月9日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2008年第2週木曜日は1月10日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    it('2008年第2週金曜日は1月11日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(11);
    });
    it('2008年第2週土曜日は1月12日', function () {
        var date = new UltraDate('2008/06/01');
        date.setUSWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(12);
    });
    // 2009第1週 ---------------------------------------------------------------
    it('2009年第1週日曜日は12月28日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2009年第1週月曜日は12月29日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2009年第1週火曜日は12月30日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2009年第1週水曜日は12月31日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2008);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2009年第1週木曜日は1月1日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2009年第1週金曜日は1月2日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2009年第1週土曜日は1月3日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    // 2009第2週 ---------------------------------------------------------------
    it('2009年第2週日曜日は1月4日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2009年第2週月曜日は1月5日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2009年第2週火曜日は1月6日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2009年第2週水曜日は1月7日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2009年第2週木曜日は1月8日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2009年第2週金曜日は1月9日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    it('2009年第2週土曜日は1月10日', function () {
        var date = new UltraDate('2009/06/01');
        date.setUSWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(10);
    });
    // 2010第1週 ---------------------------------------------------------------
    it('2010年第1週日曜日は12月27日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2010年第1週月曜日は12月28日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2010年第1週火曜日は12月29日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2010年第1週水曜日は12月30日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2010年第1週木曜日は12月31日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2009);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2010年第1週金曜日は1月1日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    it('2010年第1週土曜日は1月2日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    // 2010第2週 ---------------------------------------------------------------
    it('2010年第2週日曜日は1月3日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2010年第2週月曜日は1月4日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2010年第2週火曜日は1月5日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2010年第2週水曜日は1月6日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2010年第2週木曜日は1月7日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2010年第2週金曜日は1月8日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
    it('2010年第2週土曜日は1月9日', function () {
        var date = new UltraDate('2010/06/01');
        date.setUSWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(9);
    });
    // 2011第1週 ---------------------------------------------------------------
    it('2011年第1週日曜日は12月26日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(1, 0);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(26);
    });
    it('2011年第1週月曜日は12月27日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(1, 1);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(27);
    });
    it('2011年第1週火曜日は12月28日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(1, 2);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(28);
    });
    it('2011年第1週水曜日は12月29日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(1, 3);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(29);
    });
    it('2011年第1週木曜日は12月30日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(1, 4);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(30);
    });
    it('2011年第1週金曜日は12月31日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(1, 5);
        expect(date.getFullYear()).toEqual(2010);
        expect(date.getRealMonth()).toEqual(12);
        expect(date.getDate()).toEqual(31);
    });
    it('2011年第1週土曜日は1月1日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(1, 6);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(1);
    });
    // 2011第2週 ---------------------------------------------------------------
    it('2011年第2週日曜日は1月2日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(2, 0);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(2);
    });
    it('2011年第2週月曜日は1月3日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(2, 1);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(3);
    });
    it('2011年第2週火曜日は1月4日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(2, 2);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(4);
    });
    it('2011年第2週水曜日は1月5日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(2, 3);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(5);
    });
    it('2011年第2週木曜日は1月6日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(2, 4);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(6);
    });
    it('2011年第2週金曜日は1月7日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(2, 5);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(7);
    });
    it('2011年第2週土曜日は1月8日', function () {
        var date = new UltraDate('2011/06/01');
        date.setUSWeekDay(2, 6);
        expect(date.getFullYear()).toEqual(2011);
        expect(date.getRealMonth()).toEqual(1);
        expect(date.getDate()).toEqual(8);
    });
});
describe('setFirstDate:', function () {
    var date1 = new UltraDate('2015/01/31 12:00:00').setFirstDate();
    var setDate1 = new UltraDate('2015/01/01');
    it('2015年1月31日12時の月初の戻り値は2015年1月1日0時', function () {
        expect(date1.getTime()).toEqual(setDate1.getTime());
    });
    var date2 = new UltraDate('2015/01/31 12:00:00').setFirstDate(1);
    var setDate2 = new UltraDate('2015/02/01');
    it('2015年1月31日12時の翌月 月初戻り値は2015年2月1日0時', function () {
        expect(date2.getTime()).toEqual(setDate2.getTime());
    });
    var date3 = new UltraDate('2015/01/31 12:00:00').setFirstDate(2);
    var setDate3 = new UltraDate('2015/03/01');
    it('2015年1月31日12時の翌々月 月初戻り値は2015年3月1日0時', function () {
        expect(date3.getTime()).toEqual(setDate3.getTime());
    });
    var date12 = new UltraDate('2015/01/31 12:00:00').setFirstDate(-1);
    var setDate12 = new UltraDate('2014/12/01');
    it('2015年1月31日12時の前月 月初戻り値は2014年12月1日0時', function () {
        expect(date12.getTime()).toEqual(setDate12.getTime());
    });
    var date11 = new UltraDate('2015/01/31 12:00:00').setFirstDate(-2);
    var setDate11 = new UltraDate('2014/11/01');
    it('2015年1月31日12時の前々月 月初戻り値は2014年11月1日0時', function () {
        expect(date11.getTime()).toEqual(setDate11.getTime());
    });
});
describe('setLastDate:', function () {
    var date1 = new UltraDate('2015/01/31 12:00:00').setLastDate();
    var setDate1 = new UltraDate('2015/01/31');
    it('2015年1月31日12時の月末の戻り値は2015年1月31日0時', function () {
        expect(date1.getTime()).toEqual(setDate1.getTime());
    });
    var date2 = new UltraDate('2015/01/31 12:00:00').setLastDate(1);
    var setDate2 = new UltraDate('2015/02/28');
    it('2015年1月31日12時の翌月 月末戻り値は2015年2月28日0時', function () {
        expect(date2.getTime()).toEqual(setDate2.getTime());
    });
    var date3 = new UltraDate('2015/01/31 12:00:00').setLastDate(2);
    var setDate3 = new UltraDate('2015/03/31');
    it('2015年1月31日12時の翌々月 月末戻り値は2015年3月31日0時', function () {
        expect(date3.getTime()).toEqual(setDate3.getTime());
    });
    var date12 = new UltraDate('2015/01/31 12:00:00').setLastDate(-1);
    var setDate12 = new UltraDate('2014/12/31');
    it('2015年1月31日12時の前月 月末戻り値は2014年12月31日0時', function () {
        expect(date12.getTime()).toEqual(setDate12.getTime());
    });
    var date11 = new UltraDate('2015/01/31 12:00:00').setLastDate(-2);
    var setDate11 = new UltraDate('2014/11/30');
    it('2015年1月31日12時の前々月 月末戻り値は2014年11月30日0時', function () {
        expect(date11.getTime()).toEqual(setDate11.getTime());
    });
});
describe('setBeforeWeekday:', function () {
    var date1 = new UltraDate('2014/05/03').setBeforeWeekday();
    it('2015年5月3日の土日祝祭日の前の平日は2日', function () {
        expect(date1.getDate()).toEqual(2);
    });
    var date2 = new UltraDate('2014/05/03').setBeforeWeekday(1);
    it('2015年5月3日の土日の前の平日は2日', function () {
        expect(date2.getDate()).toEqual(2);
    });
    var date3 = new UltraDate('2014/05/03').setBeforeWeekday(2);
    it('2015年5月3日の日祝の前の平日は3日', function () {
        expect(date3.getDate()).toEqual(2);
    });
    var date4 = new UltraDate('2014/05/03').setBeforeWeekday(3);
    it('2015年5月3日の日曜日の前の平日は3日', function () {
        expect(date4.getDate()).toEqual(3);
    });
    var date5 = new UltraDate('2014/05/03').setBeforeWeekday(4);
    it('2015年5月3日の祝日の前の平日は2日', function () {
        expect(date5.getDate()).toEqual(2);
    });
});
describe('setAfterWeekday:', function () {
    var date1 = new UltraDate('2014/05/03').setAfterWeekday();
    it('2015年5月3日の土日祝祭日の後の平日は7日', function () {
        expect(date1.getDate()).toEqual(7);
    });
    var date2 = new UltraDate('2014/05/03').setAfterWeekday(1);
    it('2015年5月3日の土日の後の平日は5日', function () {
        expect(date2.getDate()).toEqual(5);
    });
    var date3 = new UltraDate('2014/05/03').setAfterWeekday(2);
    it('2015年5月3日の日祝の後の平日は7日', function () {
        expect(date3.getDate()).toEqual(7);
    });
    var date4 = new UltraDate('2014/05/03').setAfterWeekday(3);
    it('2015年5月3日の日曜日の後の平日は3日', function () {
        expect(date4.getDate()).toEqual(3);
    });
    var date5 = new UltraDate('2014/05/03').setAfterWeekday(4);
    it('2015年5月3日の祝日の後の平日は7日', function () {
        expect(date5.getDate()).toEqual(7);
    });
});
describe('setOrdinalDate:', function () {
    var date1 = new UltraDate('2015/03/01').setOrdinalDate(1);
    it('2015年の年間通算日「1」の月の戻り値は「1」日の戻り値は「1」', function () {
        expect(date1.getRealMonth()).toEqual(1);
        expect(date1.getDate()).toEqual(1);
    });
    var date2 = new UltraDate('2015/03/01').setOrdinalDate(365);
    it('2015年の年間通算日「365」の月の戻り値は「12」日の戻り値は「31」', function () {
        expect(date2.getRealMonth()).toEqual(12);
        expect(date2.getDate()).toEqual(31);
    });
    var date3 = new UltraDate('2016/03/01').setOrdinalDate(365);
    it('2016年の年間通算日「365」の月の戻り値は「12」日の戻り値は「30」', function () {
        expect(date3.getRealMonth()).toEqual(12);
        expect(date3.getDate()).toEqual(30);
    });
});
describe('setRoundingTime:', function () {
    it('丸める日付外なら例外をスロー', function () {
        var date = new UltraDate('2015/01/01');
        expect(function () {
            date.setRoundingTime(3);
        }).toThrow(new Error('Data type of the argument is incorrect'));
    });
    // 5分単位切捨て--------------------------------------------------------------
    it('12時00分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時06分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時07分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時08分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時09分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時10分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時11分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時12分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時13分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時14分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時15分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時16分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時17分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時18分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時19分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時20分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時21分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時22分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時23分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時24分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時25分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時26分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時27分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時28分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時29分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時30分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時34分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時35分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時36分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時37分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時38分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時39分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時40分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時41分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時42分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時43分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時44分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時45分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時46分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時47分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時48分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時49分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時50分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時51分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時52分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時53分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時54分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時55分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時56分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時57分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時58分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時59分5分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    // 5分単位切上げ--------------------------------------------------------------
    it('12時00分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時02分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時03分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時04分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時05分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時06分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時07分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時08分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時09分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時10分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時11分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時12分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時13分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時14分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時15分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時16分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時17分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時18分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時19分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時20分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時21分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時22分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時23分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時24分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時25分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時26分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時27分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時28分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時32分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時33分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時34分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時35分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時36分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時37分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時38分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時39分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時40分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時41分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時42分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時43分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時44分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時45分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時46分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時47分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時48分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時49分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時50分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時51分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時52分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時53分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時54分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時55分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時56分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分5分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 5分単位近いほうに丸める--------------------------------------------------
    it('12時00分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時04分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時05分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時06分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時07分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(5);
    });
    it('12時08分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時09分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時10分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時11分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時12分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時13分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時14分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時15分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時16分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時17分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時18分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時19分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時20分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時21分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時22分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時23分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時24分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時25分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時26分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時27分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(25);
    });
    it('12時28分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時34分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時35分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時36分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時37分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(35);
    });
    it('12時38分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時39分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時40分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時41分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時42分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時43分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時44分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時45分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時46分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時47分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時48分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時49分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時50分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時51分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時52分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時53分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時54分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時55分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時56分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時57分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(55);
    });
    it('12時58分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分5分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(5, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 10分単位切捨て--------------------------------------------------------------
    it('12時00分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時09分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時10分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時11分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時12分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時13分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時14分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時15分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時16分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時17分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時18分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時19分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時20分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時21分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時22分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時23分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時24分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時25分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時26分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時27分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時28分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時29分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時30分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時34分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時35分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時36分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時37分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時38分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時39分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時40分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時41分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時42分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時43分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時44分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時45分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時46分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時47分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時48分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時49分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時50分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時51分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時52分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時53分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時54分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時55分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時56分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時57分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時58分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時59分10分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    // 10分単位切上げ--------------------------------------------------------------
    it('12時00分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時02分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時03分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時04分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時05分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時06分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時07分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時08分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時09分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時10分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時11分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時12分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時13分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時14分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時15分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時16分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時17分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時18分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時19分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時20分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時21分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時22分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時23分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時24分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時25分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時26分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時27分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時28分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時32分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時33分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時34分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時35分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時36分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時37分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時38分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時39分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時40分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時41分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時42分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時43分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時44分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時45分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時46分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時47分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時48分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時49分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時50分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時51分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時52分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時53分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分10分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 10分単位近いほうに丸める--------------------------------------------------
    it('12時00分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時06分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時07分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時08分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時09分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時10分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時11分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時12分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時13分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時14分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(10);
    });
    it('12時15分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時16分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時17分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時18分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時19分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時20分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時21分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時22分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時23分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時24分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(20);
    });
    it('12時25分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時26分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時27分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時28分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時34分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時35分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時36分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時37分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時38分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時39分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時40分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時41分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時42分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時43分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時44分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(40);
    });
    it('12時45分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時46分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時47分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時48分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時49分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時50分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時51分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時52分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時53分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時54分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(50);
    });
    it('12時55分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分10分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(10, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 15分単位切捨て--------------------------------------------------------------
    it('12時00分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時09分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時10分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時11分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時12分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時13分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時14分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時15分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時16分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時17分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時18分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時19分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時20分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時21分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時22分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時23分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時24分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時25分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時26分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時27分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時28分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時29分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時30分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時34分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時35分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時36分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時37分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時38分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時39分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時40分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時41分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時42分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時43分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時44分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時45分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時46分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時47分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時48分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時49分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時50分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時51分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時52分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時53分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時54分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時55分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時56分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時57分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時58分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時59分15分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    // 15分単位切上げ--------------------------------------------------------------
    it('12時00分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時02分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時03分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時04分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時05分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時06分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時07分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時08分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時09分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時10分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時11分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時12分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時13分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時14分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時15分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時16分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時17分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時18分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時19分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時20分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時21分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時22分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時23分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時24分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時25分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時26分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時27分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時28分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時32分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時33分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時34分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時35分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時36分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時37分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時38分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時39分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時40分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時41分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時42分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時43分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時44分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時45分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時46分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時47分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時48分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時49分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時50分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時51分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時52分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時53分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分15分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 15分単位近いほうに丸める--------------------------------------------------
    it('12時00分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時09分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時10分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時11分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時12分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時13分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時14分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時15分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時16分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時17分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時18分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時19分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時20分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時21分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時22分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(15);
    });
    it('12時23分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時24分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時25分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時26分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時27分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時28分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時34分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時35分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時36分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時37分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時38分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時39分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時40分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時41分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時42分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時43分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時44分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時45分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時46分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時47分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時48分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時49分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時50分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時51分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時52分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(45);
    });
    it('12時53分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分15分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(15, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 30分単位切捨て--------------------------------------------------------------
    it('12時00分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時09分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時10分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時11分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時12分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時13分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時14分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時15分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時16分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時17分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時18分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時19分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時20分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時21分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時22分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時23分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時24分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時25分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時26分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時27分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時28分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時29分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時30分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時34分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時35分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時36分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時37分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時38分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時39分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時40分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時41分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時42分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時43分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時44分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時45分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時46分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時47分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時48分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時49分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時50分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時51分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時52分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時53分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時54分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時55分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時56分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時57分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時58分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時59分30分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    // 30分単位切上げ--------------------------------------------------------------
    it('12時00分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時02分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時03分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時04分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時05分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時06分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時07分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時08分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時09分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時10分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時11分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時12分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時13分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時14分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時15分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時16分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時17分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時18分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時19分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時20分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時21分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時22分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時23分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時24分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時25分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時26分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時27分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時28分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時32分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時33分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時34分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時35分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時36分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時37分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時38分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時39分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時40分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時41分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時42分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時43分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時44分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時45分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時46分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時47分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時48分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時49分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時50分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時51分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時52分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時53分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分30分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 30分単位近いほうに丸める--------------------------------------------------
    it('12時00分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時09分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時10分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時11分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時12分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時13分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時14分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時15分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時16分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時17分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時18分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時19分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時20分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時21分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時22分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時23分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時24分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時25分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時26分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時27分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時28分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時29分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時30分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時31分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時32分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時33分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時34分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時35分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時36分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時37分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時38分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時39分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時40分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時41分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時42分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時43分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時44分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(30);
    });
    it('12時45分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時46分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時47分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時48分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時49分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時50分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時51分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時52分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時53分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分30分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(30, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 60分単位切捨て--------------------------------------------------------------
    it('12時00分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時09分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時10分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時11分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時12分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時13分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時14分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時15分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時16分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時17分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時18分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時19分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時20分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時21分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時22分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時23分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時24分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時25分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時26分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時27分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時28分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時29分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時30分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時31分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時32分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時33分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時34分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時35分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時36分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時37分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時38分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時39分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時40分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時41分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時42分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時43分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時44分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時45分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時46分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時47分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時48分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時49分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時50分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時51分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時52分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時53分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分60分単位で切り捨て', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 0);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    // 60分単位切上げ--------------------------------------------------------------
    it('12時00分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時09分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時10分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時11分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時12分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時13分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時14分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時15分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時16分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時17分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時18分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時19分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時20分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時21分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時22分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時23分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時24分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時25分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時26分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時27分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時28分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時29分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時30分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時31分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時32分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時33分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時34分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時35分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時36分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時37分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時38分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時39分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時40分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時41分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時42分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時43分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時44分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時45分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時46分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時47分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時48分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時49分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時50分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時51分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時52分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時53分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分60分単位で切上げ', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 1);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    // 60分単位近いほうに丸める--------------------------------------------------
    it('12時00分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:00:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時01分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:01:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時02分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:02:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時03分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:03:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時04分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:04:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時05分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:05:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時06分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:06:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時07分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:07:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時08分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:08:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時09分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:09:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時10分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:10:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時11分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:11:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時12分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:12:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時13分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:13:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時14分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:14:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時15分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:15:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時16分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:16:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時17分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:17:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時18分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:18:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時19分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:19:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時20分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:20:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時21分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:21:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時22分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:22:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時23分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:23:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時24分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:24:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時25分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:25:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時26分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:26:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時27分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:27:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時28分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:28:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時29分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:29:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時30分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:30:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時31分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:31:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時32分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:32:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時33分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:33:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時34分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:34:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時35分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:35:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時36分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:36:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時37分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:37:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時38分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:38:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時39分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:39:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時40分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:40:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時41分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:41:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時42分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:42:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時43分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:43:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時44分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:44:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時45分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:45:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時46分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:46:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時47分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:47:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時48分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:48:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時49分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:49:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時50分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:50:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時51分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:51:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時52分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:52:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時53分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:53:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時54分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:54:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時55分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:55:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時56分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:56:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時57分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:57:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時58分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:58:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
    it('12時59分60分単位で近いほうに丸める', function () {
        var date = new UltraDate('2015-01-31T12:59:59.123Z');
        date.addMinutes(date.getTimezoneOffset()).setRoundingTime(60, 2);
        expect(date.getHours()).toEqual(13);
        expect(date.getMinutes()).toEqual(0);
    });
});

describe('clearTime:', function () {
    var date = new UltraDate('2015-01-31T12:59:59.123Z').clearTime();
    var setDate = new UltraDate('2015/01/31');
    it('2015年1月31日12時59分59秒123ミリ秒のクリア時間の戻り値は' +
            '2015年1月31日00時00分00秒0ミリ秒', function () {
                expect(date.getTime()).toEqual(setDate.getTime());
            });
});