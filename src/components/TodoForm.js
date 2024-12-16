import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const [deadline, setDeadline] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value, deadline) // call the addTodo function from TodoWrapper.js
                                 // takes in bot the task and deadline 
        setValue('') // clear the input after submitting
        setDeadline('')
    }
  return (
    <form className= 'TodoForm' onSubmit={handleSubmit}> 
        <input 
          type='text' 
          className='todo-input' 
          value={value}
          placeholder='What is the task today' 
          onChange={(e) => setValue(e.target.value)} />
        <input 
          type='date' 
          className='todo-date' 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} />
        <button type='submit' className='todo-btn' >
          Add Task
        </button>
    </form>
  )
}