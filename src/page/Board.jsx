import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Board({boardlist}) {
  // params 값으로 전달할 수 있는 내용은 숫자형과 문자형
  // 값으로 받아오면 문자형으로 들어온다
  const params = useParams();
  const navigate = useNavigate();

  // boardlist는 전체 배열의 값
  // 지금 필요한 값은 배열 중에서 id의 값이 params.id와 동일한 객체
  // >> find() 메소드 이용
  const board = boardlist.find( (b) => (b.id === parseInt(params.id)) );

  /** 
   * 리액트 컴포넌트의 실행 순서
   * 1. 컴포넌트 안에 있는 순서대로 자바스크립트 실행
   * 2. return을 통해서 화면 출력
   * 3. useEffect() 마운트할 때 자바스크립트 실행
   */
  useEffect( () => {
    if (board === undefined) {
      navigate('/');
    }
  },[] );

  return (
    <div>
      {
        board && (
          <div>
            <h1>{board.title}</h1>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
              <span>{board.id}</span>
              <span>작성자 : {board.name}</span>
              <span>작성날짜 : {board.date}</span>
            </div>
            <p>{board.content}</p>
          </div>
        )
      }
    </div>
  )
}
