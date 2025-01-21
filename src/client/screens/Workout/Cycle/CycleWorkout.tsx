import {
  Cycle,
  CycleDescriptors,
  CycleStats,
} from "@/common/types/WorkoutDetail";
import InstructorCard from "@/client/screens/Workout/Cycle/InstructorCard";

/**
 * Taken directly from WorkoutDetail.ts
 * Cycle.descriptors
 * TODO: create a CycleDescripors type
 */
type CycleSummaryCardProps = {
  details: CycleDescriptors;
};

const CycleSummaryCard = ({ details }: CycleSummaryCardProps) => {
  const { title, description, fitnessDisciplineDisplayName, imageUrl } =
    details;

  return (
    <div className="cycle-detail-card col-span-6 border-gray-400 border p-3 rounded-lg flex flex-col min-h-full grid grid-cols-6 gap-4">
      <img
        className="cycle-detail-card__image border shadow shadow-gray-200 col-span-3 "
        src={imageUrl}
        alt={title}
      />
      <div className="cycle-detail-card__information flex-grow mb-4 col-span-3">
        <div className="font-bold text-2xl">{title}</div>
        <div className="mb-3">{description}</div>
        <div className="font-bold">
          Fitness Discipline:{" "}
          <span className="font-normal">{fitnessDisciplineDisplayName}</span>
        </div>
      </div>
    </div>
  );
};

type CycleStatsCardProps = {
  stats: CycleStats;
};

const CycleStatsCard = ({ stats }: CycleStatsCardProps) => {
  return (
    <div className="cycle-stats-card col-span-12 border-gray-400 border p-3 rounded-lg min-h-full grid grid-cols-12 gap-4">
      <div className="font-bold text-2xl col-span-12">Workout Stats</div>

      <div className="col-span-3 border p-4 rounded border-gray-400">
        <div className="font-bold text-xl">Ratings</div>
        <div>Rating: {stats.rating}</div>
        <div>Total Ratings: {stats.totalRatings}</div>
        <div>Overall Rating Average: {stats.overallRatingAvg.toFixed(3)}</div>
        <div>Overall Rating Count: {stats.overallRatingCount}</div>
      </div>

      <div className="col-span-2 border p-4 rounded border-gray-400">
        <div className="font-bold text-xl">Pedaling</div>
        <div>Start Offset: {stats.pedalingStartOffset}</div>
        <div>End Offset: {stats.pedalingEndOffset}</div>
        <div>Duration: {stats.pedalingDuration}</div>
      </div>

      {/* This appears to be null often */}
      <div className="col-span-2 border p-4 rounded border-gray-400">
        <div className="font-bold text-xl">Distance</div>
        <div>Distance: {stats.distance}</div>
        <div>Unit: {stats.distanceUnit}</div>
        <div>Display Value: {stats.distanceDisplayValue}</div>
      </div>

      {/* Appears to be zero */}
      <div className="col-span-2 border p-4 rounded border-gray-400">
        <div className="font-bold text-xl">
          Class Average Follow Along Score
        </div>
        <div>{stats.classAvgFollowAlongScore}</div>
      </div>

      {/* Move .toFixed() to mapper */}
      <div className="col-span-3 border p-4 rounded border-gray-400">
        <div className="font-bold text-xl">Difficulty</div>
        <div>Difficulty Estimate: {stats.difficultyEstimate.toFixed(2)}</div>
        <div>Overall Estimate: {(stats.overallEstimate * 100).toFixed(2)}%</div>
        <div>Rating average: {stats.difficultyRatingAvg.toFixed(2)}</div>
        <div>Rating count: {stats.difficultyRatingCount.toFixed(2)}</div>
        <div>Difficulty level: {stats.difficultyLevel?.toFixed(2)}</div>
      </div>

      <div className="cycle-stats-card__information flex-grow mb-4 col-span-6">
        <div className="font-bold text-2xl">Workout Stats</div>
        <div className="mb-3">
          <div className="font-bold">Difficulty Estimate:</div>
          <div>{stats.difficultyEstimate}</div>
        </div>
        <div className="mb-3">
          <div className="font-bold">Overall Estimate:</div>
          <div>{stats.overallEstimate}</div>
        </div>
      </div>
    </div>
  );
};

type CycleProps = {
  workout: Cycle;
};

const CycleWorkout = ({ workout }: CycleProps) => {
  return (
    <>
      <InstructorCard instructor={workout.instructor} />
      <CycleSummaryCard details={workout.descriptors} />
      <CycleStatsCard stats={workout.stats} />
    </>
  );
};

export default CycleWorkout;
