document.addEventListener('DOMContentLoaded', () => {

    // --- 1. COMPONENT LOADER ---
    // Fetches HTML for components like the header and injects them into the page.
    // It returns a Promise that resolves after the component is loaded.
    const loadComponent = (url, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            // Silently return if the placeholder doesn't exist on the current page.
            return Promise.resolve();
        }

        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load component: ${url}`);
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;
            })
            .catch(error => console.error(error));
    };


    // --- 2. INITIALIZATION FUNCTIONS ---
    // These functions attach event listeners to elements.

    const initializeHeaderMenu = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    };

    const initializeModals = () => {
        const modal = document.getElementById('contactModal');
        if (!modal) return;

        const openModalButtons = document.querySelectorAll('.open-modal-btn');
        const closeModalButtons = modal.querySelectorAll('.close-modal-btn');

        const openModal = () => modal.classList.remove('hidden', 'opacity-0');
        const closeModal = () => modal.classList.add('hidden', 'opacity-0');

        openModalButtons.forEach(button => button.addEventListener('click', openModal));
        closeModalButtons.forEach(button => button.addEventListener('click', closeModal));

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    };
    
    const initializeContactForm = () => {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would add validation and an AJAX call here.
            // For this project, we'll just redirect to the thank-you page on submit.
            window.location.href = 'thank-you.html';
        });
    };


    // --- 3. SCRIPT EXECUTION ---
    // Load the header first. Once it's done, initialize all scripts.
    // This ensures that elements from the header (like the menu button)
    // exist in the DOM before we try to attach event listeners to them.
    loadComponent('header.html', 'header-placeholder').then(() => {
        initializeHeaderMenu();
        initializeModals();
        initializeContactForm();
    });

});
