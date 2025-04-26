import gulp from 'gulp';
import gulpShell from 'gulp-shell';
import mocha from 'gulp-mocha';

gulp.task('parcel-build', gulpShell.task([
  'npx parcel build index.html --dist-dir dist --public-url ./',
]));

gulp.task('parcel-serve', gulpShell.task([
  'npx parcel serve index.html --open',
]));

gulp.task('test', gulpShell.task([
  'npx mocha test/shuffle.test.js --reporter spec'
]));

gulp.task('cypress', gulpShell.task([
  'npx cypress run'
]));

gulp.task('default', gulp.series('parcel-build', 'parcel-serve', 'test'));



