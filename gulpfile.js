const gulp = require('gulp');
const gulpConcat = require('gulp-concat');
const gulpSass = require('gulp-sass');

const HTMLS = ["client/index.html"];
const STYLES = [
  "node_modules/normalize.css/normalize.css",
  "client/index.css"
  // include all other css & scss files in here
];
const STYLE = "index.css";
const DESTINATION = "ui/";

gulp.task("styles", function() {
  return gulp.src(STYLES)
  .pipe(gulpConcat(STYLE))
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(gulp.dest(DESTINATION))
});

gulp.task("htmls", function() {
  return gulp.src(HTMLS)
  .pipe(gulp.dest(DESTINATION))
});

gulp.task('default', ["styles", "htmls"]);