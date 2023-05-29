import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/slice/teamSlice";
import apiService from "../../helper/ApiService";
import { TeamComponent } from "../../components/TeamComponent";

import './index.css';
import TeamAddComponent from "../../components/TeamAddComponent/TeamAddComponent";

const TeamContainer = () => {
  const team = useSelector((state) => state.team.value);
  const dispatch = useDispatch();

  useEffect(() => {
    apiService
      .getTeam()
      .then((data) => {
        dispatch(set(data.teams));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  
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
