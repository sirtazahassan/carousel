// function changePicture(){
//     let clk = document.getElementById('bikepic');
//     clk.src="./images/car.jpg";
// }
// function bikeAgain(){
//     let bik = document.getElementById('bikepic');
//     bik.src="./images/bike.jpg";
// }
// let images = ['./images/bike.jpg','./images/car.jpg','./images/truck.jpg','./images/trailer.jpg']
// let altText=['1','2','3','4']
// let bik = document.getElementById('bikepic');
// let alt = document.getElementById('bikepic').alt;
// // bik.src=images[0];
// function prev(){
//     for(let i = images.length; i =0; i--){
//         console.log(bik.src=images[i])
//         return bik.src=images[i]
//     }
// }
// function next(){
//     for(i = 0; i < images.length; i++){
//         console.log(bik.src=images[i])
//         bik.src=images[i]
//     }
// }
// let images = ['./images/bike.jpg','./images/car.jpg','./images/truck.jpg','./images/trailer.jpg'];
// let altText=['this is a picture of bike','this is a picture of car','this is a picture of truck','this is a picture of trailer'];
// let circleDot=['circle1','circle2','circle3','circle4']
// let defaultDot = document.getElementById('circle1').style.backgroundColor='grey'
// let currentIndex = 0; // Keep track of the current index

// let bik = document.getElementById('bikepic');
// bik.src=images[0];
// function prev() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length; // Ensure the index wraps around
//     bik.src = images[currentIndex];
//     bik.alt = altText[currentIndex]; // Update alt text if needed
//     let dot = document.getElementById(circleDot[currentIndex]);
//     if(!defaultDot){
//         dot.style.backgroundColor='grey';
//     } else {
//         dot.style.backgroundColor='';
//     }
// }

// function next() {
//     currentIndex = (currentIndex + 1) % images.length; // Ensure the index wraps around
//     bik.src = images[currentIndex];
//     bik.alt = altText[currentIndex]; // Update alt text if needed
//     let dot = document.getElementById(circleDot[currentIndex]);
//     dot.style.backgroundColor='grey';
// }


let images = ['./images/bike.jpg', './images/car.jpg', './images/truck.jpg', './images/trailer.jpg'];
let altText = ['This is a picture of bike', 'This is a picture of car', 'This is a picture of truck', 'This is a picture of trailer'];
let circleDot = ['circle1', 'circle2', 'circle3', 'circle4'];
let currentIndex = 0; // Keep track of the current index
let intervalId;

let bik = document.getElementById('bikepic');
let alt = document.getElementById('altText');
bik.src = images[currentIndex]; // default image
bik.alt = altText[currentIndex] // default alt text
alt.innerText = altText[currentIndex]; // display alt text
let defaultDot = document.getElementById(circleDot[currentIndex]);
defaultDot.style.backgroundColor = 'grey'; // default dot bg

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Ensure the index wraps around
    updateImageAndDot();
}

function next() {
    currentIndex = (currentIndex + 1) % images.length; // Ensure the index wraps around
    updateImageAndDot();
}

function updateImageAndDot() {
    bik.src = images[currentIndex];
    bik.alt = altText[currentIndex]; // Update alt text
    alt.innerText = altText[currentIndex]; // Update displayed alt text

    // Reset all dots to default color
    for (let i = 0; i < circleDot.length; i++) {
        let dot = document.getElementById(circleDot[i]);
        dot.style.backgroundColor = '';
    }

    // Set the background color of the active dot to grey
    let activeDot = document.getElementById(circleDot[currentIndex]);
    activeDot.style.backgroundColor = 'grey';
}

function dotClick(current) {
    currentIndex = current;
    updateImageAndDot();
}

function startCarousel() {
    intervalId = setInterval(next, 3000); // Change image every 3 seconds
}

function stopCarousel() {
    clearInterval(intervalId);
}

// Start the carousel when the page loads
startCarousel();

// Stop the carousel when the user interacts with the navigation buttons or dots
document.querySelector('.prev button').addEventListener('click', function() {
    stopCarousel();
});

document.querySelector('.next button').addEventListener('click', function() {
    stopCarousel();
});

document.querySelector('.circle-cont').addEventListener('click', function() {
    stopCarousel();
});

