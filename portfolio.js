// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Toggle theme
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Button Click Handlers
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Schedule a Call - This would open a scheduling interface');
});

document.querySelector('.btn-secondary').addEventListener('click', function() {
    window.location.href = 'mailto:your.email@example.com';
});

// Social Media Links
const socialButtons = document.querySelectorAll('.social-btn');
const socialLinks = {
    'LinkedIn': 'https://linkedin.com/in/yourprofile',
    'Github': 'https://github.com/yourprofile',
    'Facebook': 'https://facebook.com/yourprofile',
    'Instagram': 'https://instagram.com/yourprofile'
};

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.textContent;
        if (socialLinks[platform]) {
            window.open(socialLinks[platform], '_blank');
        }
    });
});

// Smooth scrolling for "View All" link
document.querySelector('.view-all')?.addEventListener('click', function(e) {
    e.preventDefault();
    // This would expand the tech stack or navigate to a dedicated page
    alert('View All Tech Stack - This would show expanded tech skills');
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Project card hover effect enhancement
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--accent-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--border-color)';
    });
});

// Source Code links
document.querySelectorAll('.source-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
        alert(`Opening source code for: ${projectTitle}`);
        // In a real implementation, this would link to the actual GitHub repo
    });
});

// Console welcome message
console.log('%cWelcome to Went Ruzel Igot\'s Portfolio!', 'color: #2196F3; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore the code 😊', 'color: #666; font-size: 14px;');

// Certificate Modal Functionality
const certModal = document.getElementById('certModal');
const certImage = document.getElementById('certImage');
const certClose = document.querySelector('.cert-close');

// Certificate image mapping (replace with your actual certificate image paths)
const certificateImages = {
    'goteam-ai': 'certificates/goteam-ai.png',
    'cybersecurity': 'certificates/cybersecurity.jpg',
    'asean-ai': 'certificates/asean-ai.png',
    'ccna-wireless': 'certificates/ccna-switch_routing_wireless.jpg',
    'ccna-intro': 'certificates/ccna-intro.jpg'
};

// Add click event to all clickable certificates
document.querySelectorAll('.clickable-cert').forEach(cert => {
    cert.addEventListener('click', function() {
        const certId = this.getAttribute('data-cert');
        const imagePath = certificateImages[certId];
        
        if (imagePath) {
            certImage.src = imagePath;
            certModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            // Fallback to placeholder if image not found
            certImage.src = 'https://via.placeholder.com/800x600?text=Certificate+Image';
            certModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal when clicking the X button
certClose.addEventListener('click', function() {
    certModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside the image
certModal.addEventListener('click', function(e) {
    if (e.target === certModal) {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && certModal.style.display === 'block') {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});