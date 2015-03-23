
var fs = require('fs');
var path = require('path');
var doctor = require('doctor-mark');
var stats = require('cssstats');
var humanize = require('humanize-plus');
var data = require('../package.json');

var readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
var css = fs.readFileSync(path.join(__dirname, '../css/vhs.css'), 'utf8');

data.template = fs.readFileSync(path.join(__dirname, './template.html'), 'utf8');
data.stylesheets = [
  'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.2.1/bassdock.min.css',
  'css/vhs.css',
  'docs/base.css'
];
data.javascripts = [
  'docs/demo.js'
];
data.base_url = '';
data.title = 'VHS';

data.stats = stats(css);
data.stats.sizeKB = humanize.fileSize(data.stats.size);
data.stats.gzipSizeKB = humanize.fileSize(data.stats.gzipSize);

var html = doctor(readme, data).html();

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

