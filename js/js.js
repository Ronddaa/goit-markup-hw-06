// Modal Window - Open / Close

import { newArray } from "../main.js"

document.getElementById("is-open-modal").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.add("is-open")
})

document.getElementById("close-modal-window").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.remove("is-open")
})

// Burger Menu - Open / Close

document.getElementById("is-open-burger").addEventListener("click",function () {
    document.getElementById("burger-is-open").classList.add("is-open")
})

document.getElementById("close-burger-menu").addEventListener("click",function () {
    document.getElementById("burger-is-open").classList.remove("is-open")
})

const form = document.querySelector('.modal-window-form');
const STORAGE_KEY = 'formData';
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault()
  const {
    userName, userPhone, userEmail, userComment
  } = e.currentTarget.elements;
  const userData = { name: userName.value, phone: userPhone.value, email: userEmail.value, comments: userComment.value };
  console.log(userData);
  
  localStorage.setItem('formData', JSON.stringify(userData));

}

const storageData = JSON.parse(localStorage.getItem('formData'));

const {
    userName, userPhone, userEmail, userComment
} = form.elements;
  
if (storageData) {
  userName.value = storageData.name;
  userPhone.value = storageData.phone;
  userEmail.value = storageData.email;
  userComment.value = storageData.comments;
}

// slider

const slider = document.querySelector('#photos');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);

let index = 0;
function nextImage(e) {
  if (index === newArray.length - 1) {
    index = 0;
    slider.src = newArray[index];
  } else {
    index += 1;
    slider.src = newArray[index];
  }

  console.log(index);
}

function prevImage(e) {
  if (index !== 0) {
    index -= 1;
    slider.src = newArray[index];
    console.log(index);
    return;
  }
  
  if (index === 0) {
    index = newArray.length -1;
    slider.src = newArray[index];
    console.log(index);
    return;
  }

  if (index === 1) {
    index = 0;
    console.log(index);
    return;
  }

  console.log(index);
  
}
