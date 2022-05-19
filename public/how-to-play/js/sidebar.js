//Need to refine this. ++Need to remove open sidebar button and just make it modular

const toggleSidebarButton = document.getElementById("sidebarButton");
const sidebar = document.getElementById("sidebar");

toggleSidebarButton.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    if(sidebar.classList == "sidebar") {
        sidebar.classList.add('sidebarClosed');
        sidebar.classList.remove('sidebar')
        openSidebar();
        closeSidebar();
    }
}
