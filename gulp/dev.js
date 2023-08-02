const gulp = require('gulp')
const fileInclude = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const server = require('gulp-server-livereload')
const clean = require('gulp-clean')
const fs = require('fs')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const changed = require('gulp-changed')
const webpack = require('webpack-stream')

const plumberConfig = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: 'Error <%= error.message %>',
      sound: false,
    }),
  }
}

gulp.task('clean:dev', (done) => {
  if (fs.existsSync('./build/')) {
    return gulp.src('./build/', { read: false }).pipe(clean())
  } else {
    done()
  }
})

gulp.task('html:dev', () => {
  return gulp
    .src(['./src/html/*.html', '!./src/html/blocks/*.html'])
    .pipe(plumber(plumberConfig('html')))
    .pipe(changed('./build/', { hasChanged: changed.compareContents }))
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest('./build/'))
})

gulp.task('sass:dev', () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(changed('./build/css/'))
    .pipe(plumber(plumberConfig('scss')))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('images:dev', () => {
  return gulp
    .src('./src/img/**/*')
    .pipe(changed('./build/img/**/*'))
    .pipe(gulp.dest('./build/img/'))
})

gulp.task('js:dev', () => {
  return gulp
    .src('./src/js/*.js')
    .pipe(changed('./build/js/'))
    .pipe(plumber(plumberConfig('js')))
    .pipe(webpack(require('./../webpack.config.js')))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('server:dev', () => {
  return gulp.src('./build/').pipe(
    server({
      livereload: true,
      open: true,
    })
  )
})

gulp.task('watch:dev', () => {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass:dev'))
  gulp.watch('./src/**/*.html', gulp.series('html:dev'))
  gulp.watch('./src/img/**/*', gulp.series('images:dev'))
  gulp.watch('./src/js/**/*', gulp.series('js:dev'))
})
