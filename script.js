// Smooth Scroll to Section
document.querySelectorAll('.scroll-down-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        document.querySelector('.benefit-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize Testimonial Slider (Simple Slider for Demo)
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials[currentIndex].style.opacity = 0;
    testimonials[currentIndex].style.transform = 'translateX(-20px)';
    currentIndex = (currentIndex + 1) % totalTestimonials;
    testimonials[currentIndex].style.opacity = 1;
    testimonials[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextTestimonial, 5000);
