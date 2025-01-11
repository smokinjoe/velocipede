import { useUserSession } from "@/client/hooks/useUserSession";
import { useMe, useOverview } from "../../hooks/usePelotonQueries";
import { Loading } from "@/client/components/ui/Loading";
import { usePillNavigation } from "@/client/components/ui/PillNavigation/usePillNavigation";

import { UserDetails } from "./UserDetails";
import { WorkoutCounts } from "./WorkoutCounts";
import { WorkoutMetrics } from "./WorkoutMetrics";
import { Overview } from "./Overview";
import { PillNavigation } from "@/client/components/ui/PillNavigation/PillNavigation";

const views = ["me", "overview"];

export const Me = () => {
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId, userId } = userSession;

  const { currentView, handleViewChange } = usePillNavigation(views[0]);

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
      <PillNavigation
        views={views}
        currentView={currentView}
        handleViewChange={handleViewChange}
      />

      {currentView === "me" ? (
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
