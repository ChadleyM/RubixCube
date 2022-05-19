var navItems = [
    {item: 'Play', href: '/play-game/play-game.html'},
    {item: 'Learn', href: '/how-to-play/how-to-play.html'},
    {item: 'Time', href: '/algorithms/algorithms.html'},
    {item: 'Score', href: '/leaderboard/leaderboard.html'},
    {item: 'About', href: '/about/about.html'},
]

const newNavBar = document.createElement('nav');
const navLocation = document.getElementById('navLocation');
const newNavList = document.createElement('ul');

const logo = document.createElement('img');
logo.type = 'Image';
logo.src = '/assets/Logo.png';
logo.classList = 'logo';
logo.alt = 'Rubiks Cube logo';

const mobileMenu = document.createElement('img');
mobileMenu.type = "Image";
mobileMenu.src = "/assets/Menu.png";
mobileMenu.id = "MenuButton";
mobileMenu.classList = "menuBtn";
mobileMenu.alt="Hamburger menu icon";

function CreateNavbar() {
    console.log('Creating Navbar');

    let newNavItem = document.createElement('li');
    let newNavItemLink = document.createElement('a');

    newNavItemLink.href = '/';
    newNavItemLink.appendChild(logo);;
    newNavBar.appendChild(newNavItemLink);

    for(const navItem of navItems)
    {
        newNavItem = document.createElement('li');
        newNavItemLink = document.createElement('a');
        
        newNavItemLink.href = navItem.href;
        newNavItemLink.setAttribute('id', navItem.item)
        newNavItemLink.innerHTML = navItem.item;

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


const mobileMenuButton = document.querySelector('#MenuButton');

mobileMenuButton.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {

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