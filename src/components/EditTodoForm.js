import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const [deadline, setDeadline] = useState(task.deadline)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id, deadline) // call the editTodo function from TodoWrapper.js
        setValue('') // clear the input after submitting
        setDeadline('')
    }
  return (
    <form className= 'TodoForm' onSubmit={handleSubmit}> 
        <input 
          type='text' 
          className='todo-input' 
          value={value}
          placeholder='Update Task' 
          onChange={(e) => setValue(e.target.value)} 
        />
        <input
          type='date'
          className='todo-date'
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)} 
        />
        <button type='submit' className='todo-btn'>
          Update 
        </button>
    </form>
  )
}