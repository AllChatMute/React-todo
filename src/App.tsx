import { useNavigate } from "react-router";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import logout from "./utils/logout";
import { useEffect } from "react";
import isTokenValid from "./utils/isTokenValid";

const App: React.FC = () => {
  const profile = localStorage.getItem("profile");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenValid()) navigate("/login");
  });
  return (
    <>
      <div className="main">
        <span>{profile}</span>
        <span
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <b>logout</b>
        </span>
        <h1>TO-DO LIST</h1>
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
};

export default App;
