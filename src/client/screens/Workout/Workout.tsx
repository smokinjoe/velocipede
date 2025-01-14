import { useWorkout } from "@/client/hooks/usePelotonQueries";
import { useUserSession } from "@/client/hooks/useUserSession";
import { useParams } from "react-router-dom";

const Workout = () => {
  const { id } = useParams();
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId } = userSession;
  const { data } = useWorkout({ id, isLoggedIn, sessionId });

  return (
    <div>
      <h1>Workout</h1>
      <p>Workout ID: {id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Workout;
