function isTokenValid() {
  const token = localStorage.getItem("authToken");
  const expiryDate = localStorage.getItem("expiresIn");

  if (!token || !expiryDate) return false;

  return new Date().getTime() < +expiryDate;
}

export default isTokenValid;
