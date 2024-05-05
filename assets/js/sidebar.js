document.querySelector('.menu-container').addEventListener('click', function() {
  document.getElementById('sidebar').style.width = '250px';
  document.querySelector('.overlay').style.display = 'block'; // Show the overlay
});

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
  document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
}

// Close the sidebar with a click on one of the sidebar buttons (optional)
document.querySelectorAll('.sidebar-btn').forEach(function(element) {
  element.addEventListener('click', closeSidebar);
});