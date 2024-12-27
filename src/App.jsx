import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let post = '강남 우동 맛집';

  let [글제목,글제목변경] = useState(['다남자 코트 추천','나여자 코트 추천','가맛집 추천']);
  let [따봉,따봉변경] = useState(0);
 
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button  onClick={()=>{ 
        let copy = [...글제목];
        copy[0] ='여자코트 추천'
          글제목변경(copy); 
        }}>글수정
      </button>

      
      <button  onClick={()=>{ 
          let orderList = [...글제목.sort()];
          글제목변경(orderList); 
        }}>정렬하기
      </button>


      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉++)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>




      <Modal></Modal>
      <Modal/>




    </div>

    
  )
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
   </div>

  )
}


export default App
