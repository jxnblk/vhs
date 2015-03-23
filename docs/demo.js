
var demos = document.querySelectorAll('.js-demo');
var replayButton = document.querySelector('.js-replay-button');
var pauseButton = document.querySelector('.js-pause-button');
var loopButton = document.querySelector('.js-loop-button');

var paused = false;
var looping = false;

function hideShow(el) {
  var height = el.offsetHeight;
  var className = el.className;
  console.log(height);
  el.style.minHeight = height + 'px';
  el.className = '';
  el.timeout = window.setTimeout(function() {
    el.className = className;
    window.clearTimeout(el.timeout);
  }, 10);
}

function replay() {
  for (var i = 0; i < demos.length; i++) {
    hideShow(demos[i]);
  }
}

function toggleLoop() {
  looping = !looping;
  for (var i = 0; i < demos.length; i++) {
    var el = demos[i];
    looping ? el.classList.add('vhs-infinite') : el.classList.remove('vhs-infinite');
    looping ? loopButton.innerText = 'Stop' : loopButton.innerText = 'Loop';
  }
}

function togglePause() {
  paused = !paused;
  for (var i = 0; i < demos.length; i++) {
    var el = demos[i];
    paused ? el.classList.add('vhs-paused') : el.classList.remove('vhs-paused');
    paused ? pauseButton.innerText = 'Play' : pauseButton.innerText = 'Pause';
  }
}

replayButton.addEventListener('click', replay);
loopButton.addEventListener('click', toggleLoop);
pauseButton.addEventListener('click', togglePause);

