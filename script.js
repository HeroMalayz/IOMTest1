// JavaScript to handle the scroll-down arrow animation
document.addEventListener("DOMContentLoaded", function() {
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    
    // Add an event listener to scroll to the next section when the arrow is clicked
    scrollArrow.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Functionality for testimonials slider
    const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    // Show the first testimonial
    testimonials[currentTestimonial].style.display = 'block';

    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000);
});
