import { useState } from "react";

import { Loading } from "@/client/components/ui/Loading";

import { useUserSession } from "@/client/hooks/useUserSession";
import { useWorkouts } from "@/client/hooks/usePelotonQueries";
import { WorkoutsTable } from "./WorkoutsTable";
import { WorkoutsSummary } from "./WorkoutsSummary";

const Views = {
  workouts: "workouts",
  summary: "summary",
} as const;

type ViewType = (typeof Views)[keyof typeof Views];

export const Workouts = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [formLimit, setFormLimit] = useState(limit);
  const [view, setView] = useState<ViewType>(Views.workouts);
  const { userSession } = useUserSession();

  const { isLoggedIn, sessionId, userId } = userSession;

  const { data, isLoading } = useWorkouts({
    isLoggedIn: isLoggedIn,
    userId,
    sessionId,
    page,
    limit,
  });

  const handleViewChange = (view: ViewType) => {
    setView(view);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  const { workouts } = data;

  // Peel out Workouts data
  const parsedWorkoutsData = workouts.map((workout) => {
    const createdAt = new Date(workout.createdAt * 1000);

    const day = String(createdAt.getDate()).padStart(2, "0");
    const month = String(createdAt.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = createdAt.getFullYear();
    const parsedCreatedAt = `${month}/${day}/${year}`;

    return {
      createdAt: parsedCreatedAt,
      isTotalWorkPersonalRecord: workout.isTotalWorkPersonalRecord,
      isOutdoor: workout.isOutdoor,
      name: workout.name,
      status: workout.status,
      totalWork: workout.totalWork,
      fitnessDiscipline: workout.fitnessDiscipline,
      workoutType: workout.workoutType,
    };
  });

  const renderWorkoutsTable = () => {
    return (
      <>
        <form className="w-full max-w-52 col-span-12">
          <div className="flex items-center border-b border-slate-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              aria-label="Full name"
              id="limit-input"
              value={formLimit}
              onChange={(e) => setFormLimit(Number(e.target.value))}
            />
            <button
              className="flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setLimit(formLimit);
              }}
            >
              Update
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-slate-500 hover:text-slate-800 text-sm py-1 px-2 rounded"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setLimit(20);
                setFormLimit(20);
              }}
            >
              Reset
            </button>
          </div>
        </form>

        <div className="col-span-12"></div>
        <WorkoutsTable workoutsData={parsedWorkoutsData} />
      </>
    );
  };

  return (
    <>
      <div className="inline-flex">
        <button
          onClick={() => handleViewChange(Views.workouts)}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            view === Views.workouts ? "bg-gray-400" : ""
          }`}
        >
          Workouts
        </button>
        <button
          onClick={() => handleViewChange(Views.summary)}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${
            view === Views.summary ? "bg-gray-400" : ""
          }`}
        >
          Summary
        </button>
      </div>

      {view === Views.workouts ? (
        renderWorkoutsTable()
      ) : (
        <WorkoutsSummary summary={data.summary} />
      )}
    </>
  );
};
