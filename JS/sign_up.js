let back = document.querySelector(".img-cover");
let content = document.querySelector(".signUpInput");
let pop = document.querySelector("#pop");
let nav = document.querySelector(".nav");

function popup(){
    pop.style.display = 'block';
    back.style.zIndex = '2';
    content.style.zIndex = '1';
}

function delete_box(){
    pop.style.display = 'none';
    back.style.zIndex = '1';
    content.style.zIndex = '2';
}