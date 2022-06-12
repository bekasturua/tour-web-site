const submitBtn =  document.getElementsByClassName('submit_btn')[0];
submitBtn.addEventListener('click', () => {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        return;
    }
    const newPassword =  document.getElementsByClassName('new_password')[0].value;
    const confirmNewPassword = document.getElementsByClassName('confirm_new_password')[0].value;
    if(newPassword === confirmNewPassword) {
        user.password = confirmNewPassword;
        changePassword(user);
    }
});

function changePassword(user) {
    fetch(`http://localhost:3000/users/${user.id}`, {   
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        
    });
  }

