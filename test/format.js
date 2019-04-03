'use strict';

describe('format:', function () {
    describe('ロケールなし:', function () {
        // UTCで時間をセット
        var date = new UltraDate('1989-01-01T13:05:08.009Z');
        // タイムゾーン分のオフセット
        date.addMinutes(date.getTimezoneOffset());
        it('yyyyの戻り値は「1989」', function () {
            expect(date.format('yyyy')).toEqual('1989');
        });
        it('yyの戻り値は「89」', function () {
            expect(date.format('yy')).toEqual('89');
        });
        it('eeeeの戻り値は「0001」', function () {
            expect(date.format('eeee')).toEqual('0001');
        });
        it('eeeの戻り値は「001」', function () {
            expect(date.format('eee')).toEqual('001');
        });
        it('eeの戻り値は「01」', function () {
            expect(date.format('ee')).toEqual('01');
        });
        it('eの戻り値は「1」', function () {
            expect(date.format('e')).toEqual('1');
        });
        it('gggの戻り値は「平成」', function () {
            expect(date.format('ggg')).toEqual('平成');
        });
        it('ggの戻り値は「平」', function () {
            expect(date.format('gg')).toEqual('平');
        });
        it('gの戻り値は「H」', function () {
            expect(date.format('g')).toEqual('H');
        });
        describe('厳格:', function () {
            it('eeeeの戻り値は「0064」', function () {
                expect(date.format('eeee', true)).toEqual('0064');
            });
            it('eeeの戻り値は「064」', function () {
                expect(date.format('eee', true)).toEqual('064');
            });
            it('eeの戻り値は「64」', function () {
                expect(date.format('ee', true)).toEqual('64');
            });
            it('eの戻り値は「64」', function () {
                expect(date.format('e', true)).toEqual('64');
            });
            it('gggの戻り値は「昭和」', function () {
                expect(date.format('ggg', true)).toEqual('昭和');
            });
            it('ggの戻り値は「昭」', function () {
                expect(date.format('gg', true)).toEqual('昭');
            });
            it('gの戻り値は「S」', function () {
                expect(date.format('g', true)).toEqual('S');
            });
        });
        it('MMMMの戻り値は「睦月」', function () {
            expect(date.format('MMMM')).toEqual('睦月');
        });
        it('MMMの戻り値は「睦月」', function () {
            expect(date.format('MMM')).toEqual('睦月');
        });
        it('MMの戻り値は「01」', function () {
            expect(date.format('MM')).toEqual('01');
        });
        it('Mの戻り値は「1」', function () {
            expect(date.format('M')).toEqual('1');
        });
        it('ddddの戻り値は「1」', function () {
            expect(date.format('dddd')).toEqual('1');
        });
        it('dddの戻り値は「001」', function () {
            expect(date.format('ddd')).toEqual('001');
        });
        it('ddの戻り値は「01」', function () {
            expect(date.format('dd')).toEqual('01');
        });
        it('dの戻り値は「1」', function () {
            expect(date.format('d')).toEqual('1');
        });
        it('HHの戻り値は「13」', function () {
            expect(date.format('HH')).toEqual('13');
        });
        it('Hの戻り値は「13」', function () {
            expect(date.format('H')).toEqual('13');
        });
        it('hhの戻り値は「01」', function () {
            expect(date.format('hh')).toEqual('01');
        });
        it('hの戻り値は「1」', function () {
            expect(date.format('h')).toEqual('1');
        });
        it('mmの戻り値は「05」', function () {
            expect(date.format('mm')).toEqual('05');
        });
        it('mの戻り値は「5」', function () {
            expect(date.format('m')).toEqual('5');
        });
        it('ssの戻り値は「05」', function () {
            expect(date.format('ss')).toEqual('08');
        });
        it('sの戻り値は「8」', function () {
            expect(date.format('s')).toEqual('8');
        });
        it('fffの戻り値は「009」', function () {
            expect(date.format('fff')).toEqual('009');
        });
        it('fの戻り値は「9」', function () {
            expect(date.format('f')).toEqual('9');
        });
        it('TTの戻り値は「午後」', function () {
            expect(date.format('TT')).toEqual('午後');
        });
        it('ttの戻り値は「PM」', function () {
            expect(date.format('tt')).toEqual('PM');
        });
        it('wwwの戻り値は「1」', function () {
            expect(date.format('www')).toEqual('1');
        });
        it('wwの戻り値は「00」', function () {
            expect(date.format('ww')).toEqual('00');
        });
        it('wの戻り値は「0」', function () {
            expect(date.format('w')).toEqual('0');
        });
        it('WWの戻り値は「01」', function () {
            expect(date.format('WW')).toEqual('01');
        });
        it('Wの戻り値は「1」', function () {
            expect(date.format('W')).toEqual('1');
        });
        it('DDDの戻り値は「日曜日」', function () {
            expect(date.format('DDD')).toEqual('日曜日');
        });
        it('DDの戻り値は「日」', function () {
            expect(date.format('DD')).toEqual('日');
        });
        it('Dの戻り値は「7」', function () {
            expect(date.format('D')).toEqual('7');
        });
    });
    describe('ロケール「def」:', function () {
        // UTCで時間をセット
        var date = new UltraDate('1989-01-01T09:05:08.009Z');
        // タイムゾーン分のオフセット
        date.addMinutes(date.getTimezoneOffset());
        it('yyyyの戻り値は「1989」', function () {
            expect(date.format('yyyy', false, 'def')).toEqual('1989');
        });
        it('yyの戻り値は「89」', function () {
            expect(date.format('yy', false, 'def')).toEqual('89');
        });
        it('eeeeの戻り値は「0001」', function () {
            expect(date.format('eeee', false, 'def')).toEqual('1989');
        });
        it('eeeの戻り値は「989」', function () {
            expect(date.format('eee', false, 'def')).toEqual('989');
        });
        it('eeの戻り値は「89」', function () {
            expect(date.format('ee', false, 'def')).toEqual('89');
        });
        it('eの戻り値は「1989」', function () {
            expect(date.format('e', false, 'def')).toEqual('1989');
        });
        it('gggの戻り値は「A.D.」', function () {
            expect(date.format('ggg', false, 'def')).toEqual('A.D.');
        });
        it('ggの戻り値は「A」', function () {
            expect(date.format('gg', false, 'def')).toEqual('AD');
        });
        it('gの戻り値は「A」', function () {
            expect(date.format('g', false, 'def')).toEqual('A');
        });
        describe('厳格:', function () {
            it('eeeeの戻り値は「0001」', function () {
                expect(date.format('eeee', true, 'def')).toEqual('1989');
            });
            it('eeeの戻り値は「989」', function () {
                expect(date.format('eee', true, 'def')).toEqual('989');
            });
            it('eeの戻り値は「89」', function () {
                expect(date.format('ee', true, 'def')).toEqual('89');
            });
            it('eの戻り値は「9」', function () {
                expect(date.format('e', true, 'def')).toEqual('1989');
            });
            it('gggの戻り値は「A.D.」', function () {
                expect(date.format('ggg', true, 'def')).toEqual('A.D.');
            });
            it('ggの戻り値は「A」', function () {
                expect(date.format('gg', true, 'def')).toEqual('AD');
            });
            it('gの戻り値は「A」', function () {
                expect(date.format('g', true, 'def')).toEqual('A');
            });
        });
        it('MMMMの戻り値は「January」', function () {
            expect(date.format('MMMM', false, 'def')).toEqual('January');
        });
        it('MMMの戻り値は「Jan」', function () {
            expect(date.format('MMM', false, 'def')).toEqual('Jan');
        });
        it('MMの戻り値は「01」', function () {
            expect(date.format('MM', false, 'def')).toEqual('01');
        });
        it('Mの戻り値は「1」', function () {
            expect(date.format('M', false, 'def')).toEqual('1');
        });
        it('ddddの戻り値は「1」', function () {
            expect(date.format('dddd', false, 'def')).toEqual('1');
        });
        it('dddの戻り値は「001」', function () {
            expect(date.format('ddd', false, 'def')).toEqual('001');
        });
        it('ddの戻り値は「01」', function () {
            expect(date.format('dd', false, 'def')).toEqual('01');
        });
        it('dの戻り値は「1」', function () {
            expect(date.format('d', false, 'def')).toEqual('1');
        });
        it('HHの戻り値は「09」', function () {
            expect(date.format('HH', false, 'def')).toEqual('09');
        });
        it('Hの戻り値は「9」', function () {
            expect(date.format('H', false, 'def')).toEqual('9');
        });
        it('hhの戻り値は「09」', function () {
            expect(date.format('hh', false, 'def')).toEqual('09');
        });
        it('hの戻り値は「9」', function () {
            expect(date.format('h', false, 'def')).toEqual('9');
        });
        it('mmの戻り値は「05」', function () {
            expect(date.format('mm', false, 'def')).toEqual('05');
        });
        it('mの戻り値は「5」', function () {
            expect(date.format('m', false, 'def')).toEqual('5');
        });
        it('ssの戻り値は「05」', function () {
            expect(date.format('ss', false, 'def')).toEqual('08');
        });
        it('sの戻り値は「8」', function () {
            expect(date.format('s', false, 'def')).toEqual('8');
        });
        it('fffの戻り値は「009」', function () {
            expect(date.format('fff', false, 'def')).toEqual('009');
        });
        it('fの戻り値は「9」', function () {
            expect(date.format('f', false, 'def')).toEqual('9');
        });
        it('TTの戻り値は「AM」', function () {
            expect(date.format('TT', false, 'def')).toEqual('AM');
        });
        it('ttの戻り値は「am」', function () {
            expect(date.format('tt', false, 'def')).toEqual('am');
        });
        it('wwwの戻り値は「1」', function () {
            expect(date.format('www', false, 'def')).toEqual('1');
        });
        it('wwの戻り値は「00」', function () {
            expect(date.format('ww', false, 'def')).toEqual('00');
        });
        it('wの戻り値は「0」', function () {
            expect(date.format('w', false, 'def')).toEqual('0');
        });
        it('WWの戻り値は「01」', function () {
            expect(date.format('WW', false, 'def')).toEqual('01');
        });
        it('Wの戻り値は「1」', function () {
            expect(date.format('W', false, 'def')).toEqual('1');
        });
        it('DDDの戻り値は「Sunday」', function () {
            expect(date.format('DDD', false, 'def')).toEqual('Sunday');
        });
        it('DDの戻り値は「Sun」', function () {
            expect(date.format('DD', false, 'def')).toEqual('Sun');
        });
        it('Dの戻り値は「7」', function () {
            expect(date.format('D', false, 'def')).toEqual('7');
        });
        it('フォーマットの引数が文字列でないとき', function () {
            expect(date.format({})).toEqual({});
        });
    });
    describe('ロケール「ja」:', function () {
        it('明治前の確認', function () {
            var date = UltraDate('1867-01-01');
            expect(date.format('gggee', false, 'ja')).toEqual('西暦67');
        });
        it('明治前の確認', function () {
            var date = UltraDate('1867-01-01');
            expect(date.format('gggee', true, 'ja')).toEqual('西暦67');
        });
        it('明治の確認', function () {
            var date = UltraDate('1868-01-01');
            expect(date.format('gggee', false, 'ja')).toEqual('明治01');
        });
        it('明治の確認', function () {
            var date = UltraDate('1868-01-01');
            expect(date.format('gggee', true, 'ja')).toEqual('西暦68');
        });
        it('明治の確認', function () {
            var date = UltraDate('1868-12-30');
            expect(date.format('gggee', true, 'ja')).toEqual('明治01');
        });
        it('大正の確認', function () {
            var date = UltraDate('1912-01-01');
            expect(date.format('gggee', false, 'ja')).toEqual('大正01');
        });
        it('大正の確認', function () {
            var date = UltraDate('1912-01-01');
            expect(date.format('gggee', true, 'ja')).toEqual('明治45');
        });
        it('大正の確認', function () {
            var date = UltraDate('1912-12-30');
            expect(date.format('gggee', true, 'ja')).toEqual('大正01');
        });
        it('昭和の確認', function () {
            var date = UltraDate('1926-01-01');
            expect(date.format('gggee', false, 'ja')).toEqual('昭和01');
        });
        it('昭和の確認', function () {
            var date = UltraDate('1926-01-01');
            expect(date.format('gggee', true, 'ja')).toEqual('大正15');
        });
        it('昭和の確認', function () {
            var date = UltraDate('1926-12-30');
            expect(date.format('gggee', true, 'ja')).toEqual('昭和01');
        });
        it('平成の確認', function () {
            var date = UltraDate('1989-01-01');
            expect(date.format('gggee', false, 'ja')).toEqual('平成01');
        });
        it('平成の確認', function () {
            var date = UltraDate('1989-01-01');
            expect(date.format('gggee', true, 'ja')).toEqual('昭和64');
        });
        it('平成の確認', function () {
            var date = UltraDate('1989-12-30');
            expect(date.format('gggee', true, 'ja')).toEqual('平成01');
        });
        it('令和の確認', function () {
            var date = UltraDate('2019-01-01');
            expect(date.format('gggee', false, 'ja')).toEqual('令和01');
        });
        it('令和の確認', function () {
            var date = UltraDate('2019-01-01');
            expect(date.format('gggee', true, 'ja')).toEqual('平成31');
        });
        it('令和の確認', function () {
            var date = UltraDate('2019-05-01');
            expect(date.format('gggee', true, 'ja')).toEqual('令和01');
        });
    });
    describe('元年', function () {
        describe('元年の確認', function () {
            var date = UltraDate('1989-01-08');
            it('EEEEの戻り値は「元」', function () {
                expect(date.format('EEEE')).toEqual('元');
            });
            it('EEEの戻り値は「元」', function () {
                expect(date.format('EEE')).toEqual('元');
            });
            it('EEの戻り値は「元」', function () {
                expect(date.format('EE')).toEqual('元');
            });
            it('Eの戻り値は「元」', function () {
                expect(date.format('E')).toEqual('元');
            });
        });
        describe('元年以外の確認', function () {
            var date = UltraDate('1988-01-07');
            it('EEEEの戻り値は「0063」', function () {
                expect(date.format('EEEE')).toEqual('0063');
            });
            it('EEEの戻り値は「063」', function () {
                expect(date.format('EEE')).toEqual('063');
            });
            it('EEの戻り値は「63」', function () {
                expect(date.format('EE')).toEqual('63');
            });
            it('Eの戻り値は「63」', function () {
                expect(date.format('E')).toEqual('63');
            });
        });
    });
    describe('春分の確認:', function () {
        it('春分の日', function () {
            var date = UltraDate('1800-03-21');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1827-03-21');
            expect(date.getHoliday('ja')).toEqual('');

            var date = UltraDate('1828-03-20');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1829-03-21');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1830-03-21');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1831-03-21');
            expect(date.getHoliday('ja')).toEqual('');

            var date = UltraDate('1860-03-20');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1861-03-20');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1862-03-21');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1863-03-21');
            expect(date.getHoliday('ja')).toEqual('');

            var date = UltraDate('1892-03-20');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1893-03-20');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1894-03-20');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1895-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');

            var date = UltraDate('1900-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1901-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1902-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1903-03-22');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');

            var date = UltraDate('1924-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1925-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1926-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1927-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');

            var date = UltraDate('1948-03-21');
            expect(date.getHoliday('ja')).toEqual('春季皇霊祭');
            var date = UltraDate('1949-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');

            var date = UltraDate('1960-03-20');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('1961-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('1962-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('1963-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');

            var date = UltraDate('1992-03-20');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('1993-03-20');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('1994-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('1995-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');

            var date = UltraDate('2024-03-20');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('2025-03-20');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('2026-03-20');
            expect(date.getHoliday('ja')).toEqual('春分の日');
            var date = UltraDate('2027-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');

            var date = UltraDate('2037-03-21');
            expect(date.getHoliday('ja')).toEqual('春分の日');

            // 2038年以降はエラーになる（Jasmineの仕様か？）
//            var date = UltraDate('2038-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');

//            var date = UltraDate('2056-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2057-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2058-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2059-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//
//            var date = UltraDate('2092-03-19');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2093-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2094-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2095-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//
//            var date = UltraDate('2100-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2101-03-21');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2102-03-21');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2103-03-21');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//
//            var date = UltraDate('2124-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2125-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2126-03-21');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2127-03-21');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//
//            var date = UltraDate('2156-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2157-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2158-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2159-03-21');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//
//            var date = UltraDate('2188-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2189-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2190-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');
//            var date = UltraDate('2191-03-20');
//            expect(date.getHoliday('ja')).toEqual('春分の日');

            var date = UltraDate('2200-03-20');
            expect(date.getHoliday('ja')).toEqual('');
        });
    });
    describe('秋分の確認:', function () {

        it('春分の日', function () {
            var date = UltraDate('1800-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1801-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1802-09-24');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1803-09-24');
            expect(date.getHoliday('ja')).toEqual('');

            var date = UltraDate('1824-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1825-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1826-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1827-09-24');
            expect(date.getHoliday('ja')).toEqual('');

            var date = UltraDate('1852-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1853-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1854-09-23');
            expect(date.getHoliday('ja')).toEqual('');
            var date = UltraDate('1855-09-23');
            expect(date.getHoliday('ja')).toEqual('');

            var date = UltraDate('1888-09-22');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1889-09-23');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1890-09-23');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1891-09-23');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');

            var date = UltraDate('1900-09-23');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1901-09-24');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1902-09-24');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1902-09-24');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');

            var date = UltraDate('1920-09-23');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1921-09-23');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1922-09-24');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');
            var date = UltraDate('1923-09-24');
            expect(date.getHoliday('ja')).toEqual('秋季皇霊祭');

            var date = UltraDate('1948-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('1949-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('1950-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('1951-09-24');
            expect(date.getHoliday('ja')).toEqual('秋分の日');

            var date = UltraDate('1980-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('1981-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('1982-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('1983-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');

            var date = UltraDate('2012-09-22');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('2013-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('2014-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            var date = UltraDate('2015-09-23');
            expect(date.getHoliday('ja')).toEqual('秋分の日');
            // 2038年以降はエラーになる（Jasmineの仕様か？）
        });
    });
});
