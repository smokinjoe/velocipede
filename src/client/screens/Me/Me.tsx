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

const Me = () => {
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId, userId } = userSession;

  const selectedView = useSelectedView();

  const {
    data,
    isLoading,
    isError: isMeError,
  } = useMe({
    isLoggedIn: isLoggedIn,
    sessionId,
  });

  const {
    data: overviewData,
    isLoading: overviewIsLoading,
    isError: isOverviewError,
  } = useOverview({
    isLoggedIn: isLoggedIn,
    sessionId,
    userId,
  });

  if (isLoading || overviewIsLoading) {
    return <Loading />;
  }

  const renderMe = () => {
    if (!data || isMeError) {
      return <div>There was an error fetching your Me data</div>;
    }

    return (
      <>
        <div className="text-5xl font-bold col-span-12 mb-5">Me Data</div>
        <UserDetails {...data.userDetails} />
        <WorkoutMetrics {...data.workoutMetrics} />
        <WorkoutCounts workouts={data.workoutCounts} />
      </>
    );
  };

  return (
    <div data-testid="me" className="col-span-12">
      <PillNavigation views={views} selectedView={selectedView} />

      {selectedView === "me" ? (
        renderMe()
      ) : (
        <>
          <div className="text-5xl font-bold col-span-12 mb-5">
            Overview Data
          </div>
          {!overviewData || isOverviewError ? (
            <div>There was an error fetching your Overview data</div>
          ) : (
            <Overview overview={overviewData} />
          )}
        </>
      )}
    </div>
  );
};

export default Me;
