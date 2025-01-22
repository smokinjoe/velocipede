import { CycleStats } from "@/common/types/WorkoutDetail";

type CycleStatsCardProps = {
  stats: CycleStats;
};

const CycleStatsCard = ({ stats }: CycleStatsCardProps) => {
  return (
    <div className="cycle-stats-card col-span-12 border-gray-400 border p-3 rounded-lg min-h-full grid grid-cols-10 gap-4">
      <div className="font-bold text-2xl col-span-12">Ride details</div>

      <div className="col-span-2 border p-4 rounded border-gray-400 shadow-lg">
        <div className="font-bold text-xl">Ratings</div>
        <div>Rating: {stats.rating}</div>
        <div>Total Ratings: {stats.totalRatings}</div>
        <div>Overall Rating Average: {stats.overallRatingAvg.toFixed(3)}</div>
        <div>Overall Rating Count: {stats.overallRatingCount}</div>
      </div>

      <div className="col-span-2 border p-4 rounded border-gray-400 shadow-lg">
        <div className="font-bold text-xl">Pedaling</div>
        <div>Start Offset: {stats.pedalingStartOffset}</div>
        <div>End Offset: {stats.pedalingEndOffset}</div>
        <div>Duration: {stats.pedalingDuration}</div>
      </div>

      {/* This appears to be null often */}
      <div className="col-span-2 border p-4 rounded border-gray-400 shadow-lg">
        <div className="font-bold text-xl">Distance</div>
        <div>Distance: {stats.distance}</div>
        <div>Unit: {stats.distanceUnit}</div>
        <div>Display Value: {stats.distanceDisplayValue}</div>
      </div>

      {/* Appears to be zero */}
      <div className="col-span-2 border p-4 rounded border-gray-400 shadow-lg">
        <div className="font-bold text-xl">
          Class Average Follow Along Score
        </div>
        <div>{stats.classAvgFollowAlongScore}</div>
      </div>

      {/* Move .toFixed() to mapper */}
      <div className="col-span-2 border p-4 rounded border-gray-400 shadow-lg">
        <div className="font-bold text-xl">Difficulty</div>
        <div>Difficulty Estimate: {stats.difficultyEstimate.toFixed(2)}</div>
        <div>Overall Estimate: {(stats.overallEstimate * 100).toFixed(2)}%</div>
        <div>Rating average: {stats.difficultyRatingAvg.toFixed(2)}</div>
        <div>Rating count: {stats.difficultyRatingCount.toFixed(2)}</div>
        <div>Difficulty level: {stats.difficultyLevel?.toFixed(2)}</div>
      </div>

      <div className="col-span-10 grid gap-3 grid-cols-9">
        <div className="text-2xl font-bold col-span-9">Body Parts</div>
        {stats.muscleGroupScore.map((muscleGroup) => (
          <div
            key={muscleGroup.muscleGroup}
            className="col-span-1 gap-4 border border-gray-400 rounded-lg p-3 shadow-lg"
          >
            <div className="font-bold">{muscleGroup.displayName}</div>
            <div className="">{muscleGroup.score.toFixed(2)}</div>
            <div className="">{muscleGroup.percentage.toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CycleStatsCard;
