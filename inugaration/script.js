// script.js
document.getElementById('scissorButton').addEventListener('click', function() {
  // Animation for cutting the ribbon
  let ribbon = document.getElementById('ribbon');
  ribbon.style.transition = 'opacity 2s';
  ribbon.style.opacity = '0';

  // Redirect after the animation
  setTimeout(function() {
      window.location.href = 'https://www.google.com/'; // Change to your desired URL
  }, 2000); // This should match the duration of the ribbon fade-out animation
});
