import React from "react";
import { useSelector } from "react-redux";
import { TeamComponent } from "../../components/TeamComponent";

import './index.css';
import TeamAddComponent from "../../components/TeamAddComponent/TeamAddComponent";

const TeamContainer = () => {
  const team = useSelector((state) => state.team.value);
  
  return (
    <div className="team__container">
      <TeamAddComponent />
      {team.map((item, index) => (
        <TeamComponent data={item} key={`team-${index}`}/>
      ))}
    </div>
  );
};

export default TeamContainer;
