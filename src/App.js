import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const post = 'Stx Network Service';
  const [글제목, 글제목변경] = useState(['가산디지털단지역', '여의도 샛강역', '서울의 봄']);
  const [like, setLike] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
    const handleseLike = (i) => {
      const copyLike = [...like];
      copyLike[i] = copyLike[i] + 1;
      setLike(copyLike);
    }
  const [title , setTitle] = useState(0);
  const [입력값, 입력값변경] = useState('');

   // a 는 state에 보관했던 자료 나옴 || b 는 state 변경도와주는 함수

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

        {/* <div className='list'>
          <h4>{ 글제목[0] } <span onClick={() => { setLike(like+1) }}>👍</span> { like } </h4>
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
        </div> */}

        {
          글제목.map(function(a, i){ //i는 반복문 돌 때 마다 0부터 1씩 증가하는 정수 
            return (
              <div className='list' key={i}>
                <h4 onClick={() => {setModal(true); setTitle(i)}}>{ 글제목[i] } <span onClick={ (e) => { e.stopPropagation(); handleseLike(i)}}>👍</span> {like[i]} </h4> 
                <p>2월 17일 발행</p>
                <button onClick={() => {
                  const copy = [...글제목];
                  copy.splice(i,1);
                  글제목변경(copy);
                }}>삭제하기</button>
              </div>
            )
          })
        }

        {/* <button onClick={() => {
          setModal(!modal)
        }}> {글제목[2]}</button> */}
        {
          modal == true ? <Modal color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        }

        <input onChange={ (e) => {
          입력값변경(e.target.value);
          console.log(입력값)
        }}></input>
        <button onClick={() => {
            const copy = [...글제목];
            copy.unshift(입력값);
            글제목변경(copy);
        }}>글작성하기</button>

        <h2>{ post }</h2>
    </div>

  );
}



function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          const copy = [...props.글제목];
          copy[0] ='여의도 한강역';
          props.글제목변경(copy);
        }}>글수정</button>
    </div>
  )
}

 
export default App;
