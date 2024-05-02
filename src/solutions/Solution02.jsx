import {useState} from 'react'

const Solution02 = () => {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState(['hi', 'there', 'newTodo'])


  return (
    <div>
      <h1>Todo List</h1>
      <button type="submit">Submit</button>
      <input type="todoText" />
      {todo.map((info, index) => (
      <div key={index}>
        {info}
      </div>
      ))}
    </div>
  );
};

export default Solution02;
// add submit button 
// add input field
// input field needs state that is updated per event
// onClick save input as state and create a new todo
// map through array of todos

