var gulp = require('gulp'),
  Server = require('karma').Server;
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
