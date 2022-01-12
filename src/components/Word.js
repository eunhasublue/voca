import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWords] = useState(w);
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
      // put : 수정(update)
      method: "PUT",
      headers: {
        // Content-Type : 보내는 리소스의 타입
        "Content-Type": "application/json",
      },
      // put은 수정에 필요한 정보를 보내줘야 함 -> body에 입력
      // JSON.stringify : json 문자열로 변환
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWords({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
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
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
