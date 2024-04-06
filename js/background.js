document.addEventListener("DOMContentLoaded", function() {
    const imagesFolder = './images/backgrounds/';
    const body = document.querySelector('body');
    const totalImages = 29;

    function changeBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * totalImages) + 1;
        const imageUrl = `${imagesFolder}background${randomIndex}.jpg`;
        body.style.backgroundImage = `url('${imageUrl}')`;
    }

    changeBackgroundImage();

    setInterval(changeBackgroundImage, 1000);
});

