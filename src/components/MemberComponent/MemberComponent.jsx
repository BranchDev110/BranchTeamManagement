import { TeamBadge } from "../TeamBadge";
import { colors } from "../../utils/color";
import "./index.css";

const MemberComponent = ({ data }) => {
  return (
    <div className="member__card">
      <div className="member__card__header" style={{backgroundColor: colors[data.id % 10]}}>
        <img src={data.avatar} alt="Avatar" />
      </div>
      <div className="member__card__body">
        <p className="member__card__body__name">{`${data.first_name} ${data.last_name}`}</p>
        <p className="member__card__body__email">{data.email}</p>
        <div className="member__card__body__team">
          <TeamBadge data={data.team} />
        </div>
      </div>
      <div className="member__card__footer">
        <a href="/">View Detail</a>
      </div>
    </div>
  );
};

export default MemberComponent;
