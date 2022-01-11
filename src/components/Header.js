import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Toeic Word(Advanced)</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          word add
        </a>
        <a href="#x" className="link">
          Day add
        </a>
      </div>
    </div>
  );
}
