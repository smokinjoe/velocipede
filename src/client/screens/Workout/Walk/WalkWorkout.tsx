import { Walk } from "@/common/types/WorkoutDetail";

type WalkProps = {
  workout: Walk;
};

const WalkWorkout = ({ workout }: WalkProps) => {
  return (
    <div className="col-span-12">
      <div className="text-4xl">Walk</div>
      {JSON.stringify(workout)}
    </div>
  );
};

export default WalkWorkout;
