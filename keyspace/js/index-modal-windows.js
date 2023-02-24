// ---------------------------------- Index Modal Windows ----------------------------------

var modal_display_control = document.getElementsByClassName("modal-display-control");
var close_modal = document.getElementsByClassName("close-modal");
var open_modal = document.getElementsByClassName("open-modal");
var osk_display_control = document.getElementsByClassName("osk-display-control")[0];
var open_osk = document.getElementsByClassName("open-osk")[0];
var initial_display_control = document.getElementsByClassName("initial-display-control")[0];
var close_initial = document.getElementsByClassName("close-initial")[0];
var close_osk = document.getElementsByClassName("close-osk");

for (let i = 0; i < open_modal.length; i++){
    open_modal[i].onclick = function() {
        modal_display_control[i].style.display = "block";
    }
}

open_osk.onclick = function() {
    osk_display_control.style.display = "block";
}

for (let i = 0; i < close_modal.length; i++){
    close_modal[i].onclick = function() {
        modal_display_control[i].style.display = "none";
    }
}

close_initial.onclick = function() {
    initial_display_control.style.display = "none";
}

for (let i = 0; i < close_osk.length; i++){
    close_osk[i].onclick = function() {
        osk_display_control.style.display = "none";
    }
}

window.onclick = function(event) {
    for (let i = 0; i < modal_display_control.length; i++){
        if (event.target == modal_display_control[i]) {
            modal_display_control[i].style.display = "none";
        }
    }
    if (event.target == osk_display_control) {
        osk_display_control.style.display = "none";
    }
    if (event.target == initial_display_control) {
        initial_display_control.style.display = "none";
    }
}
