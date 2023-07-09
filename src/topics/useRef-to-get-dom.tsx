import { useRef } from "react"

export default function UseRefToGetDom() {
  const inputRef = useRef<HTMLInputElement>(null)

  // main part: execute every time the component rerender
  console.log("render")

  function onSubmit() {
    console.log({ name: inputRef.current?.value })
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={onSubmit}>Submit</button>
    </>
  )
}
