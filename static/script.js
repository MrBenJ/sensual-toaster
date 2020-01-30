var toast = document.getElementById('magic');
var body = document.getElementById('mood_lighting');

setTimeout(function() {
  toast.classList.add('sensualize');
}, 0);

var COLORS = [
  'dodgerblue',
  'hotpink',
  'yellow',
  '#BFFF00',
  '#cd32cd'
];

var i = 0;
body.style = 'background-color: ' + COLORS[i];
i += 1;

setInterval(function() {
  var body = document.getElementById('mood_lighting');

  body.style = 'background-color: ' + COLORS[i];
  i += 1;
  if (i === COLORS.length) {
    i = 0;
  }
}, 5000);