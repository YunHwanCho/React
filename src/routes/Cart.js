import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { changeName,changeAge } from "./../store/userSlice.js";
import {changeCount} from "./../store.js"

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6>
      
      <button onClick={()=>{
        dispatch(changeAge(100))
      }}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>수량</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(changeCount(state.cart[i].id))
                  }}>+</button>

                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
