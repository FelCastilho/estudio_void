let count = 1;
document.getElementById('radio1').checked = true;

let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4 = document.getElementById('slide4');


setInterval(function(){
    nextImage();
    opacity();
    changeOpacity();
}, 8000)

function nextImage(){
    count++
    if(count > 5){
        count = 1;
    }
    
    document.getElementById('radio' + count).checked = true;

}

function opacity(){


    switch(count){
        case 2:
            slide1.style.opacity = 0
            break
        case 3:
            slide1.style.opacity = 100
            slide2.style.opacity = 0  
            break
        case 4:
            slide3.style.opacity = 0
            slide2.style.opacity = 100
            slide1.style.opacity = 100
            break
        case 5:
            slide3.style.opacity = 100
            break
        default:
            slide3.style.opacity = 100
            break;
    }

}

function changeOpacity(){

    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    let radio4 = document.getElementById('radio4');

    radio1.addEventListener('click', () => {
        slide1.style.opacity = 100
    })

    radio2.addEventListener('click', () => {
        slide2.style.opacity = 100
    })

    radio3.addEventListener('click', () => {
        slide3.style.opacity = 100
    })

    radio3.addEventListener('click', () => {
        slide3.style.opacity = 100
    })
}




