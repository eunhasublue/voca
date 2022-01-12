// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  // dummy.words
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  // const [words, setWords] = useState([]);

  // // 1. DayList.js 컴포넌트와 코드가 url 주소말고 동일하기 때문에 이것을 커스텀 훅으로 만들어 줄 수 있다.
  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => setWords(data));
  // }, [day]);

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
