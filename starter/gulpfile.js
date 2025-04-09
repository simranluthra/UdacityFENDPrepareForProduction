import gulp from 'gulp';
import gulpShell from 'gulp-shell';
import mocha from 'gulp-mocha';

// Task to build and serve the project using Parcel
gulp.task('parcel-build', gulpShell.task([
  'parcel build index.html --dist-dir dist --public-url ./',
]));

// Task to serve the project using Parcel
gulp.task('parcel-serve', gulpShell.task([
  'parcel serve index.html --open',
]));

// Default task: run the build task and then serve the project
gulp.task('default', gulp.series('parcel-build', 'parcel-serve'));

gulp.task('test', () => {
  return gulp.src('test/shuffle.test.js', { read: false }) 
    .pipe(mocha({ reporter: 'spec' })) 
    .on('error', console.error);
});

gulp.task('cypress', gulpShell.task([
  'npx cypress run'
]));