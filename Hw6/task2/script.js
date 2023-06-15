const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
open.addEventListener('click', function() {
    modal.style.display = 'block';
});
close.addEventListener('click', function() {
    modal.style.display = 'none';
});
