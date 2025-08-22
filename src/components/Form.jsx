import { useState } from 'react'
import { useTodoContext } from '../contexts/TodoContext'

function Form () {
  const { addTodo } = useTodoContext()
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const newTodo = { id: Date.now(), title, isCompleted: false }

    addTodo(newTodo)
    setTitle('')
  }

  return (
    <section className='p-6 sm:p-8'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col sm:flex-row items-center justify-center gap-4'
      >
        <input
          type='text'
          placeholder='What needs to be done ??'
          className='flex-grow w-full sm:w-auto p-3 bg-gray-700 text-white border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
          autoFocus
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <button
          type='submit'
          className='w-full sm:w-auto bg-purple-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-200'
        >
          Save
        </button>
      </form>
    </section>
  )
}

export default Form
