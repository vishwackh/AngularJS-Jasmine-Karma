var gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  sass = require('gulp-ruby-sass'),
  cleanCSS = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),  
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	ngAnnotate = require('gulp-ng-annotate'),
  jshint = require('gulp-jshint'),
  inject = require('gulp-inject'),
  webserver = require('gulp-webserver'),
  banner = require('gulp-banner'),
  Server = require('karma').Server,
  gutil = require('gulp-util'),
  pkg = require('./package.json');

var comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +    
    ' *\n' +
    ' * Copyright 2016, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n'; 

gulp.task('lint', function() {
  return gulp.src(['./app/**/*.js','!./app/js/vendor.min.js','!./dist/vendor.min.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('inject', function(){
  return gulp.src('./app/index.html')
    // inject the css files
    .pipe(inject(gulp.src('./app/**/*.css', {read:false}), {relative:true}))
    // inject the js files
    .pipe(inject(gulp.src(['./app/js/vendor.min.js','./app/*.js','./app/modules/**/*js'], {read: false}), {relative:true}))
    .pipe(gulp.dest('./app'));
});

gulp.task('injectbuild', function(){
  return gulp.src('./app/index.html')
    .pipe(inject(gulp.src(['./dist/vendor.min.css','./dist/app.min.css'], {read:false}),{ignorePath: 'dist'}))
    .pipe(inject(gulp.src(['./dist/vendor.min.js','./dist/app.min.js'], {read: false}), {ignorePath: 'dist'}))
    .pipe(gulp.dest('./dist'));
});


gulp.task('bowercss', function() {
    gulp.src([
		'bower_components/bootstrap/dist/css/bootstrap.css'
  	])
  	.pipe(concat('vendor.min.css'))   
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('bowerJS', function() {
  gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js'
  ])
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())   
    .pipe(gulp.dest('app/js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('appCSS',function(){
 sass('styles/*.scss')
 .on('error', sass.logError)
 .pipe(concat('app.min.css'))
 .pipe(gutil.env.type === 'prod' ? cleanCSS() : gutil.noop())
 .pipe(gulp.dest('app/css'))  
 .pipe(gulp.dest('dist'));
});



gulp.task('appJS', function(){
	gulp.src([
		'app/**/*.js',
	])
	.pipe(ngAnnotate())
	.pipe(concat('app.min.js'))
  .pipe(gutil.env.type === 'prod' ? uglify() : gutil.noop())
  .pipe(gutil.env.type === 'prod' ? banner(comment, {pkg: pkg}) : gutil.noop())  
	.pipe(gulp.dest('dist'));
});

gulp.task('appHTML', function(){
	gulp.src([
		'app/**/*.html'
	])
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'));
});

gulp.task('imagemin',function(){
    gulp.src('./app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('copy', function (){
    gulp.src('bower_components/bootstrap/dist/fonts/*')
       .pipe(gulp.dest('app/fonts'))
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch',function(){
    gulp.watch('app/**/*.js',['appJS','lint']);
    gulp.watch('styles/*.scss',['appCSS']);
});


gulp.task('default', ['lint','bowerJS','bowercss', 'appCSS','watch','copy','inject','serve']);

gulp.task('build', ['lint','bowerJS', 'bowercss', 'appCSS', 'appJS', 'copy','imagemin','injectbuild','appHTML','run']);

gulp.task('run', function() {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port:9000
    }));
});

gulp.task('serve', function() {
  gulp.src('./app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port:8000
    }));
});

// gulp --type=prod

/**
 * Run test once and exit
 */
gulp.task('gtest', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('gtest:watch', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

function runKarma(done, singleRun) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: singleRun || false
    }, done).start();
}
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    runKarma(done, true);
});
/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('dev-test', runKarma);
