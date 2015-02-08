var browserify = require('browserify'),
    path = require('path'),
    fs = require('fs');

var exampleBundlePath = path.join(__dirname, 'public', 'example.bundle.js');

browserify({fullPaths: false})
    .add('./public/example.js', {
        insertGlobals: true,
        debug: true
    })
    .transform('browserify-shim')
    //.require(['angular', 'moment'])
    .bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(fs.createWriteStream(exampleBundlePath));

console.log('vendors boundled');