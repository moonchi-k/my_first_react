import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="#/">메인 페이지</Link>
        </li>
        <li>
          <Link to="/sub01">1번 페이지</Link>
        </li>
        <li>
          <Link to="/sub02">2번 페이지</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
