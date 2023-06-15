const list = document.querySelectorAll('.bookList li');
function setSelected(event) {
    const selected = document.querySelector('.bookList li.selected');
    if(selected) {
        selected.classList.remove('selected');
    }
    event.currentTarget.classList.add('selected');
}

list.forEach(function(li) {
    li.onclick = setSelected;
})