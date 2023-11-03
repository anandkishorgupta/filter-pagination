import { useDispatch } from "react-redux"
import { setMinRating } from "../../../redux/productSlice"
const Rating = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <p onClick={() => dispatch(setMinRating(1))}>1 & above</p>
      <p
        onClick={() => dispatch(setMinRating(2))}
      >2 & above</p>
      <p
        onClick={() => dispatch(setMinRating(3))}
      >3 & above</p>
      <p
        onClick={() => dispatch(setMinRating(4))}
      >4 & above</p>
      <p
        onClick={() => dispatch(setMinRating(4.5))}
      >4.5 & above</p>
    </div>
  )
}

export default Rating