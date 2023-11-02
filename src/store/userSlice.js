
import {createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 23},
    reducers : {
      changeName(state){
        state.name = 'park'
      },
      changeAge(state,action){
        //파라미터를 뚫어놓으면 같은 함수를 쓰지 않아도 가능함.
        state.age += action.payload;
      }
      
        
      
    }
})
export default user
export let {changeName, changeAge} = user.actions