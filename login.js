const login = document.querySelector(".login");
const register = document.querySelector(".register");
const registerBtn = document.querySelector(".newAcc");
const loginBtn = document.querySelector(".acc");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerBtn.addEventListener("click", () => {
  register.classList.add("visible");
  register.classList.remove("invisible");
  login.classList.add("invisible");
  login.classList.remove("visible");
});

loginBtn.addEventListener("click", () => {
  login.classList.add("visible");
  login.classList.remove("invisible");
  register.classList.add("invisible");
  register.classList.remove("visible");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;

  if (localStorage.getItem(username)) {
    alert("Username already exists. Please choose a different one.");
  } else {
    localStorage.setItem(username, JSON.stringify({ name, password }));
    alert("Registration successful! You can now log in.");
    loginBtn.click();
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  const userData = JSON.parse(localStorage.getItem(username));
  if (userData && userData.password === password) {
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});