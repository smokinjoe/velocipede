import { Cycle } from "@/common/types/WorkoutDetail";
import InstructorCard from "@/client/screens/Workout/Cycle/InstructorCard";
import CycleSummaryCard from "./CycleSummaryCard";
import CycleStatsCard from "./CycleStatsCard";

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
