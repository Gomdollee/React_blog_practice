import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const post = 'Stx Network Service';
  const [글제목, 글제목변경] = useState(['가산디지털단지역', '여의도 샛강역', '서울의 봄']);
  const [따봉, 따봉변경] = useState(0);
  const [modal, setModal] = useState(false);

   // a 는 state에 보관했던 자료 나옴 
   // b 는 state 변경도와주는 함수

  return (
    <div className="App">
        <div className='black-nav'>
          <h4>Stx Network Service</h4>
        </div>
{/* 
        <button onClick={() => {
          const copy = [...글제목];
          copy[1] = '여의도 한강역';
          글제목변경(copy);
          }}>글수정</button> */}

          <button onClick={() => {
            const copy = [...글제목];
            copy.sort();
            글제목변경(copy);
          }}>가나다순 정렬</button>

        <div className='list'>
          <h4>{ 글제목[0] } <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{ 글제목[1] }</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4 onClick={() => {
            setModal(true)
          }}>{ 글제목[2] }</h4>
          <p>2월 17일 발행</p>
        </div>
        <button onClick={() => {
          setModal(!modal)
        }}> {글제목[2]}</button>
        {
          modal == true ? <Modal/> : null // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        }

        <h2>{ post }</h2>
    </div>

  );
}

function Modal(){
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

 
export default App;
