import { useTodoContext } from '../contexts/TodoContext'
import TodoItem from './TodoItem'
function CompletedTodos () {
  const { completed } = useTodoContext()

  return (
    <div className='bg-gray-700 border rounded-lg p-6 shadow-sm'>
      <h2 className='text-xl font-bold mb-4 text-gray-200'>Completed Todos</h2>
      {completed.length === 0 && (
        <p className='text-gray-400'>No completed todos</p>
      )}
      <ul className='space-y-3'>
        {completed.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default CompletedTodos
