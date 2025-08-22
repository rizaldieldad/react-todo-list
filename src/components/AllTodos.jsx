import TodoItem from './TodoItem'
import { useTodoContext } from '../contexts/TodoContext'

function AllTodos () {
  const { todos } = useTodoContext()

  return (
    <div className='bg-gray-700 rounded-lg p-6 shadow-sm'>
      <h2 className='text-xl font-bold mb-4 text-gray-200'>All Todos</h2>
      {todos.length === 0 && (
        <p className='text-gray-400'>No completed todos</p>
      )}
      <ul className='space-y-3'>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default AllTodos
