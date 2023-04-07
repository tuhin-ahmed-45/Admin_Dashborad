// Nav hover
let list = document.querySelectorAll('.nav li');

function activeLink() {
    list.forEach(item => {
        item.classList.remove('hovered');
    })
    this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink))

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".nav");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};
