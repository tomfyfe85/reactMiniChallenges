import { useState } from "react";

function Todo({id, task}) {
  return (
    <>
      
      <p>{task}</p>
    </>
  )
}

export default function Solution02() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    todo.push(text);

    const newArr = todo;
    setTodo(newArr); // const newTodos = todo.push(text)
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
      {todo.map((info, index) => (
        <div key={index}><Todo id={index} task={info} /></div>
      ))}
    </div>
  );
};

// add submit button
// add input field
// input field needs state that is updated per event
// onClick save input as state and create a new todo
// map through array of todos
