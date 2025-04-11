import { Link } from "react-router";

const Login: React.FC = () => {
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

          <form action="post" className="registration__form">
            <div className="registration__form-field">
              <label htmlFor="login">Введите логин:</label>
              <input type="text" id="login" />
            </div>
            <div className="registration__form-field">
              <label htmlFor="password">Введите пароль:</label>
              <input type="password" id="password" />
            </div>

            <div className="registration__done">
              <button>Войти</button>
              <span>
                Нет аккаунта?
                <Link to="/register">Зарегистрироваться</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
