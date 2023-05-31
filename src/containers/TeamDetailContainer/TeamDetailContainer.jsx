import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MemberTable } from "../../components/MemberTable";
import { RadialProgress } from "../../components/RadialProgress";

import "./index.css";

const TeamDetailContainer = () => {
  const { id } = useParams();
  const teams = useSelector((state) => state.team.value);
  const members = useSelector((state) => state.member.value);

  const data = teams.filter((item) => item.id.toString() === id)[0];
  const teamMember = members.filter((item) => item.team.id === data.id);

  return (
    <div className="teamdetail__container">
      <div className="widget teamdetail__info">
        <h2>{data?.name}</h2>
        <p>Steven Fredericks</p>
      </div>
      <div className="widget salary">
        <RadialProgress type="purple" value={68} />
        <div className="widget__info">
          <p className="widget__info__primary">130,000 ($)</p>
          <p className="widget__info__secondary">Total salary</p>
        </div>
      </div>
      <div className="widget workhour">
        <RadialProgress type="success" value={80} />
        <div className="widget__info">
          <p className="widget__info__primary">1,275 (hr)</p>
          <p className="widget__info__secondary">Total hour</p>
        </div>
      </div>
      <div className="widget projects">
        <RadialProgress type="primary" value={75} />
        <div className="widget__info">
          <p className="widget__info__primary">12</p>
          <p className="widget__info__secondary">Total project</p>
        </div>
      </div>
      <div className="memberlist">
        <h3>Members: </h3>
        <MemberTable data={teamMember} />
      </div>
    </div>
  );
};

export default TeamDetailContainer;
