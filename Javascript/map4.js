document.addEventListener("DOMContentLoaded", function() {

    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const span = document.getElementsByClassName("close")[0];


    const images = document.querySelectorAll('.full-width-map-img');
    

    images.forEach(img => {
        img.style.cursor = 'pointer';
        
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });


        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });


    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
