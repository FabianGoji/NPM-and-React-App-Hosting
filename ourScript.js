//getting the links to a scroll position that accounts for header height

function scrollToHeading(event) {
    event.preventDefault(); // Prevent the default link behavior
    var targetElement = document.querySelector(event.target.getAttribute('href'));
    console.log(targetElement);
    var headerHeight = document.querySelector('.header').offsetHeight;
    console.log(headerHeight);
    if (targetElement){
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight
      });
    }
  }
  
  // Attaches the event listener to each link in "stactic_col"
  var staticLinks = document.querySelectorAll('.static_col a');
  for (var i =  0; i < staticLinks.length; i++) {
    staticLinks[i].addEventListener('click', scrollToHeading);
  }