# UltraDate.js
[![GitHub release](https://img.shields.io/badge/release-v2.3.0-blue.svg?style=flat)](https://github.com/hrdaya/UltraDate.js/releases)
[![GitHub licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)](https://github.com/hrdaya/UltraDate.js/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/hrdaya/UltraDate.js.svg?branch=master&style=flat)](https://travis-ci.org/hrdaya/UltraDate.js)
[![Coverage Status](https://coveralls.io/repos/hrdaya/UltraDate.js/badge.svg)](https://coveralls.io/r/hrdaya/UltraDate.js)
[![devDependency Status](https://david-dm.org/hrdaya/UltraDate.js/dev-status.svg)](https://david-dm.org/hrdaya/UltraDate.js#info=devDependencies)

UltraDate.jsはJavaScriptの「Dateオブジェクト」の上位互換オブジェクトです。
  「Date.prototype」をマージしているので「Date」としているところを「UltraDate」と置き換えるだけ！

 - バグ等ありましたら[issue](https://github.com/hrdaya/UltraDate.js/issues)を上げていただけると助かります :smiley:

## 特徴

- 「UltraDate.js」ファイル読み込み時に「Date.prototype」をマージするので 「Date.prototype」を拡張する他のライブラリのメソッドも利用可能です
- 「Date」を「UltraDate」に書き換えるだけで現在のプロジェクトにすぐ適用できます （下記注意事項もご参照ください）
- 「UltraDate.ja.js」を一緒に読み込むことで和暦でのフォーマットや日本の祝祭日を利用できます
- 独自の休み一覧等を複数追加でき、引数のロケール変えることで種類ごとに切り替えて使用できます
- 独自の日付フォーマットを複数追加でき、引数のロケールを変えることで種類ごとに切り替えて使用できます

## 注意事項

> (Object.prototype.toString.call(オブジェクト) === "[object Date]")等で
> Dateオブジェクトかどうかの確認を行っている場合は下記の置き換えを行ってください
>  - (オブジェクト instanceof UltraDate)

　

> 「UltraDate.prototype」と「Date.prototype」に同じ名前のメソッドがある場合は
> 「Date.prototype」のものが使用されますのでご注意ください
> ※「UltraDate.prototype.constructor」は上書きされません

### バージョン2系のバージョン1系からの変更点

廃止関数

 - UltraDate.prototype.isToday()
 - UltraDate.prototype.isTomorrow()
 - UltraDate.prototype.isYesterday()
 - UltraDate.prototype.isNDateToThat()

機能の変更

 - UltraDate.prototype.isLeapYear(year)の引数yearの廃止
 - UltraDate.prototype.getHolidays()→UltraDate.getHolidays()

名前の変更

 - UltraDate.prototype.setEndDate()→UltraDate.prototype.setLastDate()
 - UltraDate.prototype.getEndDate()→UltraDate.prototype.getLastDate()

## 使用方法

[ドキュメント](http://hrdaya.github.io/UltraDate.js/)をご参照ください

## 追加メソッド一覧

| メソッド | 簡単な説明 |
|:-----------|:------------|
| UltraDate.getDefaultFormat() | 祝祭日一覧のキーで使用する日付フォーマットを返します |
| UltraDate.getDuplicate() | Date.prototypeで上書きされたメソッドの配列を取得します |
| UltraDate.setFormatOption() | 「format()」で使用する元号や月名、曜日名等をセットします |
| UltraDate.setHolidayOption() | 祝祭日一覧を取得する関数をセットします |
| UltraDate.setDefaultLocale() | デフォルトで使用されるロケールをセットします |
| UltraDate.getISOLastWeekNum() | ISO形式の最終週番号を取得します |
| UltraDate.getUSLastWeekNum() | US形式の最終週番号を取得します |
| UltraDate.getHolidays() | 祝祭日一覧のオブジェクトを取得します(v2.0.0で追加) |
| copy() | UltraDateオブジェクトのコピーを返します |
| format() | 引数「format」で指定されたフォーマットで文字列を返します |
| addYear() | 年の増減を行います |
| addMonth() | 月の増減を行います |
| addDate() | 日の増減を行います |
| addHours() | 時の増減を行います |
| addMinutes() | 分の増減を行います |
| addSeconds() | 秒の増減を行います |
| addMilliseconds() | ミリ秒の増減を行います |
| setRealMonth() | 実際の月で値をセットできます |
| setDayCountsInMonth() | 第3土曜日みたいに第「count」「day」曜日に日付をセットします |
| setISOWeekDay() | ISO形式の週番号とJs形式の曜日番号で日付をセットします |
| setUSWeekDay() | US形式の週番号とJs形式の曜日番号で日付をセットします |
| setFirstDate() | 引数「num」の値分の月をオフセットした月の1日に日付をセットします |
| ~~setEndDate()~~ | ~~引数「num」の値分の月をオフセットした月の末日に日付をセットします~~(ｖ2.0.0で名前の変更) |
| setLastDate() | 引数「num」の値分の月をオフセットした月の末日に日付をセットします |
| setBeforeWeekday() | 日付を引数「option」でしたものの前の平日にセットします |
| setAfterWeekday() | 日付を引数「option」でしたものの後の平日にセットします |
| setOrdinalDate() | 年間通算日で日付をセットします |
| setRoundingTime() | 引数で指定した分単位で丸めた時間にセットします |
| clearTime() | 現在のUltraDateオブジェクトの時間を「00:00:00.000」にします |
| getRealMonth() | 実際の月の数字が返されます |
| getDayCountsInMonth() | 曜日がその月の何回目かを取得します |
| getISOWeekWithYear() | ISO形式の週番号、年を取得します |
| getISOWeek() | ISO形式の週番号を取得します |
| getUSWeek() | US形式の週番号を取得します |
| getISODay() | ISO形式の曜日番号を取得します |
| getOrdinalDate() | 年間通算日を取得します |
| ~~getEndDate()~~ | ~~引数「num」でオフセットした月の月末の日付を取得します~~(ｖ2.0.0で名前の変更) |
| getLastDate() | 引数「num」でオフセットした月の月末の日付を取得します |
| ~~getHolidays()~~ | ~~祝祭日一覧のオブジェクトを取得します~~(ｖ2.0.0でUltraDateのメソッドに変更) |
| getHoliday() | 祝祭日名を取得します |
| diff() | 差分を日、時、分、秒、ミリ秒に変換して返します |
| diffMonth() | 差分を月単位で取得します |
| diffDate() | 差分を日単位で取得します |
| isLeapYear() | うるう年かどうかの判定 |
| isDayCountsInMonth() | 現在の月のcount回目のday曜日かどうかの判定（例：第３月曜日） |
| isISOWeekDay() | ISO形式で「week」週の「day」曜日かどうかの判定 |
| isUSWeekDay() | US形式で「week」週の「day」曜日かどうかの判定 |
| isISOWeek() | ISO形式で「week」週の日かどうかの判定 |
| isUSWeek() | US形式で「week」週の日かどうかの判定 |
| isSameDate() | 引数「date」と同じ日かどうかの判定 |
| isBeforeDate() | 日付が引数「date」より前かどうかの判定 |
| isAfterDate() | 日付が引数「date」より後かどうかの判定 |
| isBetween() | 引数「startDate」以上、引数「endDate」以下かどうかの判定 |
| ~~isToday()~~ | ~~今日の日付かどうかの判定~~(v2.0.0で廃止) |
| ~~isTomorrow()~~ | ~~明日の日付かどうかの判定~~(v2.0.0で廃止) |
| ~~isYesterday()~~ | ~~昨日の日付かどうかの判定~~(v2.0.0で廃止) |
| ~~isNDateToThat()~~ | ~~日付が引数「date」まで引数「num」日かどうかの判定~~(v2.0.0で廃止) |
| isWeekday() | 平日かどうかの判定 |
| isHoliday() | 土日祝日かどうかの判定 |
| isValid() | オブジェクトが正当な日付かどうかの判定 |

## ライセンス

[MIT License](https://github.com/hrdaya/UltraDate.js/blob/master/LICENSE)