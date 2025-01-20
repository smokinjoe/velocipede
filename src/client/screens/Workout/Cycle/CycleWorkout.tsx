import { Cycle, CycleDescriptors } from "@/common/types/WorkoutDetail";
import InstructorCard from "@/client/screens/Workout/Cycle/InstructorCard";

/**
 * Taken directly from WorkoutDetail.ts
 * Cycle.descriptors
 * TODO: create a CycleDescripors type
 */
type CycleDetailCardProps = {
  details: CycleDescriptors;
};

const CycleDetailCard = ({ details }: CycleDetailCardProps) => {
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

type CycleProps = {
  workout: Cycle;
};

const CycleWorkout = ({ workout }: CycleProps) => {
  return (
    <>
      <InstructorCard instructor={workout.instructor} />
      <CycleDetailCard details={workout.descriptors} />
    </>
  );
};

export default CycleWorkout;
