import { loginUser } from "./login.js";

export function register() {
  const registerBtn = document.querySelectorAll(".modal__action")[2];
  registerBtn.addEventListener("click", userRegister);
}

function userRegister() {
  const username = document.querySelector(".username").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const repeatPassword = document.querySelector(".repeat_password").value;
  if (
    !username.trim() ||
    !email.trim() ||
    !password.trim() ||
    !repeatPassword.trim()
  ) {
    return;
  }

  if (password === repeatPassword) {
    const data = { username: username, email: email, password: password };
    fetch("https://easytravel-d1779-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        if (users.filter((user) => user.email == email).length == 0) {
          registerUser(data);
        } else {
          alert("Already exists!");
        }
      });
  }
}

function registerUser(data) {
  fetch("https://easytravel-d1779-default-rtdb.firebaseio.com/users.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    loginUser(data.username, data.password);
  });
}
