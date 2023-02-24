// ---------------------------------- Support ----------------------------------

// Global variables
var keyboard_tab_content, info_tab_content;

// Search keyboard by name or model number
function search() {
    var input, filter, ul, li, tab, i, j, k;
    input = document.getElementById("keyboard-search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("keyboards-list");
    li = ul.getElementsByTagName("li");
    keyboard_tab_content = document.getElementsByClassName("keyboard-tab-content");
    info_tab_content = document.getElementsByClassName("info-tab-content");

    for (i = 0; i < li.length; i++) {
        tab = li[i].getElementsByTagName("button")[0];
        
        if (tab.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tab.style.display = "block";
        } else {
            tab.style.display = "none";
            for (j = 0; j < keyboard_tab_content.length; j++) {
                keyboard_tab_content[j].style.display = "none";
            }
            for (k = 0; k < info_tab_content.length; k++) {
                info_tab_content[k].style.display = "none";
            }
        }
        if (filter == ''){
            tab.style.display = "none";
            for (j = 0; j < keyboard_tab_content.length; j++) {
                keyboard_tab_content[j].style.display = "none";
            }
            for (k = 0; k < info_tab_content.length; k++) {
                info_tab_content[k].style.display = "none";
            }
        }
    }
}

//Vertical Tabs
function openTab(evt, keyboardCode) {
    var i, keyboard_tab;

    keyboard_tab_content = document.getElementsByClassName("keyboard-tab-content");
    for (i = 0; i < keyboard_tab_content.length; i++) {
        keyboard_tab_content[i].style.display = "none";
    }

    keyboard_tab = document.getElementsByClassName("keyboard-tab");
    for (i = 0; i < keyboard_tab.length; i++) {
        keyboard_tab[i].classList.add("inactive-tab");
        keyboard_tab[i].classList.remove("active-tab");
    }

    document.getElementById(keyboardCode).style.display = "block";
    evt.currentTarget.classList.remove("inactive-tab");
    evt.currentTarget.classList.add("active-tab");
}

//Hover Tabs
function openInfoTab(evt, sectionCode) {
    var i, keyboard_info_tab, current, parent_keyboard, section_code;

    info_tab_content = document.getElementsByClassName("info-tab-content");
    evt.currentTarget.classList.add("current");
    current = document.getElementsByClassName("current")[0];
    parent_keyboard = current.parentNode.id;
    section_code = document.getElementsByClassName(sectionCode);
    keyboard_info_tab = document.getElementsByClassName("keyboard-info-tab");

    for (i = 0; i < info_tab_content.length; i++) {
        info_tab_content[i].style.display = "none";
    }
    
    for (i = 0; i < keyboard_info_tab.length; i++) {
        keyboard_info_tab[i].classList.add("inactive-info-tab");
        keyboard_info_tab[i].classList.remove("active-info-tab");
    }

    for (i = 0; i < section_code.length; i++) {
        if (parent_keyboard == "K" + String(i+1)){
            section_code[i].style.display = "block";
            evt.currentTarget.classList.remove("current");
        }
    }
    
    evt.currentTarget.classList.remove("inactive-info-tab");
    evt.currentTarget.classList.add("active-info-tab");
}