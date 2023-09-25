import { useMemo, useState } from 'react'

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

export const UseMemo = () => {
  const [userNumber, setUserNumber] = useState('')
  const [randomInput, setRandomInput] = useState('')

  const fibNumber = useMemo(() => fib(userNumber), [userNumber])

  return (
    <>
      <h2>useMemo usage</h2>

      <div>
        <label>Fibonacci Sequence:</label>
        <input
          type="number"
          value={userNumber}
          placeholder="Position"
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <p>Number: {fibNumber || '--'}</p>
      </div>

      <div>
        <label htmlFor="">Random Input:</label>
        <input
          type="text"
          value={randomInput}
          onChange={(e) => setRandomInput(e.target.value)}
        />
      </div>
    </>
  )
}
