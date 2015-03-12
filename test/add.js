'use strict';

describe('add:', function () {
    describe('addYear:', function () {
        it('1年追加', function () {
            var date = UltraDate('2015-01-01');
            expect(date.addYear(1).format('yyyy')).toEqual('2016');
        });
        it('1年減少', function () {
            var date = UltraDate('2015-01-01');
            expect(date.addYear(-1).format('yyyy')).toEqual('2014');
        });
    });
    describe('addMonth:', function () {
        it('1月追加', function () {
            var date = UltraDate('2015-01-01');
            expect(date.addMonth(1).format('MM')).toEqual('02');
        });
        it('1月減少', function () {
            var date = UltraDate('2015-01-01');
            expect(date.addMonth(-1).format('MM')).toEqual('12');
        });
    });
    describe('addDate:', function () {
        it('1日追加', function () {
            var date = UltraDate('2015-01-01');
            expect(date.addDate(1).format('dd')).toEqual('02');
        });
        it('1日減少', function () {
            var date = UltraDate('2015-01-01');
            expect(date.addDate(-1).format('dd')).toEqual('31');
        });
    });
    describe('addHours:', function () {
        it('1時間追加', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addHours(1).format('HH')).toEqual('01');
        });
        it('1時間減少', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addHours(-1).format('HH')).toEqual('23');
        });
    });
    describe('addMinutes:', function () {
        it('1分追加', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addMinutes(1).format('mm')).toEqual('01');
        });
        it('1分減少', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addMinutes(-1).format('mm')).toEqual('59');
        });
    });
    describe('addSeconds:', function () {
        it('1秒追加', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addSeconds(1).format('ss')).toEqual('01');
        });
        it('1秒減少', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addSeconds(-1).format('ss')).toEqual('59');
        });
    });
    describe('addMilliseconds:', function () {
        it('1ミリ秒追加', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addMilliseconds(1).format('fff')).toEqual('001');
        });
        it('1ミリ秒減少', function () {
            var date = UltraDate(2015, 0, 1, 0, 0, 0, 0);
            expect(date.addMilliseconds(-1).format('fff')).toEqual('999');
        });
    });
});