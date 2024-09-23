
// Get all category buttons
const categoryButtons = document.querySelectorAll('.cat-icon');

// Add click event to each category button
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {

        event.preventDefault();

        // Get the target category to display
        const targetCategory = button.getAttribute('data-target');

        // Hide all sample sets
        const sampleSets = document.querySelectorAll('.sample-set');
        sampleSets.forEach(set => {
            set.style.display = 'none';
        });

        // Show the selected sample set
        document.getElementById(targetCategory).style.display = 'flex';
    });
});

const customCursor = document.getElementById('animated-cursor');
const categories = document.querySelectorAll('.cat-icon');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});

categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        customCursor.style.display = 'block';
    });

    category.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
    });
});

categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        customCursor.style.display = 'block';
        document.body.style.cursor = 'none'; // Hide cursor when hovering over category
    });

    category.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
        document.body.style.cursor = 'auto'; // Restore cursor when leaving
    });
});

// Select the mask layer and hero banner
const maskLayer = document.querySelector('.mask-layer');
const heroBanner = document.querySelector('.hero-banner');

window.addEventListener('DOMContentLoaded', () => {
    maskLayer.style.clipPath = 'circle(0px at 50% 50%)'; // Shrink the colored layer out
    maskLayer.style.opacity = 0; // Hide the mask layer
});

// Define the radius of the circle
const circleRadius = 150;

// Track mouse movement over the hero banner
heroBanner.addEventListener('mousemove', (e) => {
    const x = e.clientX;  // Track the cursor position
    const y = e.clientY;

    // Update the clip-path to create the circular mask at the cursor's position
    maskLayer.style.clipPath = `circle(${circleRadius}px at ${x}px ${y}px)`;
    maskLayer.style.opacity = 1;
});

// When mouse leaves, just keep the desaturated background visible
heroBanner.addEventListener('mouseleave', () => {
    // Remove the clip-path to stop showing the mask effect but keep the desaturated background
    maskLayer.style.clipPath = `circle(1000px)`
    maskLayer.style.opacity = 0;
});
