import { CSSProperties, useEffect, useMemo, useState } from "react"

function slowFunction(number: number) {
  console.log("calling slow function")
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2
}

export default function UseMemoUseCases() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // 1. use useMemo to cache the slowFunction result
  const doubleNumber = useMemo(() => slowFunction(number), [number])

  // 2. use useMemo to avoid unexpected referential equality check of useEffect
  const themeStyle = useMemo<CSSProperties>(
    () => ({
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }),
    [dark],
  )

  useEffect(() => {
    console.log("Theme Changed")
  }, [themeStyle])

  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value))
        }}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark)
        }}
      >
        Change Theme
      </button>
      <span>{doubleNumber}</span>
    </div>
  )
}
