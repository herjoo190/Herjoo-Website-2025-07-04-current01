document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Services dropdown toggle
    const servicesButton = document.getElementById('services-button');
    const servicesDropdown = document.getElementById('services-dropdown');
    const servicesDropdownContainer = document.getElementById('services-dropdown-container');

    if (servicesButton && servicesDropdown && servicesDropdownContainer) {
        servicesButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the document click listener from firing immediately
            const isExpanded = servicesButton.getAttribute('aria-expanded') === 'true';
            servicesButton.setAttribute('aria-expanded', !isExpanded);
            servicesDropdown.classList.toggle('hidden');
        });

        // Close dropdown if clicking outside
        document.addEventListener('click', (event) => {
            if (!servicesDropdownContainer.contains(event.target)) {
                servicesDropdown.classList.add('hidden');
                servicesButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Close dropdown when a menu item is clicked
        const serviceLinks = servicesDropdown.querySelectorAll('a');
        serviceLinks.forEach(link => {
            link.addEventListener('click', () => {
                servicesDropdown.classList.add('hidden');
                servicesButton.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Modal functionality
    const contactModal = document.getElementById('contactModal');
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const closeModalButton = document.querySelector('.close-modal-btn');

    function openModal() {
        if (!contactModal) return;
        contactModal.classList.remove('hidden');
        setTimeout(() => contactModal.classList.remove('opacity-0'), 20);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        if (!contactModal) return;
        contactModal.classList.add('opacity-0');
        setTimeout(() => {
            contactModal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Restore background scrolling
        }, 250);
    }

    openModalButtons.forEach(btn => btn.addEventListener('click', openModal));
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Close modal on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !contactModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Close modal on outside click
    if (contactModal) {
        contactModal.addEventListener('click', (event) => {
            if (event.target === contactModal) {
                closeModal();
            }
        });
    }

    // --- Contact Form Submission --- 
    // The form submission logic has been removed from the frontend.
    // It should be handled by a secure backend endpoint.
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Here you would typically send the form data to a backend server
            // For example: fetch('/api/contact', { method: 'POST', body: new FormData(contactForm) })
            alert('Thank you for your message! This is a demo and the form is not connected to a backend.');
            closeModal();
        });
    }
});
