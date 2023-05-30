import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useSelector } from "react-redux";

const Header = () => {
  const route = useSelector((state) => state.route.value);

  return (
    <div className="header">
      <h2>{route.displayName}</h2>
      <span className="breadcumb">
        <FontAwesomeIcon icon={faHome} /> Home {`${route.id !== 0 ? `/ ${route.displayName}` : ''}`}
      </span>
    </div>
  );
};

export default Header;
