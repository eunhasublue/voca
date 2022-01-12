import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }
  // 처음에는 빈배열로 만들고 API list를 가져와서 바꿔주는 방식으로 하기
  // 데이터가 바뀌면 자동으로 젠더링
  // const [days, setDays] = useState([]);

  // API 호출 전에 useEffect
  // 1. 어떤 상태값이 바뀌었을 때, 동작하는 함수임
  // 2. useEffect는 첫번쨈 매개변수로 함수를 넣음
  // 3. useEffect() 함수가 호출된 타이밍은 랜더링 결과가 실제 돔에 반영된 직후 (결과값이 다 보여지고 나서..)
  // 4. 그리고, 컴포넌트가 사라지기 직전에도 호출됨.
  // 5. 상태값이 변경되서, 다시 랜더링된 다음에 호출됨
  // 6. 랜더링을 끝내고 어떤 작업을 하고 싶다면 예를들어 API 호출같은 것
  // 7. 두번째 매개변수로 배열을 넣음 (의존성 배열)
  // 8. 의존성 배열이 변경되는 경우만 첫번째 매개변수인 함수가 실행됨
  // 9. 여기서 useEffect 목적은 api 호출
  // 10. 렌더링이 되고 api를 호출한다. -> 렌더링이 되고 최초 한번만 api 호출 -> 그럴 경우 의존성 배열에 빈배열 입력
  // 11. api 비동기 통신을 위해서 fetch를 이용함 -> fetch(api 경로 입력) -> 그 후, promise가 반환됨.
  // 12. 여기서 res는 http 응답이고, 실제 json은 아님..그래서 json 메소드 사용해줌 -> 이렇게 하면 json으로 변환되고 promise를 반환
  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => setDays(data));
  // }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
