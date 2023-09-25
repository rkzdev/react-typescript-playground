import { useCallback, useEffect, useState } from 'react'

export const UseCallback = () => {
  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState(0)

  const [num1] = useState(4)
  const [num2] = useState(5)

  // const sum = useCallback(() => num1 + num2, [num1, num2])

  const buildArray = useCallback(() => [num1, num2], [num1, num2])

  useEffect(() => {
    // console.log(`New sum. Value: ${sum()}`)
    // setResult(sum())

    console.log(`New array: ${buildArray()}`)
    setResult(buildArray().reduce((prev, curr) => prev + curr))
  }, [
    //sum
    buildArray
  ])

  return (
    <>
      <h2>useMemo usage</h2>

      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <h3>Output: {userInput || '--'}</h3>
      <h4>{result}</h4>
    </>
  )
}
