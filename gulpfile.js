var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
	nodemon({
		script: 'src/index.js',
		ext: 'js',
		env: {
			PORT: 3000
		},
		ignore: ['/node_modules/**']
	})
	.on('restart', function() {
		console.log('Restarting');
	});
});