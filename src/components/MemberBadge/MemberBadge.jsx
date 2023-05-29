import './index.css'

const MemberBadge = ({ data }) => {
  return (
    <div className="memberbadge">
      <img src={data} alt="Member Badge"/>
    </div>
  )
}

export default MemberBadge;