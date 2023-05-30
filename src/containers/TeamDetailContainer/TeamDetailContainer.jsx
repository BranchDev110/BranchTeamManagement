import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TeamDetailContainer = () => {
  const {id} = useParams();
  const team = useSelector((state) => state.team.value);

  const data = team.filter((item) => item.id.toString() === id)[0];

  return (
    <>
      {data.name}
    </>
  )
}

export default TeamDetailContainer;