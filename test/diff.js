'use strict';

describe('diff:', function () {
    describe('diff:', function () {
        it('後の日', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            var date1 = UltraDate(2015, 0, 2, 1, 1, 1, 1);
            var ret = {
                after: true,
                day: 1,
                hour: 1,
                minute: 1,
                second: 1,
                ms: 1
            };
            expect(date.diff(date1)).toEqual(ret);
        });
        it('前の日', function () {
            var date = UltraDate(2015, 0, 2, 1, 1, 1, 1);
            var date1 = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            var ret = {
                after: false,
                day: 1,
                hour: 1,
                minute: 1,
                second: 1,
                ms: 1
            };
            expect(date.diff(date1)).toEqual(ret);
        });
    });
    describe('diffMonth:', function () {
        it('2ヵ月後', function () {
            var date = UltraDate('2015-01-01');
            expect(date.diffMonth('2015-03-25')).toEqual(2);
        });
        it('3ヶ月前', function () {
            var date = UltraDate('2015-01-01');
            expect(date.diffMonth('2014-10-10')).toEqual(-3);
        });
    });
    describe('diffDate:', function () {
        it('3日後', function () {
            var date = UltraDate('2015-01-01');
            expect(date.diffDate('2015-01-04')).toEqual(3);
        });
        it('7日前', function () {
            var date = UltraDate('2015-01-01');
            expect(date.diffDate('2014-12-25')).toEqual(-7);
        });
    });
});