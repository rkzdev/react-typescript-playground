export type IncrementAction = {
  type: 'increment'
  payload: number
}

export type DecrementAction = {
  type: 'decrement'
  payload: number
}

export type ResetAction = {
  type: 'reset'
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction

export type CounterState = {
  count: number
}

export const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return { count: 0 }
  }
}
