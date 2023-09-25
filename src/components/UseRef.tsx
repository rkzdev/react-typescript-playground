import { useRef, useState } from 'react'

export const UseRef = () => {
  const [randomInput, setRandomInput] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [isTimerStarted, setIsTimerStarted] = useState(false)

  const renders = useRef(0)
  const intervalRef = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // e.currentTarget is the element to which the event is attached.
    // e.target is the element that triggered the event
    setRandomInput(e.currentTarget.value)
    renders.current++
  }

  const focusOnInput = () => {
    inputRef.current?.focus()
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

  const handleResetTimer = () => {
    if (seconds) {
      setSeconds(0)
    }

    clearInterval(intervalRef.current)
  }

  return (
    <>
      <h2>useRef usage</h2>

      <input
        autoFocus
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
        ref={inputRef}
      />

      <p>Renders: {renders.current}</p>
      <br />

      <button onClick={focusOnInput}>Focus</button>

      <p>{randomInput}</p>

      <div>
        <h4>{seconds}</h4>
        <button onClick={handleStartTimer} disabled={isTimerStarted}>
          Start Timer
        </button>
        <button onClick={handleStopTimer} disabled={!isTimerStarted}>
          Stop timer
        </button>
        <button onClick={handleResetTimer} disabled={!seconds}>
          Reset timer
        </button>
      </div>
    </>
  )
}
