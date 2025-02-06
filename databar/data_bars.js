document.addEventListener('DOMContentLoaded', function() {
  const bars = document.querySelectorAll('.bar');
  const measures = document.querySelectorAll('.measure');
  const redrawButtons = document.querySelectorAll('a.redraw');

  bars.forEach(drawElement);
  measures.forEach(drawElement);

  redrawButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      bars.forEach(randomiseElement);
      measures.forEach(randomiseElement);
    });
  });

  function drawElement(elem) {
    let percentage = parseInt(elem.dataset.percentage, 10);
    if (isNaN(percentage)) return;
    percentage = Math.min(100, percentage);
    elem.style.width = percentage + '%';
  }

  function randomiseElement(elem) {
    const width = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    elem.style.width = width + '%';
    elem.dataset.percentage = width;
  }
});
