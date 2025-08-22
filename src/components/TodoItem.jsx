import { useTodoContext } from '../contexts/TodoContext'

function TodoItem ({ todo }) {
  const { deleteTodo, completeTodo, unCompleteTodo } = useTodoContext()
  const handleComplete = () => {
    completeTodo(todo.id)
  }

  const handleDelete = () => {
    if (window.confirm('Sure want to delete this todo ?')) {
      deleteTodo(todo)
    }
  }

  const handleUncomplete = () => {
    unCompleteTodo(todo.id)
  }

  return (
    <li className='bg-gray-800 text-gray-300 p-3 rounded-md border-l-4 border-purple-500 flex items-center justify-between'>
      <span className='flex-grow mr-4 break-words'>{todo.title}</span>
      <div className='flex-shrink-0 flex items-center gap-2'>
        {todo.isCompleted === false ? (
          <button
            onClick={handleComplete}
            className='bg-green-500 hover:bg-green-600 text-white text-xs px-2 py-1 rounded'
          >
            Complete
          </button>
        ) : (
          <button
            onClick={handleUncomplete}
            className='bg-green-500 hover:bg-green-600 text-white text-xs px-2 py-1 rounded'
          >
            Uncomplete
          </button>
        )}
        <button
          onClick={handleDelete}
          className='bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded'
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
