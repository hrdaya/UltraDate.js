# UltraDate.js
[![GitHub release](https://img.shields.io/badge/release-v1.6.0-blue.svg?style=flat)](https://github.com/hrdaya/UltraDate.js/releases)
[![GitHub licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)](https://github.com/hrdaya/UltraDate.js/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/hrdaya/UltraDate.js.svg?branch=master&style=flat)](https://travis-ci.org/hrdaya/UltraDate.js)
[![devDependency Status](https://david-dm.org/hrdaya/UltraDate.js/dev-status.svg)](https://david-dm.org/hrdaya/UltraDate.js#info=devDependencies)

UltraDate.jsはJavaScriptの「Dateオブジェクト」の上位互換オブジェクトです。
  「Date.prototype」をマージしているので「Date」としているところを「UltraDate」と置き換えるだけ！

## 特徴

- 「UltraDate.js」ファイル読み込み時に「Date.prototype」をマージするので 「Date.prototype」を拡張する他のライブラリのメソッドも利用可能です
- 「Date」を「UltraDate」に書き換えるだけで現在のプロジェクトにすぐ適用できます （下記注意事項もご参照ください）
- format関数で日付のフォーマットを行うことができます
- add○○関数で増減したい日数や、○○時間後等を設定することができます
- set○○関数で翌月末や第3月曜日といったこれまで計算してセットしていた日付を簡単に設定できます
- get○○関数で翌月末や第3月曜日といったこれまで計算してセットしていた日付を簡単に取得できます
- diff○○関数引数に指定した日付まで後○○日といった日付の差分を取得することができます
- is○○関数引数に指定した日付より後かどうかやオブジェクトが祝日かどうか等を判定できます
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

## 使用方法

[ドキュメント](http://hrdaya.github.io/UltraDate.js/)をご参照ください

## ライセンス

[MIT License](https://github.com/hrdaya/UltraDate.js/blob/master/LICENSE)