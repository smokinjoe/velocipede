import { useWorkout } from "@/client/hooks/usePelotonQueries";
import { useUserSession } from "@/client/hooks/useUserSession";
import { useParams } from "react-router-dom";

const Workout = () => {
  const { id } = useParams();
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId } = userSession;
  const { data } = useWorkout({ id, isLoggedIn, sessionId });

  return (
    <>
      <div className="text-3xl col-span-12">Workout</div>
      <div className="text-xl col-span-12">Workout ID: {id}</div>
      <div className="col-span-12">{JSON.stringify(data)}</div>
    </>
  );
};

export default Workout;
