let navContainer = document.getElementById("header_nav_container");



let isVisible = false;

const showMenu = () => {
  console.log(1);
  isVisible = !isVisible;
  if (isVisible == true) {

    navContainer.style.visibility = "visible"
    navContainer.style.opacity = "1"
  }

  else {
    navContainer.style.visibility = "hidden"
    navContainer.style.opacity = "0"


  }
}

