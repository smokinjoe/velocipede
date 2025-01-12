import { useUserSession } from "@/client/hooks/useUserSession";

import { useMe, useOverview } from "@/client/hooks/usePelotonQueries";
import { useSelectedView } from "@/client/components/ui/PillNavigation/useSelectedView";

import { Loading } from "@/client/components/ui/Loading";
import { PillNavigation } from "@/client/components/ui/PillNavigation/PillNavigation";

import { UserDetails } from "./UserDetails";
import { WorkoutCounts } from "./WorkoutCounts";
import { WorkoutMetrics } from "./WorkoutMetrics";
import { Overview } from "./Overview";

const views = ["me", "overview"];

export const Me = () => {
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId, userId } = userSession;

  const selectedView = useSelectedView();

  const { data, isLoading } = useMe({
    isLoggedIn: isLoggedIn,
    sessionId,
  });

  const { data: overviewData, isLoading: overviewIsLoading } = useOverview({
    isLoggedIn: isLoggedIn,
    sessionId,
    userId,
  });

  if (isLoading || overviewIsLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  return (
    <>
      <PillNavigation views={views} selectedView={selectedView} />

      {selectedView === "me" ? (
        <>
          <div className="text-5xl font-bold col-span-12">Me Data</div>
          <UserDetails {...data.userDetails} />
          <WorkoutMetrics {...data.workoutMetrics} />
          <WorkoutCounts workouts={data.workoutCounts} />
        </>
      ) : (
        <>
          <div className="text-5xl font-bold col-span-12">Overview Data</div>
          <Overview overview={overviewData} />
        </>
      )}
    </>
  );
};
