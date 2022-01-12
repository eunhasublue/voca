import { useRef } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");

  // 단어가 추가되면 추가된 날짜로 이동하기
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        // POST : 추가/생성(create)
        //POST로 생성하면 ID가 자동으로 부여됨
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // current : 해당 요소에 접근할 수 있게 해줌
          // value : input에 입력된 값을 얻을 수 있다.
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("저장 되었습니다.");
          // 해당 날짜 페이지로 이동할 주소 입력
          // <Link to={}> <a> tag 없이 페이지 전환시킬 때 사용
          history.push(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  // 저장버튼을 눌렀을 때, 단어와 뜻에 대한 정보를 찍어보기
  // -> useRef() 사용
  // input에 적힌 값들을 얻기 위해서
  // useRef()
  //  1. DOM에 접근할 수 있게 해줌
  //  2. ex) scroll 위치를 확인하거나, focus를 주거나 할 때.
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>ENGLISH</label>
        <input
          type="text"
          placeholder="Please enter English word input "
          ref={engRef}
        />
      </div>
      <div className="input_area">
        <label>KOREA</label>
        <input
          type="text"
          placeholder="Please enter the Korean meaning"
          ref={korRef}
        />
      </div>
      <div className="input_area">
        <label>DAY SELECT</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "SAVE"}
      </button>
    </form>
  );
}
