import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { MemberContainer, TeamContainer, TodoContainer, DashboardContainer, Sidebar } from "./containers";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/member" element={<MemberContainer />} />
          <Route path="/team" element={<TeamContainer />} />
          <Route path="/todo" element={<TodoContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
