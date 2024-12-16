import React, {useState} from 'react';
import {TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import {Todo} from './Todo';
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo, deadline) => {
        setTodos([...todos, 
          {id: uuidv4(), 
            task: todo, 
            completed: false, 
            isEditing: false,
            deadline: deadline || null}]) // default to null is no deadline 
        console.log(todos)
    }

    const toggleComplete = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id, deadline) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, task, deadline, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
      <h1>Mayesha's Todo</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo) => (
        todo.isEditing ? (
        <EditTodoForm 
          editTodo={editTask} 
          task={todo} 
          key={todo.id} // use id for unique key 
        />
        ) : ( 
        <Todo 
          task={todo} 
          key={todo.id} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo}
          editTodo={editTodo} 
        />
      )
      ))}
    </div>
  )
}