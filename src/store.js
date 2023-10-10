import { configureStore,createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name : 'user',
    initialState : 'kim'
})


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
    ]
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer

  }
}) 