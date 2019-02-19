import './App.css'
import React, { useState } from 'react'

const Todo = ({ todo, index, deleteTodo, completeTodo }) => (
  <div
    style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    className="todo">
    {todo.text}
    <div>
      <button onClick={e => deleteTodo(index)}>x</button>
      <button onClick={e => completeTodo(index)}>ok</button>
    </div>
  </div>)

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add task..."
        onChange={e => setValue(e.target.value)}
      />

    </form>
  )
}
export function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about hooks',
      isCompleted: false
    },
    {
      text: 'Learn about react',
      isCompleted: false
    },
    {
      text: 'Learn about webdeveloper 2019',
      isCompleted: false
    }
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    console.log(newTodos)
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="list-todo">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;