import { useState } from "react";

function Todo({ id, task }) {
  return (
    <>
      <p>{task}</p>
      <button>DELETE</button>
      <br />
    </>
  );
}

export default function Solution02() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setId((prevIdAdd1) => prevIdAdd1 + 1);

    let ob = { id: id, task: text };

    todo.push(ob);
    setTodo(todo); // const newTodos = todo.push(text)
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
          <Todo id={info.id} task={info.task} />

          <br />
        </div>
      ))}
    </div>
  );
}

// add submit button
// add input field
// input field needs state that is updated per event
// onClick save input as state and create a new todo
// map through array of todos
