
let img =['image1.JPG', 'image2.JPG', 'image3.JPG','image4.JPG'];
let picSpace =document.querySelector('#picture');

let si1 = document.querySelector('#little1').addEventListener('click', changeImage)

function changeImage(){
   picSpace.className = 'image1';
}

let si2 = document.querySelector('#little2').addEventListener('click', changeImageTwo)

function changeImageTwo(){
   picSpace.className = 'image2';
}

let si3 = document.querySelector('#little3').addEventListener('click', changeImageThree)

function changeImageThree(){
   picSpace.className = 'image3';
}

let si4 = document.querySelector('#little4').addEventListener('click',changeImageFour)
function changeImageFour(){
   picSpace.className = 'image4';
}


let amountNo = document.getElementById('amount');
let count = 0;
let plusButton = document.querySelector('.plus').addEventListener('click', addUp);

function addUp(){
   count += 1;
   amountNo.innerHTML = count;
   figure.innerHTML = count;
}

let minusButton = document.querySelector('.minus').addEventListener('click', subtract);
function subtract(){
   count -= 1;
   amountNo.innerHTML = count;
   figure.innerHTML = count;
}

let figure = document.getElementById ('figure')
let cartButton = document.querySelector('.add').addEventListener('click', addToCart);

function addToCart(){
     figure.className = 'figure';
}