import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {});
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
