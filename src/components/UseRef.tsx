import { useRef, useState } from 'react'

export const UseRef = () => {
  const [randomInput, setRandomInput] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [isTimerStarted, setIsTimerStarted] = useState(false)

  const renders = useRef(0)
  const intervalRef = useRef(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // e.currentTarget is the element to which the event is attached.
    // e.target is the element that triggered the event
    setRandomInput(e.currentTarget.value)
    renders.current++
  }

  const handleStartTimer = () => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    intervalRef.current = intervalId

    setIsTimerStarted(true)
  }

  const handleStopTimer = () => {
    clearInterval(intervalRef.current)

    setIsTimerStarted(false)
  }

  return (
    <>
      <h2>useRef usage</h2>

      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />

      <p>Renders: {renders.current}</p>
      <br />

      <p>{randomInput}</p>

      <div>
        <h4>{seconds}</h4>
        <button onClick={handleStartTimer} disabled={isTimerStarted}>
          Start Timer
        </button>
        <button onClick={handleStopTimer}>Stop timer</button>
      </div>
    </>
  )
}
