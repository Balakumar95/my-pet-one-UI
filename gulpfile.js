var $ =require('gulp-load-plugins')();
const { dest, src } = require('gulp');
const rename = require('gulp-rename');


function style(cb) {
    src('src/assets/scss/*.scss')
        .pipe($.sass({
            outputStyle: 'expanded',
            errLogToConsole: true,
            includePaths: ['node_modules/bootstrap/scss']
        }))
        .pipe(rename('styles.css'))
        .pipe(dest('src/assets/css/'))
    cb()
}
 
exports.style = style