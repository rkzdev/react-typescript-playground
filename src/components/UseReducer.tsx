import { useReducer } from 'react'
import { CounterState, counterReducer } from '../reducers/counterReducer'

const initialState: CounterState = { count: 0 }

export const UseReducer = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState)

  return (
    <>
      <h2>useReducer usage</h2>

      <p>Count: {counterState.count}</p>

      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}
