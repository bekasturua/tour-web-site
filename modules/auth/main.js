import { register } from "./register.js";
import { login } from "./login.js";

export function auth() {
  if (!isAuthorized()) {
    register();
    login();
  }
}

export function isAuthorized() {
  let user = localStorage.getItem("loggedInUser");
  const loginBtn = document.getElementsByClassName("login_click")[0];
  const registerBtn = document.getElementsByClassName("register_click")[0];
  const logoutBtn = document.getElementsByClassName("logout_click")[0];
  if (user) {
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    logoutBtn.style.display = "flex";

    logoutBtn.addEventListener("click", logout);
    return true;
  } else {
    loginBtn.style.display = "flex";
    registerBtn.style.display = "flex";
    logoutBtn.style.display = "none";
    return false;
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}

auth();
