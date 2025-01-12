import { useState } from "react";

import { useUserSession } from "@/client/hooks/useUserSession";
import { useWorkouts } from "@/client/hooks/usePelotonQueries";
import { useSelectedView } from "@/client/components/ui/PillNavigation/useSelectedView";

import { Loading } from "@/client/components/ui/Loading";
import { PillNavigation } from "@/client/components/ui/PillNavigation/PillNavigation";

import { WorkoutsTable } from "./WorkoutsTable";
import { WorkoutsSummary } from "./WorkoutsSummary";
import { formatDateToMMDDYYYY } from "@/common/utils/date";

const views = ["workouts", "summary"];

export const Workouts = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [formLimit, setFormLimit] = useState(limit); // TODO: This is dumb, fix this

  const selectedView = useSelectedView();

  const { userSession } = useUserSession();

  const { isLoggedIn, sessionId, userId } = userSession;

  const { data, isLoading } = useWorkouts({
    isLoggedIn: isLoggedIn,
    userId,
    sessionId,
    page,
    limit,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  const { workouts } = data;

  // Peel out Workouts data
  const parsedWorkoutsData = workouts.map((workout) => {
    const parsedCreatedAt = formatDateToMMDDYYYY(workout.createdAt);

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

  const renderWorkoutsTableQueryLimitInput = () => {
    return (
      <div className="flex flex-col col-span-12 items-center">
        <form className="max-w-52">
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
      </div>
    );
  };

  const renderWorkoutsTablePagination = () => {
    const start = page * limit + 1;
    const end = start + data.count - 1;
    const total = data.total;
    return (
      <>
        <div className="flex flex-col items-center col-span-12">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-black-900">{start}</span> to{" "}
            <span className="font-semibold text-black-900">{end}</span> of{" "}
            <span className="font-semibold text-black-900">{total}</span>{" "}
            Entries
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button
              disabled={!data.showPrevious}
              onClick={() => setPage(page - 1)}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Prev
            </button>
            <button
              disabled={!data.showNext}
              onClick={() => setPage(page + 1)}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderWorkoutsTable = () => {
    return (
      <>
        {renderWorkoutsTableQueryLimitInput()}

        {renderWorkoutsTablePagination()}
        <div className="col-span-12"></div>
        <WorkoutsTable workoutsData={parsedWorkoutsData} />
      </>
    );
  };

  return (
    <>
      <PillNavigation views={views} selectedView={selectedView} />

      {selectedView === "workouts" ? (
        renderWorkoutsTable()
      ) : (
        <WorkoutsSummary summary={data.summary} />
      )}
    </>
  );
};
