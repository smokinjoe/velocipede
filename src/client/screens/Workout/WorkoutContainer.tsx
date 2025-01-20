import { useParams } from "react-router-dom";

import { asCycle, asWalk } from "@/common/types/WorkoutDetail";
import { assertNever } from "@/common/utils/assertions";

import { Loading } from "@/client/components/ui/Loading";
import { useWorkout } from "@/client/hooks/usePelotonQueries";
import { useUserSession } from "@/client/hooks/useUserSession";

import Walk from "./Walk";
import Cycle from "./Cycle";
import { DataList } from "@/client/components/ui/DataList";

const WorkoutContainer = () => {
  const { id } = useParams();
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId } = userSession;
  const { data, isLoading } = useWorkout({ id, isLoggedIn, sessionId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  /**
   * Provide a different view based on fitnessDiscipline
   */
  const fitnessDisciplines = {
    walking: "walking",
    cycling: "cycling",
  };

  const renderDiscipline = () => {
    switch (data.descriptors.fitnessDiscipline) {
      case fitnessDisciplines.walking:
        return <Walk workout={asWalk(data.ride)} />;
        break;
      case fitnessDisciplines.cycling:
        return <Cycle workout={asCycle(data.ride)} />;
        break;
      default:
        assertNever(
          data.descriptors.fitnessDiscipline as never,
          `Invalid fitness discipline: ${data.descriptors.fitnessDiscipline}.`
        );
    }
  };

  const { stats } = data;
  const { ftpInfo } = stats;
  const {
    hasLeaderboardMetrics,
    leaderboardRank,
    totalLeaderboardUsers,
    isTotalWorkPersonalRecord,
    hasPedalingMetrics,
    averageEffortScore,
    totalHeartRateZoneDurations,
    totalWork,
  } = stats;

  const formattedStats = {
    hasLeaderboardMetrics,
    leaderboardRank,
    totalLeaderboardUsers,
    isTotalWorkPersonalRecord,
    hasPedalingMetrics,
    averageEffortScore,
    totalHeartRateZoneDurations,
    totalWork,
  };

  return (
    <>
      <div className="text-3xl col-span-12">Workout</div>
      <div className="text-xl col-span-12">Workout ID: {id}</div>
      <div className="text-3xl col-span-12">Instructor</div>
      <DataList data={data.descriptors} />
      <DataList data={formattedStats} />
      <DataList data={ftpInfo} />
      {renderDiscipline()}
    </>
  );
};

export default WorkoutContainer;
