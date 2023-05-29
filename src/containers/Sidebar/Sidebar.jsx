import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";
import {
  faDashboard,
  faPeopleGroup,
  faTasks,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [curIndex, setCurIndex] = useState(0);

  const handleItemClick = (index) => {
    setCurIndex(index);
  }

  const getClassName = (index) => {
    return `sidebar__list__item ${curIndex === index && 'sidebar__list__item--active'}`;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="https://photos.wellfound.com/startups/i/7406443-3be75e3b543b0aee4efd6fcb52a7d810-medium_jpg.jpg?buster=1589308628" alt="logo" width={100} height={100}/>
        <p>Sprint FWD</p>
      </div>
      <ul className="sidebar__list">
        <li className={getClassName(0)} onClick={() => handleItemClick(0)}>
          <Link to="/">
            <FontAwesomeIcon icon={faDashboard} /> <span>Dashboard</span>
          </Link>
        </li>
        <li className={getClassName(1)} onClick={() => handleItemClick(1)}>
          <Link to="/team">
            <FontAwesomeIcon icon={faPeopleGroup} /> <span>Team</span>
          </Link>
        </li>
        <li className={getClassName(2)} onClick={() => handleItemClick(2)}>
          <Link to="/member">
            <FontAwesomeIcon icon={faUser} /> <span>Member</span>
          </Link>
        </li>
        <li className={getClassName(3)} onClick={() => handleItemClick(3)}>
          <Link to="/todo">
            <FontAwesomeIcon icon={faTasks} /> <span>Todo List</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
