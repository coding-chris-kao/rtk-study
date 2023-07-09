import { useAppSelector } from "../app/hooks"
import ArrayComp from "../features/array/array"
import { selectArray } from "../features/array/array.slice"

export default function UpdateArrayInRedux() {
  console.log("UpdateArrayInRedux")

  const array = useAppSelector(selectArray)
  const { value } = array
  console.log("array", value.length)

  return <ArrayComp />
}
