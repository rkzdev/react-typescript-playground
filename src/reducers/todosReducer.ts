export interface Task {
  id: number
  name: string
  completed: boolean
}

export type CreateAction = {
  type: 'create'
  payload: string
}

export type DeleteAction = {
  type: 'delete'
  payload: number
}

export type CompleteAction = {
  type: 'complete'
  payload: number
}

export type TodosState = {
  tasks: Task[]
}

export type TodosActions = CreateAction | DeleteAction | CompleteAction

export const todosReducer = (state: TodosState, action: TodosActions) => {
  switch (action.type) {
    case 'create': {
      const task: Task = {
        id: Math.floor(Math.random() * 500),
        name: action.payload,
        completed: false
      }

      return { tasks: [...state.tasks, task] }
    }
    case 'complete': {
      return {
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.payload) {
              task.completed = true
            }
            return task
          })
        ]
      }
    }
    case 'delete':
      return {
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)]
      }
    default:
      throw Error()
  }
}
