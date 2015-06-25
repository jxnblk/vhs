
var demos = document.querySelectorAll('.js-demo')
var buttons = document.querySelectorAll('.js-replay-button')

function hideShow(el) {
  var height = el.offsetHeight
  var className = el.className
  console.log(height)
  el.style.minHeight = height + 'px'
  el.className = ''
  el.timeout = window.setTimeout(function() {
    el.className = className
    window.clearTimeout(el.timeout)
  }, 10)
}

function replay() {
  console.log('replay')
  for (var i = 0; i < demos.length; i++) {
    console.log(demos[i])
    hideShow(demos[i])
  }
}

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i]
  button.addEventListener('click', replay)
}

