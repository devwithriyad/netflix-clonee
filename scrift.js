console.log('welcome to my website!');


let items = document.querySelectorAll('.extra');

items.forEach(item => {
    item.addEventListener('click', () => {
        let icon = item.querySelector('i');
        icon.classList.toggle('rotate');
    });
});

const secs = document.querySelectorAll('.sec');

secs.forEach(sec => {
    sec.addEventListener('click', () => {
        let text = sec.querySelector('.text22');
        text.classList.toggle('display')
    })
});


const confirms = confirm("Do you want to proceed?");
if (confirms) {
    console.log("User chose to proceed.");
} else {
    console.log("User canceled the action.");
}