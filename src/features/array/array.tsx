import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./array.module.css"
import { append, clear, replace, selectArray } from "./array.slice"

export default function ArrayComp() {
  const array = useAppSelector(selectArray)
  const { value } = array
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(append(["test"]))}
        >
          Append
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(replace(["test"]))}
        >
          Replace
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(clear(["test"]))}
        >
          Clear
        </button>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>{value.join(",")}</span>
      </div>
    </div>
  )
}
