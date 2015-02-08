var browserify = require('browserify'),
    fs = require('fs');

process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;

browserify()
    .require('angular')
    .transform('browserify-shim', {
      global: true
    })
    .bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(fs.createWriteStream('./public/vendor.bundle.js'));

browserify({fullPaths: false})
    .add('./public/example.js')
    .external('angular')
    .bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(fs.createWriteStream('./public/example.bundle.js'));
