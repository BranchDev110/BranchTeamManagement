import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import apiService from "./helper/ApiService";
import { MemberContainer, TeamContainer, TodoContainer, DashboardContainer, Sidebar, Header, ErrorContainer } from "./containers";
import { setTeam } from "./store/slice/teamSlice";
import { setMember } from "./store/slice/memberSlice";

import "./App.css";
import { router } from "./utils/routeName";
import { set } from "./store/slice/routeSlice";
import { TeamDetailContainer } from "./containers/TeamDetailContainer";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    apiService
      .getTeam()
      .then((data) => {
        dispatch(setTeam(data.teams));
      })
      .catch((error) => console.log(error));

    apiService
      .getMember()
      .then((data) => {
        dispatch(setMember(data.members));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  useEffect(() => {
    const path = location.pathname.split('/').at(1);
    let index = router.findIndex((item) => item.routeName === path);
    dispatch(set({id: index, ...router[index]}));
  }, [location.pathname])
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/members" element={<MemberContainer />} />
            <Route path="/teams" element={<TeamContainer />} />
            <Route path="/todo" element={<TodoContainer />} />
            <Route path="/team/:id" element={<TeamDetailContainer />} />
            <Route path="*" element={<ErrorContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
