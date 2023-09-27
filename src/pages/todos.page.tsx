import { useReducer, useState } from 'react'
import { TodosState, todosReducer } from '../reducers/todosReducer'

const initialState: TodosState = {
  tasks: []
}

export const TodosPage = () => {
  const [todosState, dispatch] = useReducer(todosReducer, initialState)
  const [input, setInput] = useState('')

  const handleCreateTask = () => {
    dispatch({ type: 'create', payload: input })
    setInput('')
  }

  const handleRemoveTask = (id: number) => {
    dispatch({ type: 'delete', payload: id })
  }

  const handleCompleteTask = (id: number) => {
    dispatch({ type: 'complete', payload: id })
  }

  return (
    <div className="mt-8">
      <h1>Todos Page</h1>

      <div className="flex gap-2">
        <div>
          <label htmlFor="" className="sr-only">
            Task
          </label>
          <input
            className="border border-gray-200 py-1.5 px-3 rounded outline-teal-500"
            type="text"
            placeholder="task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          onClick={handleCreateTask}
          className="text-sm font-semibold bg-teal-500 text-white py-2 px-3 rounded hover:bg-teal-600"
        >
          Create Task
        </button>
      </div>

      <div>
        <h2>Tasks List</h2>

        {todosState.tasks.length > 0 && (
          <div className="max-w-sm">
            {todosState.tasks.map((task) => (
              <div key={task.id} className="flex justify-between mb-2">
                <p>
                  {task.id} - {task.name}
                </p>
                <div className="space-x-4">
                  <span className="text-xs">
                    {task.completed ? 'completed' : 'in-progress'}
                  </span>
                  <button
                    onClick={() => handleCompleteTask(task.id)}
                    className="w-6 h-6 bg-blue-500 text-white text-xs rounded disabled:bg-gray-200"
                    disabled={task.completed}
                  >
                    ✔
                  </button>
                  <button
                    onClick={() => handleRemoveTask(task.id)}
                    className="w-6 h-6 bg-red-500 text-white text-xs rounded"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
