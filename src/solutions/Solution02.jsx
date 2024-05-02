import { useState } from "react";

function Todo({ id, req, todo, setTodo }) {
  const deleteTodo = (e) => {
    e.preventDefault();

    const newArr = todo.forEach((todoOb) => {
      if (todoOb.id === id) {
        const alteredArray = todo.slice(id);
      }
    });
    return setTodo(newArr);
  };

  return (
    <>
      <p>{req}</p>
      <button onClick={deleteTodo}>DELETE</button>
      <br />
    </>
  );
}

export default function Solution02() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(1);

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
      {todo?.map((info, index) => (
        <div key={index}>
          <Todo id={index} req={info.task} todo={todo} setTodo={setTodo} />
          {console.log(info)}
          {console.log(info.task)}

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
