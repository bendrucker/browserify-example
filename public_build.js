var browserify = require('browserify'),
    fs = require('fs');

process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;

browserify()
    .add('./public/vendor.js')
    .require(require.resolve('angular'), { expose: 'angular' })
    .bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(fs.createWriteStream('./public/vendor.bundle.js'))
;

browserify({fullPaths: false})
    .add('./public/example.js')
    .exclude('angular')
    .bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(fs.createWriteStream('./public/example.bundle.js'));