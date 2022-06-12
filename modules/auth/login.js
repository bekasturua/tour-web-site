export function login() {
  const loginBtn = document.querySelectorAll(".modal__action")[1];
  loginBtn.addEventListener("click", userLogin);
}

function userLogin() {
  const email = document.querySelector(".login_email").value;
  const password = document.querySelector(".login_password").value;
  if (!email.trim() || !password.trim()) {
    return;
  }
  loginUser(email, password);
}

export function loginUser(email, password) {
  fetch("http://localhost:3000/users")
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      const user = users.filter(
        (user) => user.email === email && user.password === password
      );
      if (user.length === 1) {
        localStorage.setItem("loggedInUser", JSON.stringify(user[0]));
        location.reload();
      } else {
        alert("User not found");
      }
    });
}