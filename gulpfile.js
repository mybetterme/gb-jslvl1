const gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync').create();

const path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        style: 'build/css/',
        img: 'build/images/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/css/*.scss',
        otherCss: 'src/css/*.css'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        otherCss: 'src/css/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};


const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

function htmlBuild() {
    return gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
}
function styleBuild() {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.stream());
}
function jsBuild() {
    return gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

function otherCss() {
    return gulp.src(path.src.otherCss)
        .pipe(gulp.dest(path.build.style))
}


gulp.task('html', htmlBuild);
gulp.task('style', styleBuild);
gulp.task('js', jsBuild);
gulp.task('otherCss', otherCss);

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('build',
    gulp.series(
        'clean',
        gulp.parallel('html', 'js', 'style', 'otherCss')
    )
);

gulp.task('watch', function() {
    browserSync.init(config);
    gulp.watch(path.watch.style, gulp.series('style')).on('change', browserSync.reload);
    gulp.watch(path.watch.js, gulp.series('js')).on('change', browserSync.reload);
    gulp.watch(path.watch.html,  gulp.series('html')).on('change', browserSync.reload);
    gulp.watch(path.watch.otherCss,  gulp.series('otherCss')).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', 'watch'));