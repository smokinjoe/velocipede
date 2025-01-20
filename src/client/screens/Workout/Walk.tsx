import { Walk as WalkType } from "@/common/types/WorkoutDetail";

type WalkProps = {
  workout: WalkType;
};

const Walk = ({ workout }: WalkProps) => {
  return (
    <>
      <div className="text-4xl">Walk</div>
      {JSON.stringify(workout)}
    </>
  );
};

export default Walk;
