const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function () {
    // Collapse other boxes
    boxes.forEach(b => {
      if (b !== box) b.classList.remove('expanded');
    });

    // Toggle current box
    box.classList.toggle('expanded');
  });
});
