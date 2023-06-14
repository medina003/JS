const openButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('closeModal');

openButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})