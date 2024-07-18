document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            box.style.transform = 'scale(1.1)';
        });

        box.addEventListener('mouseleave', function() {
            box.style.transform = 'scale(1)';
        });
    });
});
