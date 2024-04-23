let menu = document.querySelector("header .menu-icon .bi-list");
let nav = document.querySelector("header nav");

let close = document.querySelector("header nav > i");

menu.addEventListener("click",()=>{
    nav.style.left = "0px";
});

close.addEventListener("click",()=>{
    nav.style.left = "100%";
});