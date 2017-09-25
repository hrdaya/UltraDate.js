'use strict';

// package.json
const pkg = require('./package.json');

// 設定
const config = {
  src: 'src',
  dist: 'dist',
  txt: 'txt',
  demo: 'demo',
  test: 'test',
  locale: 'locale'
};

// gulp
const gulp = require('gulp');

// karma
const Server = require('karma').Server;

// javascript
const beautify = require('gulp-beautify');
const uglify = require('gulp-uglify');
const stripDebug = require('gulp-strip-debug');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

// 強制停止の防止とデスクトップ通知
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// ファイル削除
const del = require('del');

// タスク実行の順番を保証する
const runSequence = require('run-sequence');

// notifyのメッセージ
const notifyMessage = {
  errorHandler: notify.onError('Error: <%= error.message %>')
};

// build =====================================================================
gulp.task('create', function() {
  // README.md
  gulp.src(`${config.txt}/read.txt`)
    .pipe(plumber(notifyMessage))
    .pipe(replace(/<version>/g, pkg.version))
    .pipe(rename('README.md'))
    .pipe(gulp.dest('./'));

  // JsFiles
  gulp.src(`${config.src}/**/*.js`)
    .pipe(plumber(notifyMessage))
    .pipe(replace(/<version>/g, pkg.version))
    .pipe(replace(/<pkg\.name>/g, pkg.name))
    .pipe(replace(/<pkg\.homepage>/g, pkg.homepage))
    .pipe(replace(/<pkg\.author\.name>/g, pkg.author.name))
    .pipe(replace(/<pkg\.author\.url>/g, pkg.author.url))
    .pipe(replace(/<pkg\.license\.type>/g, pkg.license.type))
    .pipe(replace(/<pkg\.license\.url>/g, pkg.license.url))
    .pipe(beautify({
      indent_size: 2,
      indent_char: ' ',
      eol: '\n',
      end_with_newline: true
    }))
    .pipe(stripDebug())
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest(config.dist))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(config.dist));
});

// karma ========================================================================
gulp.task('karma', function(done) {
  new Server({
    configFile: `${__dirname}/karma.conf.js`,
    singleRun: true,
    browserNoActivityTimeout: 60000
  }, done).start();
});

// remove files ================================================================
gulp.task('clean', function() {
  return del([`${config.dist}/**/*`, `${config.locale}/**/*`]);
});

// タスクグループ ===============================================================
gulp.task('default', function() {
  return runSequence('clean', 'create');
});
gulp.task('build', function() {
  return runSequence('clean', 'create');
});
gulp.task('test', function() {
  return runSequence('create', 'karma');
});
