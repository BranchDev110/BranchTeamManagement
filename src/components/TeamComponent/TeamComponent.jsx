import { colors } from "../../utils/color";
import "./index.css";

const TeamComponent = ({ data }) => {
  return (
    <div className="team" style={{ backgroundColor: colors[data.id] }}>
      <h2>{data.name}</h2>
      <h4>Manager: Steven Fredericks</h4>
      <h4>Salary: $500k/yr</h4>
      <p className="team__date">Team created: May 1, 2023</p>
      <div className="members"></div>
    </div>
  );
};

export default TeamComponent;
