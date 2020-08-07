function startBackgroundColors() {
  var body = document.getElementById('mood_lighting');
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
}

document.addEventListener('DOMContentLoaded', function() {
  var toast = document.getElementById('magic');

  var startButton = document.getElementById('start');

  startButton.addEventListener('click', function() {

    toast.classList.add('sensualize');
    startButton.classList.add('hidden');
    startBackgroundColors();

    var iframe = document.createElement('iframe');
    iframe.classList.add('music');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = 'https://www.youtube.com/embed/rjlSiASsUIs?autoplay=1';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    document.body.appendChild(iframe);
  });
});
