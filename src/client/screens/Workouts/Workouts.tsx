import { useUserSession } from "@/client/hooks/useUserSession";

import { useWorkouts } from "../../hooks/usePelotonQueries";
import { Loading } from "@/client/components/ui/Loading";
import { Table } from "@/client/components/ui/Table";

export const Workouts = () => {
  const { userSession } = useUserSession();

  const { isLoggedIn, sessionId, userId } = userSession;

  const { data, isLoading } = useWorkouts({
    isLoggedIn: isLoggedIn,
    userId,
    sessionId,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  const { workouts: workoutData } = data;

  return (
    <>
      <div className="text-3xl col-span-12">Workouts Data</div>
      <Table data={workoutData} />
    </>
  );
};
