import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Members</h2>
      <span className="breadcumb">
        <FontAwesomeIcon icon={faHome} /> Home / Members
      </span>
    </div>
  );
};

export default Header;
