"use strict";

describe("format:", function () {
    describe("ロケールなし:", function () {
        // UTCで時間をセット
        var date = new UltraDate("1989-01-01T13:05:08.009Z");
        // タイムゾーン分のオフセット
        date.addMinutes(date.getTimezoneOffset());
        it("yyyyの戻り値は「1989」", function () {
            expect(date.format("yyyy")).toEqual("1989");
        });
        it("yyの戻り値は「89」", function () {
            expect(date.format("yy")).toEqual("89");
        });
        it("eeeeの戻り値は「0001」", function () {
            expect(date.format("eeee")).toEqual("0001");
        });
        it("eeeの戻り値は「001」", function () {
            expect(date.format("eee")).toEqual("001");
        });
        it("eeの戻り値は「01」", function () {
            expect(date.format("ee")).toEqual("01");
        });
        it("eの戻り値は「1」", function () {
            expect(date.format("e")).toEqual("1");
        });
        it("gggの戻り値は「平成」", function () {
            expect(date.format("ggg")).toEqual("平成");
        });
        it("ggの戻り値は「平」", function () {
            expect(date.format("gg")).toEqual("平");
        });
        it("gの戻り値は「H」", function () {
            expect(date.format("g")).toEqual("H");
        });
        describe("厳格:", function () {
            it("eeeeの戻り値は「0064」", function () {
                expect(date.format("eeee", true)).toEqual("0064");
            });
            it("eeeの戻り値は「064」", function () {
                expect(date.format("eee", true)).toEqual("064");
            });
            it("eeの戻り値は「64」", function () {
                expect(date.format("ee", true)).toEqual("64");
            });
            it("eの戻り値は「64」", function () {
                expect(date.format("e", true)).toEqual("64");
            });
            it("gggの戻り値は「昭和」", function () {
                expect(date.format("ggg", true)).toEqual("昭和");
            });
            it("ggの戻り値は「昭」", function () {
                expect(date.format("gg", true)).toEqual("昭");
            });
            it("gの戻り値は「S」", function () {
                expect(date.format("g", true)).toEqual("S");
            });
        });
        it("MMMMの戻り値は「睦月」", function () {
            expect(date.format("MMMM")).toEqual("睦月");
        });
        it("MMMの戻り値は「睦月」", function () {
            expect(date.format("MMM")).toEqual("睦月");
        });
        it("MMの戻り値は「01」", function () {
            expect(date.format("MM")).toEqual("01");
        });
        it("Mの戻り値は「1」", function () {
            expect(date.format("M")).toEqual("1");
        });
        it("ddddの戻り値は「1」", function () {
            expect(date.format("dddd")).toEqual("1");
        });
        it("dddの戻り値は「001」", function () {
            expect(date.format("ddd")).toEqual("001");
        });
        it("ddの戻り値は「01」", function () {
            expect(date.format("dd")).toEqual("01");
        });
        it("dの戻り値は「1」", function () {
            expect(date.format("d")).toEqual("1");
        });
        it("HHの戻り値は「13」", function () {
            expect(date.format("HH")).toEqual("13");
        });
        it("Hの戻り値は「13」", function () {
            expect(date.format("H")).toEqual("13");
        });
        it("hhの戻り値は「01」", function () {
            expect(date.format("hh")).toEqual("01");
        });
        it("hの戻り値は「1」", function () {
            expect(date.format("h")).toEqual("1");
        });
        it("mmの戻り値は「05」", function () {
            expect(date.format("mm")).toEqual("05");
        });
        it("mの戻り値は「5」", function () {
            expect(date.format("m")).toEqual("5");
        });
        it("ssの戻り値は「05」", function () {
            expect(date.format("ss")).toEqual("08");
        });
        it("sの戻り値は「8」", function () {
            expect(date.format("s")).toEqual("8");
        });
        it("fffの戻り値は「009」", function () {
            expect(date.format("fff")).toEqual("009");
        });
        it("fの戻り値は「9」", function () {
            expect(date.format("f")).toEqual("9");
        });
        it("TTの戻り値は「午後」", function () {
            expect(date.format("TT")).toEqual("午後");
        });
        it("ttの戻り値は「PM」", function () {
            expect(date.format("tt")).toEqual("PM");
        });
        it("wwwの戻り値は「1」", function () {
            expect(date.format("www")).toEqual("1");
        });
        it("wwの戻り値は「00」", function () {
            expect(date.format("ww")).toEqual("00");
        });
        it("wの戻り値は「0」", function () {
            expect(date.format("w")).toEqual("0");
        });
        it("WWの戻り値は「02」", function () {
            expect(date.format("WW")).toEqual("02");
        });
        it("Wの戻り値は「2」", function () {
            expect(date.format("W")).toEqual("2");
        });
        it("DDDの戻り値は「日曜日」", function () {
            expect(date.format("DDD")).toEqual("日曜日");
        });
        it("DDの戻り値は「日」", function () {
            expect(date.format("DD")).toEqual("日");
        });
        it("Dの戻り値は「7」", function () {
            expect(date.format("D")).toEqual("7");
        });
    });
    describe("ロケール「def」:", function () {
        // UTCで時間をセット
        var date = new UltraDate("1989-01-01T09:05:08.009Z");
        // タイムゾーン分のオフセット
        date.addMinutes(date.getTimezoneOffset());
        it("yyyyの戻り値は「1989」", function () {
            expect(date.format("yyyy", false, "def")).toEqual("1989");
        });
        it("yyの戻り値は「89」", function () {
            expect(date.format("yy", false, "def")).toEqual("89");
        });
        it("eeeeの戻り値は「0001」", function () {
            expect(date.format("eeee", false, "def")).toEqual("1989");
        });
        it("eeeの戻り値は「989」", function () {
            expect(date.format("eee", false, "def")).toEqual("989");
        });
        it("eeの戻り値は「89」", function () {
            expect(date.format("ee", false, "def")).toEqual("89");
        });
        it("eの戻り値は「1989」", function () {
            expect(date.format("e", false, "def")).toEqual("1989");
        });
        it("gggの戻り値は「A.D.」", function () {
            expect(date.format("ggg", false, "def")).toEqual("A.D.");
        });
        it("ggの戻り値は「A」", function () {
            expect(date.format("gg", false, "def")).toEqual("AD");
        });
        it("gの戻り値は「A」", function () {
            expect(date.format("g", false, "def")).toEqual("A");
        });
        describe("厳格:", function () {
            it("eeeeの戻り値は「0001」", function () {
                expect(date.format("eeee", true, "def")).toEqual("1989");
            });
            it("eeeの戻り値は「989」", function () {
                expect(date.format("eee", true, "def")).toEqual("989");
            });
            it("eeの戻り値は「89」", function () {
                expect(date.format("ee", true, "def")).toEqual("89");
            });
            it("eの戻り値は「9」", function () {
                expect(date.format("e", true, "def")).toEqual("1989");
            });
            it("gggの戻り値は「A.D.」", function () {
                expect(date.format("ggg", true, "def")).toEqual("A.D.");
            });
            it("ggの戻り値は「A」", function () {
                expect(date.format("gg", true, "def")).toEqual("AD");
            });
            it("gの戻り値は「A」", function () {
                expect(date.format("g", true, "def")).toEqual("A");
            });
        });
        it("MMMMの戻り値は「January」", function () {
            expect(date.format("MMMM", false, "def")).toEqual("January");
        });
        it("MMMの戻り値は「Jan」", function () {
            expect(date.format("MMM", false, "def")).toEqual("Jan");
        });
        it("MMの戻り値は「01」", function () {
            expect(date.format("MM", false, "def")).toEqual("01");
        });
        it("Mの戻り値は「1」", function () {
            expect(date.format("M", false, "def")).toEqual("1");
        });
        it("ddddの戻り値は「1」", function () {
            expect(date.format("dddd", false, "def")).toEqual("1");
        });
        it("dddの戻り値は「001」", function () {
            expect(date.format("ddd", false, "def")).toEqual("001");
        });
        it("ddの戻り値は「01」", function () {
            expect(date.format("dd", false, "def")).toEqual("01");
        });
        it("dの戻り値は「1」", function () {
            expect(date.format("d", false, "def")).toEqual("1");
        });
        it("HHの戻り値は「09」", function () {
            expect(date.format("HH", false, "def")).toEqual("09");
        });
        it("Hの戻り値は「9」", function () {
            expect(date.format("H", false, "def")).toEqual("9");
        });
        it("hhの戻り値は「09」", function () {
            expect(date.format("hh", false, "def")).toEqual("09");
        });
        it("hの戻り値は「9」", function () {
            expect(date.format("h", false, "def")).toEqual("9");
        });
        it("mmの戻り値は「05」", function () {
            expect(date.format("mm", false, "def")).toEqual("05");
        });
        it("mの戻り値は「5」", function () {
            expect(date.format("m", false, "def")).toEqual("5");
        });
        it("ssの戻り値は「05」", function () {
            expect(date.format("ss", false, "def")).toEqual("08");
        });
        it("sの戻り値は「8」", function () {
            expect(date.format("s", false, "def")).toEqual("8");
        });
        it("fffの戻り値は「009」", function () {
            expect(date.format("fff", false, "def")).toEqual("009");
        });
        it("fの戻り値は「9」", function () {
            expect(date.format("f", false, "def")).toEqual("9");
        });
        it("TTの戻り値は「AM」", function () {
            expect(date.format("TT", false, "def")).toEqual("AM");
        });
        it("ttの戻り値は「am」", function () {
            expect(date.format("tt", false, "def")).toEqual("am");
        });
        it("wwwの戻り値は「1」", function () {
            expect(date.format("www", false, "def")).toEqual("1");
        });
        it("wwの戻り値は「00」", function () {
            expect(date.format("ww", false, "def")).toEqual("00");
        });
        it("wの戻り値は「0」", function () {
            expect(date.format("w", false, "def")).toEqual("0");
        });
        it("WWの戻り値は「02」", function () {
            expect(date.format("WW", false, "def")).toEqual("02");
        });
        it("Wの戻り値は「2」", function () {
            expect(date.format("W", false, "def")).toEqual("2");
        });
        it("DDDの戻り値は「Sunday」", function () {
            expect(date.format("DDD", false, "def")).toEqual("Sunday");
        });
        it("DDの戻り値は「Sun」", function () {
            expect(date.format("DD", false, "def")).toEqual("Sun");
        });
        it("Dの戻り値は「7」", function () {
            expect(date.format("D", false, "def")).toEqual("7");
        });
    });
});