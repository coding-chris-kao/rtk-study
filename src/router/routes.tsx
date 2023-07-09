import { PathRouteProps } from "react-router-dom"
import UpdateArrayInRedux from "../topics/update-array-in-redux"
import UpdateNumberInRedux from "../topics/update-number-in-redux"
import UseEffectUpdateTiming from "../topics/useEffect-update-timing"
import UseMemoUseCases from "../topics/useMemo-use-cases"
import UseRefToGetDom from "../topics/useRef-to-get-dom"

export const routes: PathRouteProps[] = [
  {
    path: "/update-number-in-redux",
    element: <UpdateNumberInRedux />,
  },
  {
    path: "/update-array-in-redux",
    element: <UpdateArrayInRedux />,
  },
  {
    path: "/useEffect-update-timing",
    element: <UseEffectUpdateTiming />,
  },
  {
    path: "/useMemo-use-cases",
    element: <UseMemoUseCases />,
  },
  {
    path: "/useRef-to-get-dom",
    element: <UseRefToGetDom />,
  },
]
