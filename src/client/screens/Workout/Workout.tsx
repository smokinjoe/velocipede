import { useParams } from "react-router-dom";

const Workout = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Workout</h1>
      <p>Workout ID: {id}</p>
    </div>
  );
};

export default Workout;
