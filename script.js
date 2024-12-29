/* Preload */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


/* Header */

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const hamburgerIcon = document.querySelector('.hamburger i'); // Target the <i> tag inside the hamburger

// Function to close sidebar
const closeSidebar = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    hamburgerIcon.classList.remove('fa-times'); // Switch back to the hamburger icon
    hamburgerIcon.classList.add('fa-bars');
};

// Open sidebar on hamburger click
hamburger.addEventListener('click', () => {
    const isActive = sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (isActive) {
        hamburgerIcon.classList.remove('fa-bars'); // Switch to "X" icon
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times'); // Switch back to hamburger icon
        hamburgerIcon.classList.add('fa-bars');
    }
});

// Close sidebar when clicking outside
overlay.addEventListener('click', closeSidebar);

// Auto-close sidebar when resizing to larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

/* For both to have the line under it */

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-links a');

    // Remove the 'on' class from all links
    links.forEach(link => {
        link.classList.remove('on');
    });

    sidebarLinks.forEach(link => {
        link.classList.remove('on');
    });

    // Get the current page's pathname (works across all pages)
    const currentPage = window.location.pathname;

    // Apply the 'on' class to the link that matches the current page
    links.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('on');
        }
    });

    sidebarLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('on');
        }
    });

    // Add event listener for sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'on' class from all sidebar links
            sidebarLinks.forEach(sidebarLink => {
                sidebarLink.classList.remove('on');
            });

            // Add 'on' class to the clicked link
            this.classList.add('on');
        });
    });

    // Add event listener for main navigation links (optional, if you want similar behavior)
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'on' class from all navigation links
            links.forEach(navLink => {
                navLink.classList.remove('on');
            });

            // Add 'on' class to the clicked link
            this.classList.add('on');
        });
    });
});



/* Hero */

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hero-image");
  let currentIndex = 0;

  function changeImage() {
    images[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("active");
  }

  // Initialize first image
  images[currentIndex].classList.add("active");

  // Change image every 5 seconds
  setInterval(changeImage, 4000);
});

