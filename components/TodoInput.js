import React, { useState } from 'react'
import Router from 'next/router'
import { toast } from 'react-toastify'
import axios from 'axios'

const TodoInput = () => {
  const [todo, setTodo] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/todo', { todo })
      toast.success(res.data.msg)
      setTodo('')

      setTimeout(() => {
        Router.reload()
      }, 3000)
    } catch (err) {
      toast.error(err.response.data.msg)
    }
  }

  return (
    <div>
      <h2 className='text-center text-secondary mt-4'>Todo List</h2>

      <form className='input-group mt-4 mb-5 shadow' onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo}
          className='form-control'
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type='submit' className='btn btn-dark'>
          Create
        </button>
      </form>
    </div>
  )
}

export default TodoInput
