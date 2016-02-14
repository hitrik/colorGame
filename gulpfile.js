const gulp = require('gulp');
const webpack = require('gulp-webpack');

const webpackConfig = {
    watch: true,
    module: {
        loaders: [
            {
                text: /\.js$/,
                loader: 'babel',
                presets: {
                    query: ['es2015', 'stage-0']
                }
            }
        ]
    }
};

gulp.task('es6to5', () => {
    return gulp.src('./js/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./build'))
});