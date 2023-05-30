import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import apiService from "./helper/ApiService";
import { MemberContainer, TeamContainer, TodoContainer, DashboardContainer, Sidebar, Header } from "./containers";
import { setTeam } from "./store/slice/teamSlice";
import { setMember } from "./store/slice/memberSlice";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

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
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/member" element={<MemberContainer />} />
            <Route path="/team" element={<TeamContainer />} />
            <Route path="/todo" element={<TodoContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
