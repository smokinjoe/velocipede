type WorkoutCardProps = {
  name: string;
  slug: string;
  count: number;
  iconUrl: string;
};

export const WorkoutCard = ({
  name,
  //   slug,
  count,
  iconUrl,
}: WorkoutCardProps) => {
  const fadedClass = count === 0 ? "opacity-50" : "";

  return (
    <div
      className={`${fadedClass} workout-card col-span-3 border-gray-400 border p-3 rounded-lg`}
    >
      <div className="workout-card-icon">
        <div className="font-bold text-2xl">{name}</div>
        <div className="text-xl">Count: {count}</div>
        <img src={iconUrl} alt={name} />
      </div>
    </div>
  );
};

type WorkoutCountsProps = {
  workouts: WorkoutCardProps[];
};

export const WorkoutCounts = ({ workouts }: WorkoutCountsProps) => {
  return (
    <div className="workout-counts col-span-12 grid grid-cols-12 gap-4 mt-5">
      <div className="text-4xl font-bold col-span-12">Workout Counts</div>

      {workouts
        .sort((a, b) => b.count - a.count)
        .map((workout) => (
          <WorkoutCard key={workout.name} {...workout} />
        ))}
    </div>
  );
};
