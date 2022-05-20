
const toggleSidebarButton = document.getElementById("sidebarButton");
const sidebar = document.getElementById("sidebar");
const sidebarIcon = document.getElementById("sidebar-icon");

toggleSidebarButton.addEventListener('click', toggleSidebar);
toggleSidebarOpen.addEventListener('click', openSidebar);


function closeSidebar() {
    let sidebarTitle = document.getElementById("sidebar-title");
    sidebarTitle.style.display = "block";
    let tutorialNavPanel = document.getElementById("algo-directory").children;
    for (let index = 0; index < tutorialNavPanel.length; index++) {
        tutorialNavPanel[index].style.display = "block";
    }
}

function openSidebar() {
    let sidebarTitle = document.getElementById("sidebar-title");
    sidebarTitle.style.display = "none";
    let tutorialNavPanel = document.getElementById("algo-directory").children;
    for (let index = 0; index < tutorialNavPanel.length; index++) {
        tutorialNavPanel[index].style.display = "none";
    }
}

function toggleSidebar() {
    if (sidebar.classList == "sidebar") {
        sidebar.classList.add('sidebarClosed');
        sidebar.classList.remove('sidebar')
        toggleSidebarButton.classList.add('sidebar-button-left')
        toggleSidebarButton.classList.remove('sidebar-button-right')
        sidebarIcon.classList.add('sidebar-icon-right')
        sidebarIcon.classList.remove('sidebar-icon-left')
        openSidebar();
    }
    else if (sidebar.classList == "sidebarClosed") {
        sidebar.classList.remove('sidebarClosed');
        sidebar.classList.add('sidebar')
        toggleSidebarButton.classList.remove('sidebar-button-left')
        toggleSidebarButton.classList.add('sidebar-button-right')
        sidebarIcon.classList.remove('sidebar-icon-right')
        sidebarIcon.classList.add('sidebar-icon-left')
        closeSidebar();
    }
}
