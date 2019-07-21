var $ = require('gulp-load-plugins')();
const { dest, src, watch } = require('gulp');
const rename = require('gulp-rename');
const fs = require('fs');


function style(themeName) {
    return src('src/assets/scss/*.scss')
        .pipe($.replace('themes/', 'themes/' + themeName + '.scss'))
        .pipe($.sass({
            outputStyle: 'expanded',
            errLogToConsole: true,
            includePaths: ['node_modules/bootstrap/scss']
        }))
        .pipe(rename(themeName + '.css'))
        .pipe(dest('src/assets/css/'))
       
}

function styles(cb) {
    console.log('CSS has changed');
    const themes = fs.readdirSync('src/assets/scss/themes');
    themes.forEach((theme) => {
        const themeName = theme.split('.scss')[0];
        if (themeName) {
            style(themeName);
        }
    });
    watch('./**/*.scss').on('change', () => {
        styles(cb);
    })
    cb();
}

exports.styles = styles;