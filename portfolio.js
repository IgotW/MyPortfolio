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

// Console welcome message
console.log('%cWelcome to Went Ruzel Igot\'s Portfolio!', 'color: #2196F3; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore the code 😊', 'color: #666; font-size: 14px;');

// Certificate Modal Functionality
const certModal = document.getElementById('certModal');
const certImage = document.getElementById('certImage');
const certClose = document.querySelector('.cert-close');

// Certificate image mapping
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
            document.body.style.overflow = 'hidden';
        } else {
            certImage.src = 'https://via.placeholder.com/800x600?text=Certificate+Image';
            certModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close certificate modal
certClose.addEventListener('click', function() {
    certModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

certModal.addEventListener('click', function(e) {
    if (e.target === certModal) {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// PROJECT MODAL FUNCTIONALITY
const projectModal = document.getElementById('projectModal');
const projectModalClose = document.querySelector('.project-modal-close');
let currentImageIndex = 0;
let currentImages = [];

// Project data with multiple images
const projectsData = {
    'papalit': {
        title: 'Papalit: An AI-powered System for Papaya Disease Identification Using Teachable Machine',
        type: 'Capstone Project',
        position: 'Position: Mobile Developer (Android) and Backend Developer',
        description: 'Developed a comprehensive deep-learning system using Google\'s Teachable Machine to assist farmers and gardeners in identifying papaya diseases with high accuracy. The system supports batch image processing, allowing users to upload multiple images simultaneously for efficient disease detection. Integrated OpenAI\'s API to provide intelligent treatment suggestions and recommendations based on the identified disease. The mobile application features a clean, user-friendly interface built with Kotlin for Android, while the backend leverages Node.js and Express.js for robust API handling. Firebase is used for real-time data synchronization and secure authentication through JWT tokens.',
        techStack: ['Node.js', 'Express.js', 'Kotlin', 'Firebase', 'JWT', 'Teachable Machine', 'OpenAI API'],
        images: [
            'projects/papaia_mockup.png',
            'projects/papaia-splash.png',
            'projects/papaia-login.png',
            // 'projects/papaia-register.png',//missing image to be added
            'projects/papaia-home.png',
            'projects/papaia-home1.png',
            'projects/papaia-camera.png',
            'projects/papaia-camera1.png',
            'projects/papaia-result.png',
            'projects/papaia-scanlog.png',
            'projects/papaia-analytics1.png',
            'projects/papaia-profile.png',
            'projects/papaia-forgot.png',
            'projects/papaia-forgot1.png',
            'projects/papaia-forgot2.png'

        ],
        sourceCode: 'https://github.com/IgotW/Papaia-Mobile.git',
        liveDemo: 'https://www.youtube.com/watch?v=7mlhoZLg_Hs&t=92s'
    },
    'loadout': {
        title: 'LoadOut',
        type: 'Mobile Application + IoT',
        position: 'Position: Mobile Developer (Android)',
        description: 'Developed an innovative IoT-integrated mobile application featuring a smart multi-bin system that automatically opens based on sensor detection. The system intelligently tracks fill levels in real-time using ultrasonic sensors and sends health alerts to household residents through Firebase real-time database. The Android application provides a comprehensive dashboard for monitoring bin status, viewing fill level analytics, and managing household waste efficiently. Features include automated notifications, historical data tracking, and customizable alert thresholds for different bin types.',
        techStack: ['Kotlin', 'Node.js', 'Firebase', 'Arduino', 'IoT Sensors'],
        images: [
            'projects/loadout/image1.jpg',
            'projects/loadout/image2.jpg',
            'projects/loadout/image3.jpg'
        ],
        sourceCode: 'https://github.com/yourprofile/loadout',
        liveDemo: '#'
    },
    'ccsync': {
        title: 'CCSync',
        type: 'Web Development',
        position: 'Position: Frontend Developer',
        description: 'Developed a comprehensive web-based management system designed specifically for our college department to streamline event management, student registrations, and membership tracking. The system features an intuitive interface built with Bootstrap for responsive design, ensuring seamless access across all devices. Implemented dynamic event creation and management tools, automated registration workflows, and real-time membership status updates. The platform includes admin dashboards for analytics, attendance tracking, and report generation. Enhanced user experience with interactive components using vanilla JavaScript.',
        techStack: ['HTML', 'CSS3', 'Bootstrap', 'Javascript', 'PHP', 'MySQL'],
        images: [
            'projects/ccsync/image1.jpg',
            'projects/ccsync/image2.jpg'
        ],
        sourceCode: 'https://github.com/yourprofile/ccsync',
        liveDemo: '#'
    },
    'brgyonestop': {
        title: 'BrgyOneStop',
        type: 'Mobile Application',
        position: 'Position: Mobile Developer (Android)',
        description: 'Developed a transformative mobile application that digitizes and streamlines transactions between barangay officials and residents. The app eliminates paperwork and long queues by enabling digital requests for barangay certificates, clearances, and permits. Features include secure user authentication with JWT, document tracking system, real-time status updates, and digital signature capabilities. The backend is powered by Node.js and Express.js with MongoDB for efficient data management. Residents can submit requests, upload required documents, and receive notifications when their documents are ready for pickup or digital download.',
        techStack: ['Kotlin', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
        images: [
            'projects/brgy-login.png',
            'projects/brgy-home-admin.png',
            'projects/brgy-announcement.png',
            'projects/brgy-filed.png',
            'projects/brgy-appointment.png',
            'projects/brgy-residents.png',
            'projects/brgy-complain-res.png',
            'projects/brgy-home-res.png',
            'projects/brgy-res-form.png',
            'projects/brgy-res-comp.png',
            'projects/brgy-res-appointment.png',
            'projects/brgy-schedule.png',
            'projects/brgy-emergency.png'
        ],
        sourceCode: 'https://github.com/yourprofile/brgyonestop',
        liveDemo: '#'
    }
};

// Open project modal
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't open modal if clicking on source code link
        if (e.target.classList.contains('source-link')) {
            e.preventDefault();
            return;
        }
        
        const projectId = this.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            openProjectModal(project);
        }
    });
});

function openProjectModal(project) {
    // Set project information
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectType').textContent = project.type;
    document.getElementById('modalProjectPosition').textContent = project.position;
    document.getElementById('modalProjectDescription').textContent = project.description;
    
    // Set tech stack
    const techStackContainer = document.getElementById('modalTechStack');
    techStackContainer.innerHTML = '';
    project.techStack.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tech;
        techStackContainer.appendChild(tag);
    });
    
    // Set links
    document.getElementById('modalSourceCode').href = project.sourceCode;
    document.getElementById('modalLiveDemo').href = project.liveDemo;
    
    // Setup carousel
    currentImages = project.images;
    currentImageIndex = 0;
    setupCarousel();
    
    // Show modal
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function setupCarousel() {
    const carouselContainer = document.getElementById('carouselImages');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    carouselContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    
    if (currentImages.length === 0) {
        // Show placeholder if no images
        carouselContainer.innerHTML = '<div class="carousel-placeholder">Project Images</div>';
        return;
    }
    
    // Create image elements
    currentImages.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'carousel-image';
        img.alt = `Project Image ${index + 1}`;
        if (index === 0) img.classList.add('active');
        carouselContainer.appendChild(img);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToImage(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Show/hide navigation buttons based on image count
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentImages.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        indicatorsContainer.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        indicatorsContainer.style.display = 'flex';
    }
}

function goToImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    // Remove active class from all
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Add active class to selected
    currentImageIndex = index;
    images[currentImageIndex].classList.add('active');
    indicators[currentImageIndex].classList.add('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    goToImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    goToImage(currentImageIndex);
}

// Carousel navigation
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

// Close project modal
projectModalClose.addEventListener('click', function() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Keyboard navigation for project modal
document.addEventListener('keydown', function(e) {
    if (projectModal.style.display === 'block') {
        if (e.key === 'Escape') {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
    
    if (certModal.style.display === 'block' && e.key === 'Escape') {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Source Code links (prevent modal from opening when clicking these)
document.querySelectorAll('.source-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        const projectCard = this.closest('.project-card');
        const projectTitle = projectCard.querySelector('h3').textContent;
        alert(`Opening source code for: ${projectTitle}`);
    });
});