import { Instructor } from "@/common/types/WorkoutDetail";

type InstructorProps = {
  instructor: Instructor;
};

/**
 * imageCard
 */

const InstructorCard = ({ instructor }: InstructorProps) => {
  const { imageUrl } = instructor.media;
  const { name, bio, fitnessDisciplines, isActive } = instructor.descriptors;
  return (
    <div className="instructor-card col-span-6 border-gray-400 border p-3 rounded-lg flex flex-col min-h-full grid grid-cols-6 gap-4">
      <img
        className="instructor-card__image block mx-auto self-end border shadow shadow-gray-200 col-span-3"
        src={imageUrl}
        alt={name}
      />
      <div className="instructor-card-details flex-grow mb-4 col-span-3">
        <div className="font-bold text-2xl">
          {name}{" "}
          <span className="text-sm text-gray-500">
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
        <div className="mb-5">{bio}</div>
        <div className="">
          <div className="font-bold">Fitness Disciplines:</div>
          {fitnessDisciplines.map((discipline) => (
            <div className="ml-8 list-item" key={discipline}>
              {discipline}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
