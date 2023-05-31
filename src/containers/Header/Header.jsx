import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useLocation } from "react-router-dom";
import { router } from "../../utils/routeName";

const Header = () => {
  const location = useLocation();

  const path = location.pathname.split("/").at(1);

  const index = router.findIndex((item) => item.routeName === path);

  return (
    <>
      {index !== -1 && (
        <div className="header">
          <h2>{router[index].displayName}</h2>
          <span className="breadcumb">
            <FontAwesomeIcon icon={faHome} /> Home{" "}
            {`${
              index !== 0 ? `/ ${router[index].displayName}` : ""
            }`}
          </span>
        </div>
      )}
    </>
  );
};

export default Header;
