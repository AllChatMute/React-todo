const TaskInput: React.FC = () => {
  return (
    <>
      <form className="" action="index.html" method="post">
        <input type="text" placeholder="new task" name="task"></input>
        <button type="submit">
          <strong>ADD</strong>
        </button>
      </form>
    </>
  );
};

export default TaskInput;
