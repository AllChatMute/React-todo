import { useState } from "react";
import { Link } from "react-router";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
              <input type="email" id="email" />
            </div>
            <div className="registration__form-field">
              <label htmlFor="username">Введите имя:</label>
              <input type="text" id="username" />
            </div>
            <div className="registration__form-field">
              <label htmlFor="password">Введите пароль:</label>
              <input type="password" id="password" />
            </div>
            <div className="registration__done">
              <button>Создать аккаунт</button>
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
