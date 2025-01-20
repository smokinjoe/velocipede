import { Walk } from "@/common/types/WorkoutDetail";

type WalkProps = {
  workout: Walk;
};

const WalkWorkout = ({ workout }: WalkProps) => {
  return (
    <>
      <div className="text-4xl">Walk</div>
      {JSON.stringify(workout)}
    </>
  );
};

export default WalkWorkout;
