import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/slice/memberSlice";
import apiService from "../../helper/ApiService";
import { MemberComponent } from "../../components/MemberComponent";
import './index.css';

const MemberContainer = () => {
  const member = useSelector((state) => state.member.value);
  const dispatch = useDispatch();

  useEffect(() => {
    apiService
      .getMember()
      .then((data) => {
        dispatch(set(data.members));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  
  return (
    <div className="member__container">
      {member.map((item, index) => (
        <MemberComponent data={item} key={`member-${index}`}/>
      ))}
    </div>
  );
};

export default MemberContainer;
