import { Cycle as CycleType } from "@/common/types/WorkoutDetail";
import InstructorCard from "@/client/screens/Workout/InstructorCard";

type CycleProps = {
  workout: CycleType;
};

const Cycle = ({ workout }: CycleProps) => {
  return (
    <>
      <InstructorCard instructor={workout.instructor} />
      <div className="text-3xl col-span-12">Cycle details</div>
      {JSON.stringify(workout)}
    </>
  );
};

export default Cycle;
