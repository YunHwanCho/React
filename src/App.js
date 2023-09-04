import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.jpg";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";
import styled from 'styled-components'
import Detail from "./Detail.js";
import axios from 'axios'



function App() {
  let [shoes, setshoes] = useState(data);
  let navigate = useNavigate();
  let [cnt, setcnt ] = useState(0);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Portfolio1</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() =>{navigate('/')}}>shop</Nav.Link>
            <Nav.Link onClick={() =>{navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link onClick={() =>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={() =>{navigate('/event')}}>Event</Nav.Link>
            <Button variant="outline-dark" className="Nav-button">
              My
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>

              <div className="container">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <Card shoes={shoes[i]} i={i + 1}></Card>;
                  })}
                </div>
              </div>
            </div>
          }
        />

        <Route path="/detail" element={<Detail shoes ={shoes}/>}/>
        {/* <Route path="/detail/:id" element={<Detail shoes ={shoes}/>}/> */}


        <Route path="*" element={<div>X</div>} />
        <Route path="/about" element={<About/>}>
          <Route path = "member" element={<div>멤버임</div>} />
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path = "one" element=
          {<div>
            <p>조윤환 서비스</p>
          </div>} />
        </Route>
        {/* //Nested routes */}
      </Routes>

      <button onClick={()=>{
        //로딩중 ui띄우기

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          let copy = [...shoes, ...result.data];
          setshoes(copy);
          //로딩중ui 숨기기

        })
        .catch(()=>{
          console.log('실패함 ㅅㄱ')
        })

      }}>더 많은 상품 보기</button>

    </div>
  );
}

export default App;

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}



function About(){
  return(
    <div>회사 정보
      <h4>h2h2</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Event(){
  let navigate = useNavigate();
  return(
    <div>
      <h4>오늘의 이벤트</h4>
     
      <Outlet></Outlet>
    </div>
  )
}

function Main(){
  
  return(
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Portfolio1</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >shop</Nav.Link>
            <Nav.Link >toss</Nav.Link>
            <Nav.Link >About</Nav.Link>
            <Nav.Link >Event</Nav.Link>
            <Button variant="outline-dark" className="Nav-button">
              My
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>
  )
}