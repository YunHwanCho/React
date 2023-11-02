import { configureStore,createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'



let stock = createSlice({
    name : 'stock',
    initialState : [10,20,30]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'white and black', count :2},
        {id : 1, name : 'black and white', count :1},
        {id : 2, name : ' white', count :6}
    ],
    reducers : {
      changeCount(state, action){
        let number = state.findIndex((a)=>{return a.id === action.payload})
        state[number].count++;
         
        }

      }
    
    

})
export let {changeCount} = cart.actions


export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer

  }
}) 


// state 변경의 방법 
//  1. state 함수 미리 만들어 놓기
//  2. useDispatch를 사용해서 변경함수에 요청하기
