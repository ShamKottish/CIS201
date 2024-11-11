const image = document.getElementById("movingImage");
let angle = 0;
let flipDirection = 1;

function flipLogo() {
    angle += flipDirection * 1; 

    if (angle >= 180 || angle <= 0) {
        flipDirection *= -1;
    }

    image.style.transform = `translate(-50%, -50%) rotateY(${angle}deg)`;
    requestAnimationFrame(flipLogo);
}

flipLogo(); 
