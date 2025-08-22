import { createContext, useState, useEffect, useContext } from 'react'

const TodoContext = createContext()

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : []
  })

  const [completed, setCompleted] = useState(() => {
    const storedCompleted = localStorage.getItem('completed')
    return storedCompleted ? JSON.parse(storedCompleted) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed))
  }, [completed])

  const addTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const deleteTodo = deleteTodo => {
    if (deleteTodo.isCompleted === false) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== deleteTodo.id))
    } else {
      setCompleted(prevCompleted =>
        prevCompleted.filter(todo => todo.id !== deleteTodo.id)
      )
    }
  }

  const completeTodo = todoId => {
    let completedTodo = todos.find(todo => todo.id === todoId)
    if (!completeTodo) return
    completedTodo = { ...completedTodo, isCompleted: true }
    const updatedTodos = todos.filter(todo => todo.id !== todoId)

    setTodos(updatedTodos)
    setCompleted(prevCompleted => [...prevCompleted, completedTodo])
  }

  const unCompleteTodo = todoId => {
    let uncompletedTodo = completed.find(todo => todo.id === todoId)
    if (!uncompletedTodo) return
    uncompletedTodo = { ...uncompletedTodo, isCompleted: false }
    const updatedCompleted = completed.filter(todo => todo.id !== todoId)

    setCompleted(updatedCompleted)
    setTodos(prevTodos => [...prevTodos, uncompletedTodo])
  }

  const value = {
    todos,
    completed,
    addTodo,
    deleteTodo,
    completeTodo,
    unCompleteTodo
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
