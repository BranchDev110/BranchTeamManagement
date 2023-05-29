import { colors } from "../../utils/color";
import "./index.css";

const TeamBadge = ({ data }) => {
  return <span className="teambadge" style={{backgroundColor: colors[data.id]}}>{data.name}</span>;
};

export default TeamBadge;
