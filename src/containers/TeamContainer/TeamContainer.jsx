import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/slice/teamSlice";
import apiService from "../../helper/ApiService";

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
    <ul>
      {team.map((item, index) => (
        <li key={`team-${index}`}>{item.name}</li>
      ))}
    </ul>
  );
};

export default TeamContainer;
