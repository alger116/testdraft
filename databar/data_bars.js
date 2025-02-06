document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.bar').forEach(function(elem) {
    drawBar(elem);
  });
  
  document.querySelectorAll('.measure').forEach(function(elem) {
    drawMeasure(elem);
  });
  
  document.querySelectorAll('a.redraw').forEach(function(elem) {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.bar').forEach(function(elem) {
        randomiseBar(elem);
      });
      document.querySelectorAll('.measure').forEach(function(elem) {
        randomiseMeasure(elem);
      });
    });
  });
  
  function drawBar(bar) {
    var percentage = bar.dataset.percentage;
    if (percentage > 100) {
      percentage = 100;
    }
    bar.style.width = percentage + '%';
  }
  
  function randomiseBar(bar) {
    var width = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    bar.style.width = width + '%';
    bar.dataset.percentage = width;
  }
  
  function drawMeasure(measure) {
    var percentage = measure.dataset.percentage;
    if (percentage > 100) {
      percentage = 100;
    }
    measure.style.width = percentage + '%';
  }
  
  function randomiseMeasure(measure) {
    var width = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    measure.style.width = width + '%';
    measure.dataset.percentage = width;
  }
});
