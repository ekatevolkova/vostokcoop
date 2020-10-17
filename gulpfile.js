const gulp = require('gulp')
const browserSync = require('browser-sync').create()
var imagemin = require("gulp-imagemin")

// css
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var sourcemaps = require("gulp-sourcemaps");

gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
})

gulp.task("images", function () {
    return gulp.src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
})

gulp.task("js", function () {
    return gulp.src("src/js/*")
        
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream())
})

gulp.task("css", function () {
    return gulp.src("src/css/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
        cleanCss({
            compatibility: 'ie8'
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
})



gulp.task("fonts", function () {
    return gulp.src("src/fonts/*")

    .pipe(gulp.dest("dist/fonts"))
    .pipe(browserSync.stream())
})
// Watches files for changes
gulp.task("watch", function () {
    // While "watch"ing files - loads live server with website preview coming from "dist" folder
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })
    // If any ".html" file is updated then reruns gulp html task to move files to dist folder and also updates live server
    gulp.watch("src/*.html", gulp.series("html")).on("change", browserSync.reload)
     // If any ".php" file is updated then reruns gulp html task to move files to dist folder and also updates live server
    // If any "img" file is updated then reruns gulp html task to move files to dist folder and also updates live server
    gulp.watch("src/img/*", gulp.series("images")).on("change", browserSync.reload)
        // If any ".css" file is updated then reruns gulp html task to move files to dist folder and also updates live server
    gulp.watch("src/css/*", gulp.series("css")).on("change", browserSync.reload)
    // If js folder is updated then reruns gulp js task and move files to dist folder
    gulp.watch("src/js/*", gulp.series("js"))

    gulp.watch("src/fonts/*", gulp.series("fonts"))
})

// Runs all the following tasks on "gulp" command
const build = gulp.series(["html", "images", "css", "js", "fonts", "watch"])
gulp.task('default', build)