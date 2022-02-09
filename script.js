// Sandwich/Burger Menu dropdown
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Display return to top button if scrolls 50% of the page
window.addEventListener('scroll', () => {
  const scrollable = Math.ceil((document.documentElement.scrollHeight - window.innerHeight)/2);
  const scrolled = window.scrollY;

  const returnToTopContainer = document.getElementById('returnToTop-container');

  if(Math.ceil(scrolled) >= scrollable){
    returnToTopContainer.style.display = 'flex';
  } else {
    returnToTopContainer.style.display = 'none';
  }
})

// Return to top button
const returnToTopBtn = document.getElementById('returnToTopBtn');

returnToTopBtn.addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
