import './index.css';

const MemberComponent = ({ data }) => {
  return (
    <div className="member__card">
      <div className="member__card__header">
      </div>
      <div className="member__card__body">
        <p>{`${data.first_name} ${data.last_name}`}</p>
        <p>{data.email}</p>
      </div>
      <div className="member__card__footer">
      </div>
    </div>
  );
};

export default MemberComponent;
