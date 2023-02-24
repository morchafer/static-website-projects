// ------------------------ Navbar style control when scrolling ------------------------

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar-format").style.background = "#f5f6fa";
        document.getElementById("navbar-format").style.boxShadow = "0 0 1rem rgba(0, 0, 0, .5)";
        var color_a = document.getElementsByClassName("color-when-scrolling");
        for (let i = 0; i < color_a.length; i++){
            color_a[i].style.color = "#000";
            color_a[i].classList.replace("shdw-hover-a", "shdw-hover-b");
        }
        document.getElementById("logo").setAttribute("src","imgs/logos/dark-logo.svg");
        document.getElementById("btn-login").style.color = "#000";
        document.getElementById("btn-login").style.borderColor = "#000";
        document.getElementById("btn-cart").style.color = "#000";
        document.getElementById("btn-cart").style.borderColor = "#000";
    }
    else {
        document.getElementById("navbar-format").style.background = "transparent";
        document.getElementById("navbar-format").style.boxShadow = "none";
        var color_a = document.getElementsByClassName("color-when-scrolling");
        for (let i = 0; i < color_a.length; i++){
            color_a[i].style.color = "#fff";
            color_a[i].classList.replace("shdw-hover-b", "shdw-hover-a");
        }
        document.getElementById("logo").setAttribute("src","imgs/logos/logo.svg");
        document.getElementById("btn-login").style.color = "#fff";
        document.getElementById("btn-login").style.borderColor = "#fff";
        document.getElementById("btn-cart").style.color = "#fff";
        document.getElementById("btn-cart").style.borderColor = "#fff";
    }
}