import { useUserSession } from "@/client/hooks/useUserSession";
import { useMe } from "../../hooks/usePelotonQueries";
import { Loading } from "@/client/components/ui/Loading";
import { UserDetails } from "./UserDetails";
import { WorkoutCounts } from "./WorkoutCounts";
import { WorkoutMetrics } from "./WorkoutMetrics";

export const Me = () => {
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId } = userSession;

  const { data, isLoading } = useMe({
    isLoggedIn: isLoggedIn,
    sessionId,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  return (
    <>
      <div className="text-5xl font-bold col-span-12">Me Data</div>
      <UserDetails {...data.userDetails} />
      <WorkoutMetrics {...data.workoutMetrics} />
      <WorkoutCounts workouts={data.workoutCounts} />
    </>
  );
};
