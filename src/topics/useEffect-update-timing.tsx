import { useEffect, useState } from "react"

export default function UseEffectUpdateTiming() {
  const [name, setName] = useState("Chris")
  const [room, setRoom] = useState("room")

  // main part: execute every time the component "rerender"
  console.log("render")

  // always put useEffect behind the main part
  useEffect(() => {
    console.log("set name")

    // when name changes, trigger the component to "rerender"
  }, [name])

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <input
        value={room}
        onChange={(e) => {
          setRoom(e.target.value)
        }}
      />
      {name}
    </>
  )
}
