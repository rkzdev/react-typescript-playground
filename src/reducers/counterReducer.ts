export type CounterActionType = {
  type: 'increment' | 'decrement'
  payload: number
}

export type CounterState = {
  count: number
}

export const counterReducer = (
  state: CounterState,
  action: CounterActionType
) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
  }
}
