let currentSlideIndex = 0;
function currentSlide(n) {
        const slides = document.querySelectorAll('.slide');
        const buttons = document.querySelectorAll('.circle-button');
        const descriptions = document.querySelectorAll('.text-description');
        
        currentSlideIndex = n;
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(${-currentSlideIndex * 100}%)`;

        // Remove active class from all buttons
        document.querySelectorAll('.buttons .circle-button').forEach(button => button.classList.remove('active'));

        // Add active class to current slide's buttons
        slides[currentSlideIndex].querySelectorAll('.circle-button')[currentSlideIndex].classList.add('active');

        // Hide all descriptions
        descriptions.forEach(description => description.style.display = 'none');

        // Show current description
        descriptions[currentSlideIndex].style.display = 'block';
}