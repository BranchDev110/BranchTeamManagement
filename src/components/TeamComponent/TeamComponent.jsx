import { useSelector } from "react-redux";
import { colors } from "../../utils/color";
import { MemberBadge } from "../MemberBadge";
import "./index.css";

const TeamComponent = ({ data }) => {
  const member = useSelector((state) => state.member.value);
  const teamMember = member.filter((item) => item.team.id === data.id);

  return (
    <div className="team" style={{ backgroundColor: colors[data.id] }}>
      <h2>{data.name}</h2>
      <h4>Manager: Steven Fredericks</h4>
      <h4>Salary: $500k/yr</h4>
      <p className="team__date">Team created: May 1, 2023</p>
      <div className="members">
        {teamMember
          .slice(0, 2)
          .map((item, index) => (
            <MemberBadge
              key={`member-badge-${data.id}-${index}`}
              data={item.avatar}
            />
          ))}
        <span>{teamMember.length > 2 && `+${teamMember.length - 2}`}</span>
      </div>
    </div>
  );
};

export default TeamComponent;
