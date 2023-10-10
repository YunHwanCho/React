import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import data from "../data.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// let YellowBtn = styled.button`
//   background : yellow;
//   color:black;
//   padding :10px;

// `

// let Box = styled.div`
//     background : grey;
//     padding : 20px;
// `

//style-component 쓰는 법

function Detail(props) {
  let [box, setbox] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  let[탭,탭변경] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => {
      setbox(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
    // return문이 더 먼저 실행된다.
  }, []);

  useEffect(() => {
    // 입력값이 한글인지 숫자인지 검사하는 함수
    const isKorean = (text) => {
      const koreanRegex = /^[가-힣]*$/;
      return koreanRegex.test(text);
    };

    const isNumber = (text) => {
      const numberRegex = /^[0-9]*$/;
      return numberRegex.test(text);
    };

    // 입력값 검사
    if (isKorean(inputValue)) {
      setIsValid(false);
    } else if (isNumber(inputValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputValue]);
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  //장착될때, 업데이트 될때 동작시점은 html이후에 시작한다 즉 -> ux가 좋아짐
  // []이 쪽을 비워놓으면 mount될 때만 실행 됨

  let { id } = useParams();

  return (
    <div className="container">
      {box && <div className="alert alert-warning">2초 이내 구매시 할인</div>}

      {box == true ? (
        <div className="alert alert-"> </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>

        
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes.title}</h4>
          <p>{props.shoes.content}</p>
          <p>{props.shoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() =>{탭변경(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() =>{탭변경(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() =>{탭변경(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tabcontroller 탭 = {탭}/>
    </div>
  );
}

function Tabcontroller(props){
  if(props.탭 == 0){
    return <div>내용0</div>
  }
  if(props.탭 == 1){
    return <div>내용1</div>
  }
  if(props.탭 == 2){
    return <div>내용2</div>
  }
}

export default Detail;
