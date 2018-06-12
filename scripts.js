const input = document.querySelector('.guest_name');
const button = document.querySelector('.add_btn');
const remove = document.querySelector('.remove_btn');
let guestName;

button.addEventListener('click', getName);
remove.addEventListener('click', removeName);

localStorage.setItem('nazwa', 'wartość');
localStorage.getItem('nazwa')
localStorage.removeItem('nazwa');

function getName() {    
    guestName = input.value;
    localStorage.setItem('guestName', guestName);
}

function displayName() {
    if(localStorage.getItem('guestName')) {
    input.value = localStorage.getItem('guestName');
    }
}

function removeName() {
    storage.removeItem(guestName);

}