import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart(){

    let state = useSelector((state) =>{return state})

    console.log(state);
    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>이름</th>
          <th>수량</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
            state.cart.map((a,i)=>{
                return <tr>
                <td>1</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>hi</td>
              </tr>
            })
        }
        
      </tbody>
    </Table>
        

    )

}

export default Cart