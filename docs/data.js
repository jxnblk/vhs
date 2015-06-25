
var pkg = require('../package.json')
var fs = require('fs')
var path = require('path')
var marked = require('marked')
var hljs = require('highlight.js')
var kebabCase = require('lodash').kebabCase

var renderer = new marked.Renderer()
renderer.code = function(code, lang) {
  var result
  if (lang && lang.match(/^html/)) {
    result = [
      '<div class="border rounded">',
        '<div class="border-bottom">',
          code,
          '<div class="right-align">',
            '<button class="js-replay-button h6 caps compact btn">',
              'Replay',
            '</button>',
          '</div>',
        '</div>',
        '<pre class="m0 p2 no-border">',
          hljs.highlight(lang, code).value,
        '</pre>',
      '</div>'
    ].join('')
  } else {
    result = [
      '<pre>',
        hljs.highlightAuto(code, [lang]).value,
      '</pre>'
    ].join('')
  }
  return result
}

renderer.heading = function (text, level) {
  var name = kebabCase(text)
  var result
  if (level < 4) {
    result =
      '<h' + level + ' id="' + name + '">'+
      '<a href="#' + name + '">'+ text + '</a>'+
      '</h' + level + '>'
  } else {
    result = '<h' + level + '>' + text + '</h' + level + '>'
  }
  return result
}

var readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8')
var body = marked(readme, { renderer: renderer })

module.exports = {
  title: pkg.name,
  href: '/vhs',
  description: pkg.description,
  author: pkg.author,
  links: [
    { href: '//github.com/jxnblk/vhs/archive/master.zip', text: 'Download' },
    { href: '//github.com/jxnblk/vhs', text: 'GitHub' },
    { href: '//npmjs.com/package/vhs', text: 'npm' },
  ],
  body: body
}

