import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";
import {
  faDashboard,
  faPeopleGroup,
  faTasks,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../store/slice/routeSlice";
import { router } from "../../utils/routeName";

const Sidebar = () => {
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.route.value);

  const handleItemClick = (index) => {
    dispatch(set({id: index, ...router[index]}));
  }

  const getClassName = (index) => {
    return `sidebar__list__item ${currentRoute.id === index && 'sidebar__list__item--active'}`;
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
          <Link to="/teams">
            <FontAwesomeIcon icon={faPeopleGroup} /> <span>Teams</span>
          </Link>
        </li>
        <li className={getClassName(2)} onClick={() => handleItemClick(2)}>
          <Link to="/members">
            <FontAwesomeIcon icon={faUser} /> <span>Members</span>
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
