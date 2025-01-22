import { WorkoutStats } from "@/common/types/WorkoutDetail";
import { DataList } from "@/client/components/ui/DataList";

type StatsProps = {
  stats: WorkoutStats;
};

const Stats = ({ stats }: StatsProps) => {
  /**
   * Stats details
   */
  const { ftpInfo } = stats;
  const {
    // hasLeaderboardMetrics,
    leaderboardRank,
    totalLeaderboardUsers,
    isTotalWorkPersonalRecord,
    // hasPedalingMetrics,
    // averageEffortScore,
    // totalHeartRateZoneDurations,
    totalWork,
  } = stats;

  const formattedStats = {
    // hasLeaderboardMetrics,
    leaderboardRank,
    totalLeaderboardUsers,
    isTotalWorkPersonalRecord: isTotalWorkPersonalRecord ? "Yes" : "No",
    // averageEffortScore,
    // totalHeartRateZoneDurations,
    totalWork: `${(totalWork / 1000).toFixed(2)} kJ`,
    ftp: ftpInfo.ftp,
  };

  const statRowTitles = {
    leaderboardRank: "Leaderboard Rank",
    totalLeaderboardUsers: "Leaderboard Total",
    isTotalWorkPersonalRecord: "Personal Record?",
    totalWork: "Total Work",
    ftp: "Average FTP",
  };

  return (
    <DataList
      data={formattedStats}
      rowTitles={statRowTitles}
      columns={6}
      span={4}
      titleWidth={3}
      definitionWidth={2}
      title="Leaderboard & Record Details"
    />
  );
};

export default Stats;
