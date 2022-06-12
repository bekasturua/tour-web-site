//  login

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalCloseButtons = document.querySelectorAll(".close_button");
let loginButton = document.querySelector(".login_click");
let registerButton = document.querySelector(".register_click");
let loginPopup = document.querySelector(".user");
let registerPopup = document.querySelector(".register");

loginButton.addEventListener("click", function () {
  modal.style.display = "block";
  backdrop.style.display = "block";
  loginPopup.style.display = "block";
  registerPopup.style.display = "none";
});

registerButton.addEventListener("click", function () {
  modal.style.display = "block";
  backdrop.style.display = "block";
  loginPopup.style.display = "none";
  registerPopup.style.display = "block";
});

for (let i = 0; i < modalCloseButtons.length; i++) {
  modalCloseButtons[i].addEventListener("click", closeModal);
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
