// ---------------------------------- Modal Windows ----------------------------------

 var modal_display_control = document.getElementsByClassName("modal-display-control");
 var open_modal = document.getElementsByClassName("open-modal");
 for (let i = 0; i < open_modal.length; i++){
     open_modal[i].onclick = function() {
         modal_display_control[i].style.display = "block";
     }
 }

 var close_modal = document.getElementsByClassName("close-modal");
 for (let i = 0; i < close_modal.length; i++){
     close_modal[i].onclick = function() {
         modal_display_control[i].style.display = "none";
     }
 }

 window.onclick = function(event) {
     for (let i = 0; i < modal_display_control.length; i++){
         if (event.target == modal_display_control[i]) {
             modal_display_control[i].style.display = "none";
         }
     }
 }