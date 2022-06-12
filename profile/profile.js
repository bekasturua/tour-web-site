window.addEventListener("load", () => {
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  const profile = document.getElementsByClassName("profile_section")[0];
  if (user) {
    profile.insertAdjacentHTML(
      "afterend",
      `
      <div class="profile_title">
        <h1><i class="fa-solid fa-user"></i>  Profile</h1>
      </div>
      <div class="profile">
          <div class="profile_letter">
              <h1>Name: ${user.username}  </h1>
              <h1>E_Mail: ${user.email} </h1>
              <a href="../changePassword/index.html"><button class="change_password_btn">Change password</button></a>
          </div>
      </div>`
    );
  }
});
