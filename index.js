let count = 3;
let unread = document.querySelectorAll('.unread');
const plural = document.querySelector('.plural');
const countSpan = document.querySelector('.count');
const markAllAsRead = document.querySelector('.mark-all-read');

function removeDots(elem){
    const dot = elem.querySelector('* > .dot');
    dot.remove();
}

function manageCount(count){
    countSpan.textContent = count;
}

unread.forEach(elem => {
    elem.addEventListener('click',()=>{
        elem.classList.remove('unread');
        removeDots(elem);
        count--;
        manageCount(count);
        unread = document.querySelectorAll('.unread')
        if (count == 0) {
            countSpan.style.display = "none";
        }
    })
})

markAllAsRead.addEventListener('click', () => {
    countSpan.textContent = 0;
    unread.forEach(elem => {
        elem.classList.remove('unread');
        removeDots(elem);
        countSpan.style.display = "none";
    })
})

