//Need to refine this. ++Need to remove open sidebar button and just make it modular

const toggleSidebarButton = document.getElementById("sidebarButton");
const toggleSidebarOpen = document.getElementById("sidebarOpen");
const sidebar = document.getElementById("sidebar");

toggleSidebarButton.addEventListener('click', toggleSidebar);
toggleSidebarOpen.addEventListener('click',openSidebar);


//Change into one function --> check classlist and then toggle depending
function closeSidebar() {
    console.log('Closing sidebar');
    let tutorialNavPanel = document.getElementById("algo-directory").children;
    for (let index = 0; index < tutorialNavPanel.length; index++) {
        tutorialNavPanel[index].style.display = "block";
    }
}

function openSidebar() {
    console.log('Opening Sidebar');
    let tutorialNavPanel = document.getElementById("algo-directory").children;
    for (let index = 0; index < tutorialNavPanel.length; index++) {
        tutorialNavPanel[index].style.display = "none";
    }
}

function toggleSidebar() {
    if(sidebar.classList == "sidebar") {
        sidebar.classList.add('sidebarClosed');
        sidebar.classList.remove('sidebar')
        openSidebar();
        closeSidebar();
    }
}
