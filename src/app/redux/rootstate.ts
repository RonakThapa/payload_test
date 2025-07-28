import { counterSlice } from './reducers/cartSlice'

type rootState = {
  [counterSlice.name]: ReturnType<typeof counterSlice.reducer>
}

export default rootState
