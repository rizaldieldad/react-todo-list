import './App.css'

import Footer from './components/Footer'
import Form from './components/Form'
import Hero from './components/Hero'
import TodoList from './components/TodoList'

import { TodoProvider } from './contexts/TodoContext'

function App () {
  return (
    <TodoProvider>
      <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8'>
        {/* container for the content */}
        <div className='bg-gray-800 rounded-xl shadow-lg max-w-2xl w-full overflow-hidden'>
          <Hero />
          <Form />
          <TodoList />
        </div>

        <Footer />
      </div>
    </TodoProvider>
  )
}

export default App
