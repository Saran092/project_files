// Function to show the sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sideMenu'); // Corrected selector
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sideMenu'); // Corrected selector
    sidebar.style.display = 'none';
}
const navBar = document.querySelector("nav");
const navLink = document.querySelector("nav ul");
window.addEventListener('scroll',()=>{
	if(scrollY > 50){
		navBar.classList.add('background-color')
	}
})