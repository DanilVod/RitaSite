module.exports = function () {
 $.gulp.task('sass', function () {
     return $.gulp.src('src/static/scss/main.scss')
         .pipe($.gp.sourcemaps.init())
         .pipe($.gp.sass({
             'include css':true
         }))
         .pipe($.gp.autoprefixer({
             browsers: ['last 10 versions']
         }))
         .pipe($.gp.csso())
         .pipe($.gp.sourcemaps.write())
         .pipe($.gulp.dest('build/static/css/'))
         .pipe($.bs.reload({
             stream: true
         }));
 });
}