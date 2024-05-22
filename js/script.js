
//Mouse hover Nav Bar 
const dropDown_NavBar = document.querySelector('.nav-DropDown-Reseau');

dropDown_NavBar.addEventListener('mouseover', (e) => {dropDown_NavBar.classList.add("is-active");});
dropDown_NavBar.addEventListener('mouseout', (e) => {dropDown_NavBar.classList.remove("is-active")});

//Burgeur
const body = document.querySelector('body');
const btnBurger = document.querySelector('.btn-Burger');
btnBurger.addEventListener('click', (e) => {body.classList.toggle('activeToggle');})