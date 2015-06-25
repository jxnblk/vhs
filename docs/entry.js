
var React = require('react')
var Root = require('./components/Root.jsx')

//if (typeof document !== 'undefined') {
//  var initialProps = JSON.parse(document.querySelector('#initial-props').innerHTML)
//  console.log('client', initialProps)
//  React.render(React.createElement(Root, initialProps), document)
//}

module.exports = function render(locals, callback) {
  var html = React.renderToString(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}

