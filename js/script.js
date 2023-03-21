// creare un array 

const imgArray = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];


const sliderItems = document.querySelector('.slider-items');
console.log(sliderItems);

for (let i = 0; i < imgArray.length; i++) {
    const currentImg = imgArray[i];
    // console.log(currentImg);

    const slideImg = 
        `<div class="item">
            <img src="${currentImg}" alt="">
        </div>`;
        console.log(slideImg);
       
    sliderItems.innerHTML += slideImg;    
}


//stato iniziale
const items = document.getElementsByClassName("item");
console.log(items)

//prima immagine
let activeStatus = 0;
items[activeStatus].classList.add("active");

//richiamo i due bottoni
const downBtn = document.querySelector(".down");
const upBtn = document.querySelector(".up");


//bottone down
downBtn.addEventListener("click", function(){

    upBtn.classList.remove("hidden")
        //si blocca all'ultima immagine
        if (activeStatus < imgArray.length - 1) {
        // rimuovo active - aumento active - do active al successivo
        items[activeStatus].classList.remove('active');
        activeStatus++;
        items[activeStatus].classList.add('active');
        //nascondo il bottone

        if (activeStatus === imgArray.length - 1) {
            downBtn.classList.add("hidden");
        }
       
}
}) 

//bottone up

upBtn.classList.add("hidden")

upBtn.addEventListener("click", function(){

    downBtn.classList.remove("hidden")
    
    items[activeStatus].classList.remove('active');
    activeStatus--;
    items[activeStatus].classList.add('active');
    
    if (activeStatus === 0) {
        upBtn.classList.add("hidden")
    }
})

// init intervallo
let interval = setInterval(autoPlay, 2000);

function autoPlay (){
    upBtn.classList.remove("hidden")
    //si blocca all'ultima immagine
    if (activeStatus < imgArray.length) {
    // rimuovo active - aumento active - do active al successivo
    items[activeStatus].classList.remove('active');
    activeStatus++;  
   if (activeStatus === imgArray.length) {
    activeStatus = 0;
   }
   items[activeStatus].classList.add('active')
}
}


