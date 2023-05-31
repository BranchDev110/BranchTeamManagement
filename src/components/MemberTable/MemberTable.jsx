import MemberTableRow from "../MemberTableRow/MemberTableRow";

import "./index.css";

const MemberTable = ({ data }) => {
  return (
    <div className="table">
      <div className="thead">
        <div className="tr">
          <div className="th col__user">User</div>
          <div className="th col__role">Role</div>
          <div className="th col__salary">Salary</div>
          <div className="th col__joined">Joined date</div>
        </div>
      </div>
      <div className="tbody">
        {data.map((item) => (
          <MemberTableRow data={item} key={`table-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
};

export default MemberTable;
