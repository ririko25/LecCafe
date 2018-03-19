const gulp = require("gulp")

gulp.task("hello", () => {
    console.log("hello world")
})

gulp.task("images", () => {
    gulp.src("src/images/hoge.png")
        .pipe(gulp.dest("dist/images/"))
})

const scss = require("gulp-sass")

gulp.task("scss", () => {
    gulp.src("./src/sass/**/*.scss")
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest("./dist/css"))
})


//ファイル変更の監視

gulp.task('watch', function () {
    gulp.watch('./src/scss/*.scss', ["scss"]);
})
