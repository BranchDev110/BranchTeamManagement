import "./index.css";

const MemberTableRow = ({ data }) => {
  return (
    <div className="tr">
      <div className="td col__user">
        <div className="td__avatar">
          <img src={data.avatar} alt="Avatar" />
        </div>
        <div className="td__contact">
          <p className="td__username">{`${data.first_name}  ${data.last_name}`}</p>
          <p className="td__email">{data.email}</p>
        </div>
      </div>
      <div className="td td__role col__role">{data.role}</div>
      <div className="td td__salary col__salary">{data.salary}</div>
      <div className="td td__joined col__joined">{data.joined_date}</div>
    </div>
  );
};

export default MemberTableRow;
