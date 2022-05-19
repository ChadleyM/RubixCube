var navItems = [
    {item: 'Rubix Cube Home', href: '/'},
    {item: 'Play Game', href: '/play-game/play-game.html'},
    {item: 'How to Play', href: '/how-to-play/how-to-play.html'},
    {item: 'Leaderboard', href: '/leaderboard/leaderboard.html'},
    {item: 'About', href: '/about/about.html'},
    {item: 'Algorithms', href: '/algorithms/algorithms.html'},
]

const newNavBar = document.createElement('nav');
const navLocation = document.getElementById('navLocation');
const newNavList = document.createElement('ul');

const logo = document.createElement('img');
logo.type = 'Image';
logo.src = '/assets/Rubiks Logo.png';
logo.classList = 'logo';
logo.alt = 'Rubiks Cube logo';

const mobileMenu = document.createElement('img');
mobileMenu.type = "Image";
mobileMenu.src = "/assets/Menu.png";
mobileMenu.id = "MenuButton";
mobileMenu.classList = "menuBtn";
mobileMenu.alt="Hamburger menu icon";

function CreateNavbar() {
    console.log('Creating Navbar')
    let navLength = navItems.length;

    let newNavItem = document.createElement('li');
    let newNavItemLink = document.createElement('a');

    newNavItemLink.href = navItems[0].href;
    newNavItemLink.appendChild(logo);
    newNavBar.appendChild(newNavItemLink);
    //newNavItem.appendChild(newNavItemLink);
    //newNavList.appendChild(newNavItem);

    for(var i=1; i<navLength; i++)
    {
        newNavItem = document.createElement('li');
        newNavItemLink = document.createElement('a');
        
        newNavItemLink.href = navItems[i].href;
        newNavItemLink.innerHTML = navItems[i].item;

        newNavItem.appendChild(newNavItemLink);
        newNavList.appendChild(newNavItem);
    }

    newNavList.classList = "navbarList";
    newNavBar.classList = "navbar";
    newNavBar.appendChild(newNavList);
    newNavBar.appendChild(mobileMenu);
    navLocation.appendChild(newNavBar);
}

CreateNavbar();


const mobileMenuButton = document.getElementById('MenuButton');

mobileMenuButton.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    console.log('toggling menu');

    if(newNavList.classList == 'navbarList')
    {
        newNavList.classList.remove('navbarList');
        newNavList.classList.add('navbarListActive');
    }
    else if(newNavList.classList == 'navbarListActive')
    {
        newNavList.classList.remove('navbarListActive');
        newNavList.classList.add('navbarList');
    }
} 