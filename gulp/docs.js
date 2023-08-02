const gulp = require('gulp')
const fileInclude = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer')
const server = require('gulp-server-livereload')
const clean = require('gulp-clean')
const fs = require('fs')
const groupMedia = require('gulp-group-css-media-queries')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const changed = require('gulp-changed')
const csso = require('gulp-csso')
const htmlclean = require('gulp-htmlclean')
const webp = require('gulp-webp')
const webphtml = require('gulp-webp-html')
const gulpwepbcss = require('gulp-webp-css')
const shorthand = require('gulp-shorthand')

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

gulp.task('clean:docs', (done) => {
  if (fs.existsSync('./docs/')) {
    return gulp.src('./docs/', { read: false }).pipe(clean())
  } else {
    done()
  }
})

gulp.task('html:docs', () => {
  return gulp
    .src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
    .pipe(plumber(plumberConfig('html')))
    .pipe(changed('./docs/'))
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(webphtml())
    .pipe(htmlclean())
    .pipe(gulp.dest('./docs/'))
})

gulp.task('sass:docs', () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(changed('./docs/css/'))
    .pipe(plumber(plumberConfig('scss')))
    .pipe(autoprefixer())
    .pipe(sassGlob())
    .pipe(gulpwepbcss())
    .pipe(sass())
    .pipe(shorthand())
    .pipe(groupMedia())
    .pipe(csso())
    .pipe(gulp.dest('./docs/css/'))
})

gulp.task('images:docs', () => {
  return gulp
    .src('./src/img/**/*')
    .pipe(changed('./docs/img/**/*'))
    .pipe(webp())
    .pipe(gulp.dest('./docs/img/'))
    .pipe(gulp.src('./src/img/**/*'))
    .pipe(changed('./docs/img/**/*'))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest('./docs/img/'))
})

gulp.task('js:docs', () => {
  return gulp
    .src('./src/js/*.js')
    .pipe(changed('./docs/js/'))
    .pipe(plumber(plumberConfig('js')))
    .pipe(babel({}))
    .pipe(webpack(require('./../webpack.config.js')))
    .pipe(gulp.dest('./docs/js'))
})

gulp.task('server:docs', () => {
  return gulp.src('./docs/').pipe(
    server({
      livereload: true,
      open: true,
    })
  )
})
