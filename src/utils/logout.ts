function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("expiresIn");
  localStorage.removeItem("profile");
}

export default logout;
