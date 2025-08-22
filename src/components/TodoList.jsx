import AllTodos from './AllTodos'
import CompletedTodos from './CompletedTodos'

function TodoList () {
  return (
    <section className='p-6 sm:p-8'>
      <div className='grid md:grid-cols-2 gap-6'>
        <AllTodos />
        <CompletedTodos />
      </div>
    </section>
  )
}

export default TodoList
