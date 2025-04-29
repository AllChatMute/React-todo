import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import isTokenValid from "../utils/isTokenValid";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (email && password && username) {
        const response = await axios.post(
          "http://localhost:3000/auth/register",
          {
            email,
            username,
            password,
          }
        );

        const expiryDate = new Date().getTime() + 3600 * 1000;

        localStorage.setItem("authToken", response.data);
        localStorage.setItem("profile", email);
        localStorage.setItem("expiresIn", expiryDate.toString());

        navigate("/tasks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isTokenValid()) navigate("/tasks");
  });
  return (
    <>
      <div className="flex-wrapper">
        <div className="registration">
          <div className="registration__title-block">
            <img
              src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643745-human-man-people-person-profile_113435.png"
              alt=""
            />
            <h1>Регистрация</h1>
          </div>

          <div className="registration__form">
            <div className="registration__form-field">
              <label htmlFor="email">Введите Email:</label>
              <input
                type="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="registration__form-field">
              <label htmlFor="username">Введите имя:</label>
              <input
                type="text"
                id="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="registration__form-field">
              <label htmlFor="password">Введите пароль:</label>
              <input
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="registration__done">
              <button onClick={handleRegister}>Создать аккаунт</button>
              <span>
                Уже есть аккаунт? <Link to="/login"> Войти</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
