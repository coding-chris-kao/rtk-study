import { useAppSelector } from "../app/hooks"
import Counter from "../features/counter/Counter"
import { selectCount } from "../features/counter/counterSlice"

export default function UpdateNumberInRedux() {
  console.log("UpdateNumberInRedux")

  const counter = useAppSelector(selectCount)
  console.log("counter", counter)

  return <Counter />
}
