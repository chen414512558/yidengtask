'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('builddev', ['buildprod'], ()=>{
    return watch('./src/nodeuii/**/*.js', {
        ignoreInitial: false
    }, () => {
        gulp.src('./src/nodeuii/**/*.js')
            .pipe(babel({
                babelrc: false,
                "plugins": [
                    "transform-es2015-modules-commonjs"
                ]
            }))
            .pipe(gulp.dest('./build/'))
    })
});

gulp.task('buildprod', ()=>{
    return gulp.src('./src/nodeuii/**/*.js')
        .pipe(babel({
            babelrc: false,
            "plugins": [
                "transform-es2015-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', [process.env.NODE_ENV === 'production' ? 'buildprod' : 'builddev']);