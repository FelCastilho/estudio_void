const btnOpen = document.getElementById('btn-open');
const btnClose = document.querySelector('closebtn');
const header = document.querySelector('header');

function openNav(){
    document.getElementById('myNav').style.width = '100%';
    btnOpen.style.display = 'none';
    //header.setAttribute('class', 'headerBlur');
}

function closeNav(){
    document.getElementById('myNav').style.width = '0%'
    btnOpen.style.display = 'block';
    //header.setAttribute('class', 'headerNotBlur');
}