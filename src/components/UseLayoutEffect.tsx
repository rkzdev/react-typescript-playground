import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const UseLayoutEffect = () => {
  const [number, setNumber] = useState(0)
  const [sectionStyle, setSectionStyle] = useState({})
  const sectionRef = useRef(null)

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * 500)
  //
  //   for (let i = 0; i <= 1_000_000_00; i++) {
  //     if (i === 1_000_000_00) setSectionStyle({ paddingTop: `${random}px` })
  //   }
  // }, [number])

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500)

    for (let i = 0; i <= 1_000_000_00; i++) {
      if (i === 1_000_000_00) setSectionStyle({ paddingTop: `${random}px` })
    }
  }, [number])

  return (
    <>
      <h2>useLayoutEffect usage</h2>

      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>

        <div>
          <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
          <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
        </div>
      </section>
    </>
  )
}
