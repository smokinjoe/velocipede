import { useParams } from "react-router-dom";

import { asCycle, asWalk } from "@/common/types/WorkoutDetail";
import { assertNever } from "@/common/utils/assertions";

import { Loading } from "@/client/components/ui/Loading";
import { useWorkout } from "@/client/hooks/usePelotonQueries";
import { useUserSession } from "@/client/hooks/useUserSession";

import WalkWorkout from "./WalkWorkout";
import CycleWorkout from "./Cycle/CycleWorkout";
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
        return <WalkWorkout workout={asWalk(data.ride)} />;
        break;
      case fitnessDisciplines.cycling:
        return <CycleWorkout workout={asCycle(data.ride)} />;
        break;
      default:
        assertNever(
          data.descriptors.fitnessDiscipline as never,
          `Invalid fitness discipline: ${data.descriptors.fitnessDiscipline}.`
        );
    }
  };

  /**
   * Description details
   */
  const { descriptors } = data;
  const formattedDescriptors = {
    workoutDetails: "",
    name: descriptors.name,
    createdAt: descriptors.createdAt,
    duration: `${(descriptors.endTime - descriptors.startTime) / 60} minutes`,
    device: descriptors.deviceTypeDisplayName,
    status: descriptors.status,
  };

  /**
   * Stats details
   */
  const { stats } = data;
  const { ftpInfo } = stats;
  const {
    hasLeaderboardMetrics,
    leaderboardRank,
    totalLeaderboardUsers,
    isTotalWorkPersonalRecord,
    // hasPedalingMetrics,
    // averageEffortScore,
    // totalHeartRateZoneDurations,
    totalWork,
  } = stats;

  const formattedStats = {
    hasLeaderboardMetrics,
    leaderboardRank,
    totalLeaderboardUsers,
    isTotalWorkPersonalRecord: isTotalWorkPersonalRecord ? "Yes" : "No",
    // averageEffortScore,
    // totalHeartRateZoneDurations,
    totalWork: `${(totalWork / 1000).toFixed(2)} kJ`,
    ftp: ftpInfo.ftp,
  };

  const statRowTitles = {
    hasLeaderboardMetrics: "Record & Stat Details",
    leaderboardRank: "Leaderboard Rank",
    totalLeaderboardUsers: "Leaderboard Total",
    isTotalWorkPersonalRecord: "Personal Record?",
    totalWork: "Total Work",
    ftp: "Average FTP",
  };

  return (
    <>
      <div className="text-3xl col-span-12">Workout Details</div>
      <div className="text-xl col-span-12">Workout ID: {id}</div>

      {/* Simple description details */}
      <DataList
        rowTitles={{
          createdAt: "Workout Date",
          workoutDetails: "Workout Details",
        }}
        data={formattedDescriptors}
        columns={6}
        span={4}
        titleWidth={2}
        definitionWidth={2}
      />

      {/* Leaderboard and record details */}
      <DataList
        data={formattedStats}
        rowTitles={statRowTitles}
        columns={6}
        span={4}
        titleWidth={3}
        definitionWidth={2}
      />

      {renderDiscipline()}
    </>
  );
};

export default WorkoutContainer;
