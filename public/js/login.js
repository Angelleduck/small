const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v2/login",
      data: {
        email,
        password,
      },
    });
    if (res.data.status == "success") {
      alert("Logged in successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector(".key_email").value;
  const password = document.querySelector(".key_password").value;

  login(email, password);
});
