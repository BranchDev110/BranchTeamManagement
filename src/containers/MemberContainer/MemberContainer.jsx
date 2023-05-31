import React from "react";
import { useSelector } from "react-redux";

import { MemberComponent } from "../../components/MemberComponent";
import "./index.css";

const MemberContainer = () => {
  const member = useSelector((state) => state.member.value);

  return (
    <div className="member__container">
      {member.map((item, index) => (
        <MemberComponent data={item} key={`member-${index}`} />
      ))}
    </div>
  );
};

export default MemberContainer;
