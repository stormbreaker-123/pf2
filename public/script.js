
var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tabcontents");

const opentab = (tabname) => {

    for (i of tablinks) {
        i.classList.remove("active-link");

    }
    for (i of tabcontents) {
        i.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");

}
