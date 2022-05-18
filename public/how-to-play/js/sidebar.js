//Need to refine this. ++Need to remove open sidebar button and just make it modular

const toggleSidebarButton = document.getElementById("sidebarButton");
const toggleSidebarOpen = document.getElementById("sidebarOpen");
const sidebar = document.getElementById("sidebar");

toggleSidebarButton.addEventListener('click', toggleSidebar);
toggleSidebarOpen.addEventListener('click',openSidebar);


//Change into one function --> check classlist and then toggle depending
function closeSidebar() {
    document.getElementById("sidebar").style.width = "20px";
    sidebar.classList.add("sidebarClosed");
    sidebar.classList.remove('sidebar');
    console.log('Closing sidebar');
}

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    sidebar.classList.remove("sidebarClosed");
    sidebar.classList.add('sidebar');
    console.log('Opening Sidebar');
}

function toggleSidebar() {
    if(sidebar.classList == "sidebar") {
        sidebar.classList.add('sidebarClosed');
        sidebar.classList.remove('sidebar')
    }
    else if(sidebar.classList == "sidebarClosed") {
        sidebar.classList.remove('sidebarClosed');
        sidebar.classList.add('sidebar')
    }
}