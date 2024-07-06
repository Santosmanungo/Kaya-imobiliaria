/*
const menuLateral = document.getElementBy('menu-lateral');
const menuInferior = document.getElementsByClassName('menu-mobile');

window.addEventListener('resize', function() {
    if (window.innerWidth >= 650) {
        menuLateral.style.display = 'none';
        menuMobile.style.display = 'none';
    } else {
        menuLateral.style.display = 'block';
        menuMobile.style.display = 'block';
    }
});
*/


const menuLateral = document.getElementById('menu-lateral');
const menuInferior = document.getElementsByClassName('menu-inferior');

window.addEventListener('resize', function() {
    esconderMenus();
});

function esconderMenus() {
    if (window.innerWidth >= 768) { // Tablet
        mostrarMenuLateral();
        esconderMenuInferior();
    } else if (window.innerWidth ) { // Smartphone
        esconderMenuLateral();
        mostrarMenuInferior();
    }
}

function mostrarMenuLateral() {
    menuLateral.style.display = 'block';
}
function esconderMenuLateral() {
    menuLateral.style.display = 'none';
}

function mostrarMenuInferior() {
    menuInferior.style.display = 'block';
}

function esconderMenuInferior() {
    menuInferior.style.display = 'none';
}

// Chamada inicial para esconder os menus na carga da página
esconderMenus();


const activePage = window.Location.pathname;
const navLinks =document.querySelectorAll("nav a")
forEach(link => {
    if(link.href.includes("${activePage}")){
        link.classlist.add("active")
    }
});

//Dropdown nav-bar

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  //Dropdown nav-bar

  //Dropdown nav-bar
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
//Dropdown nav-bar