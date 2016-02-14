const gulp = require('gulp');
const webpack = require('gulp-webpack');

const webpackConfig = {
    output: {
        filename: 'build.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                text: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0']
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

gulp.task('default', ['es6to5']);