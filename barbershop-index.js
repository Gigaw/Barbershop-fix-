
var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=user-login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=user-password]");
var mapLink = document.querySelector(".how-to-find");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");
var mapButton = document.querySelector(".road-button");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();


})
mapButton.addEventListener("click", function(evt){
evt.preventDefault();
popupMap.classList.add("modal-show");
})
mapLink.addEventListener("click", function(evt){
  evt.preventDefault();
  popupMap.classList.add("modal-show");
})

closeMap.addEventListener("click", function(evt){
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
})

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error")

})
form.addEventListener("submit", function(evt){
  if (!login.value || !password.value){
  evt.preventDefault();
  popup.classList.add("modal-error");
  }
  else {
    evt.preventDefault();
    console.log(login.value);
    console.log(password.value);
  }

})
window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    evt.preventDefault();
    if (popup.classList.contains("modal-show")){
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})
