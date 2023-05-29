import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { MemberContainer, TeamContainer, TodoContainer } from "./containers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MemberContainer />} />
      <Route path="/member" element={<MemberContainer />} />
      <Route path="/team" element={<TeamContainer />} />
      <Route path="/todo" element={<TodoContainer />} />
    </Routes>
  );
};

export default App;
