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
  fetch("https://easytravel-d1779-default-rtdb.firebaseio.com/users.json")
    .then((res) => {
      return res.json();
    })
    .then((usersJson) => {
      const users = Object.entries(usersJson).map((userJson) => {
        return { ...userJson[1], id: userJson[0] };
      });
      console.log(users);
      const user = Object.values(users).filter(
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
