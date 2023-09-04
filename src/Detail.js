import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import data from "./data.js";

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
  let [box,setbox] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

    useEffect(()=>{

      let a = setTimeout(() => {
        setbox(false) }, 2000)
        return () => {
          clearTimeout(a)

        }
        // return문이 더 먼저 실행된다.


    }, [])

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

    
    let {id} = useParams();


    return (
        
      <div className="container">
        {box && <div className="alert alert-warning">2초 이내 구매시 할인</div>}
        
        {
          box == true ? <div className="alert alert-">2초 이내 구매시 할인 </div> :null
        }
        <div className="row">
          <div className="col-md-6">
            <img  
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isValid == false ? (
        <p>경고 숫자로만 쓰세요</p>
      ) : null}
    </div>
          
          
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
  }

  export default Detail;