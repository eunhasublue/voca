import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone);
    // fecth()
    // 1. 2번째 인자로 객체를 넣어줌
    //  1-1. 객체에는 요청의 옵션을 입력
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        // Content-Type : 보내는 리소스의 타입
        "Content-Type": "application/json",
      },
      body,
    });
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
