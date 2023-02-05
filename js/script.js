    let menuMobile = document.getElementById("menu-mobile");
    let menuMobileClose = document.getElementById("menu-mobile-close");
    let nav = document.querySelector("nav");
    let header = document.querySelector("header");
    let background = document.getElementsByClassName("background-menu");


    const toggleMenu = () => {
        //if(event.type === 'touchstart') event.preventDefault
        nav.classList.toggle("active");
        if(nav.classList.contains('active')){
            header.removeChild(menuMobile);
            menuMobileClose.style.display = "block";
            background[0].style.display = "block";

        } else {
            header.appendChild(menuMobile);
            menuMobileClose.style.display = "none";
            background[0].style.display = "none";
        }
        
    }
    menuMobile.addEventListener('click', toggleMenu);
    menuMobileClose.addEventListener('click', toggleMenu);