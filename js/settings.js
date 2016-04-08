var fs = require('fs');

var contents = fs.readFileSync('~/.console/config.yml', 'utf8');

document.write(contents);
