import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      axios.post("http://localhost:5173/auth/login", {
        email,
        password,
      });
    }
  };
  return (
    <>
      <div className="flex-wrapper">
        <div className="registration">
          <div className="registration__title-block">
            <img
              src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643745-human-man-people-person-profile_113435.png"
              alt=""
            />
            <h1>Вход</h1>
          </div>

          <div className="registration__form">
            <div className="registration__form-field">
              <label htmlFor="email">Введите email:</label>
              <input
                type="text"
                id="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="registration__form-field">
              <label htmlFor="password">Введите пароль:</label>
              <input
                type="password"
                id="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <div className="registration__done">
              <button onClick={handleLogin}>Войти</button>
              <span>
                Нет аккаунта?
                <Link to="/"> Зарегистрироваться</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
