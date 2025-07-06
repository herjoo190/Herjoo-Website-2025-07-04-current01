// Function to load header into all pages
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            
            // Initialize mobile menu functionality
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }

            // Initialize desktop dropdown menu functionality
            const servicesButton = document.querySelector('.group > button');
            const servicesDropdown = document.querySelector('.group > div');
            const dropdownItems = document.querySelectorAll('.group > div a');
            
            if (servicesButton && servicesDropdown) {
                servicesButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    servicesDropdown.classList.toggle('hidden');
                });

                // Close dropdown when clicking menu items
                dropdownItems.forEach(item => {
                    item.addEventListener('click', () => {
                        servicesDropdown.classList.add('hidden');
                    });
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', (e) => {
                    if (!servicesButton.contains(e.target) && !servicesDropdown.contains(e.target)) {
                        servicesDropdown.classList.add('hidden');
                    }
                });
            }
        })
        .catch(err => console.error('Failed to load header:', err));
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);
