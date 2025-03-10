const slider = document.querySelector('.slider');
        const leftBtn = document.querySelector('.slider-btn.left');
        const rightBtn = document.querySelector('.slider-btn.right');
        const cards = document.querySelectorAll('.card');

        let currentIndex = 0;
        const visibleCards = 3;

        function updateSliderPosition() {
            const cardWidth = cards[0].offsetWidth;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }

        leftBtn.addEventListener('click', () => {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateSliderPosition();
        });

        rightBtn.addEventListener('click', () => {
            currentIndex = Math.min(currentIndex + 1, cards.length - visibleCards);
            updateSliderPosition();
        });

        window.addEventListener('resize', updateSliderPosition);

//Navigation Bar Section

const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// opens nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

// close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

// shows sidebar on small devices
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

// Hide sidebar on small devices
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);
