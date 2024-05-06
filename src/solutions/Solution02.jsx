import { useState } from "react";

function Todo({ id, task, todo, setTodo }) {
  const deleteTodo = () => {
    const filtered = todo.filter(checkId);

    function checkId(todos) {
      return todos.id !== id;
    }
    setTodo(filtered);

  };
  return (
    <>
      <p>{task}</p>
      <button onClick={deleteTodo}>DELETE</button>
    </>
  );
}

// need to debug Todo component

export default function Solution02() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [taskId, setTaskId] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    setTaskId((prevIdAdd1) => prevIdAdd1 + 1);
    let ob = { id: taskId, task: text };
    todo.push(ob);
    setTodo(todo);
    setText("");
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={handleTextChange} />
        <button type="submit">Submit</button>
      </form>
      {todo.map((info) => (
        <div key={info.id}>
          <Todo id={info.id} task={info.task} todo={todo} setTodo={setTodo} />
        </div>
      ))}
    </div>
  );
}
