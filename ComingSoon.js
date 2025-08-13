// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    // Randomize particle color using only provided colors
    const colors = [
        'rgba(75, 83, 79, 0.8)',
        'rgba(54, 54, 54, 0.8)',
        'rgba(75, 83, 79, 0.2)',
        'rgba(54, 54, 54, 0.3)'
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

// Generate particles continuously
setInterval(createParticle, 300);

// Interactive text effects
const comingSoon = document.getElementById('comingSoon');
const description = document.getElementById('description');

// Typewriter effect for description
const originalText = description.textContent;
description.textContent = '';
description.style.opacity = '1';

function typeWriter(text, element, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Start typewriter after 2 seconds
setTimeout(() => {
    typeWriter(originalText, description);
}, 2000);

// Mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    comingSoon.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    description.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
});

// Glitch effect on click
comingSoon.addEventListener('click', () => {
    comingSoon.style.animation = 'none';
    comingSoon.style.transform = 'scale(1.1) skew(2deg)';
    comingSoon.style.color = '#4b534f';
    comingSoon.style.textShadow = '0 0 20px rgba(75, 83, 79, 0.8)';
    
    setTimeout(() => {
        comingSoon.style.transform = 'scale(1) skew(0deg)';
        comingSoon.style.color = '#ffffff';
        comingSoon.style.textShadow = '0 0 30px rgba(54, 54, 54, 0.8)';
        comingSoon.style.animation = 'pulse 2s ease-in-out infinite alternate';
    }, 200);
});

// Click pulse effect
document.addEventListener('click', (e) => {
    // Create visual pulse effect using only provided colors
    const pulse = document.createElement('div');
    pulse.style.position = 'fixed';
    pulse.style.top = e.clientY + 'px';
    pulse.style.left = e.clientX + 'px';
    pulse.style.width = '20px';
    pulse.style.height = '20px';
    pulse.style.background = 'rgba(75, 83, 79, 0.2)';
    pulse.style.borderRadius = '50%';
    pulse.style.transform = 'translate(-50%, -50%)';
    pulse.style.animation = 'pulse-expand 1s ease-out forwards';
    pulse.style.pointerEvents = 'none';
    pulse.style.border = '2px solid rgba(54, 54, 54, 0.3)';
    
    document.body.appendChild(pulse);
    
    setTimeout(() => pulse.remove(), 1000);
});

// Enhanced background pattern movement
let patternOffset = 0;
function animatePattern() {
    patternOffset += 0.5;
    
    // Create dynamic background using only provided colors
    const gradient1 = `radial-gradient(circle at ${20 + Math.sin(patternOffset * 0.01) * 10}% ${30 + Math.cos(patternOffset * 0.01) * 10}%, rgba(75, 83, 79, 0.2) 0%, transparent 50%)`;
    const gradient2 = `radial-gradient(circle at ${80 + Math.sin(patternOffset * 0.015) * 15}% ${70 + Math.cos(patternOffset * 0.015) * 15}%, rgba(54, 54, 54, 0.3) 0%, transparent 50%)`;
    const gradient3 = `radial-gradient(circle at ${40 + Math.sin(patternOffset * 0.02) * 20}% ${80 + Math.cos(patternOffset * 0.02) * 20}%, rgba(75, 83, 79, 0.2) 0%, transparent 50%)`;
    
    document.body.style.setProperty('--dynamic-bg', `${gradient1}, ${gradient2}, ${gradient3}`);
    
    requestAnimationFrame(animatePattern);
}

// Start pattern animation
animatePattern();

// Add subtle hover effects to social links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.background = 'rgba(75, 83, 79, 0.4)';
        link.style.borderColor = 'rgba(54, 54, 54, 0.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.background = 'rgba(75, 83, 79, 0.2)';
        link.style.borderColor = 'rgba(54, 54, 54, 0.3)';
    });
});

// Keyboard interactions
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        comingSoon.click();
    }
});

// Screen wake animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});