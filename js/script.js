const mainImage = document.getElementById('mainImage');


const thumbnails = document.querySelectorAll('.thumbnail');


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', function () {
        // When the mouse is over a thumbnail, change the src of the main image
        mainImage.src = this.src;
    });
});

