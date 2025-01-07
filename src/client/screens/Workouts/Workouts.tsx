import { useState } from "react";

import { Loading } from "@/client/components/ui/Loading";
import { Table } from "@/client/components/ui/Table";

import { useUserSession } from "@/client/hooks/useUserSession";
import { useWorkouts } from "@/client/hooks/usePelotonQueries";

const Views = {
  workouts: "workouts",
  summary: "summary",
} as const;

type ViewType = (typeof Views)[keyof typeof Views];

export const Workouts = () => {
  const [view, setView] = useState<ViewType>(Views.workouts);
  const { userSession } = useUserSession();

  const { isLoggedIn, sessionId, userId } = userSession;

  const { data, isLoading } = useWorkouts({
    isLoggedIn: isLoggedIn,
    userId,
    sessionId,
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

  // Monthly summary
  const monthlySummary: Array<{
    date: string;
    count: number;
  }> = [];
  for (const month in data.summary) {
    const dateObj = new Date(month);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    const formattedDate = dateObj.toLocaleString("en-US", options);

    monthlySummary.push({
      date: formattedDate,
      count: data.summary[month],
    });
  }

  const renderWorkoutsView = () => (
    <>
      <div className="text-3xl col-span-12">Workouts Data</div>
      <Table data={parsedWorkoutsData} />
    </>
  );

  const renderSummaryView = () => (
    <>
      <div className="text-3xl col-span-12">Monthly Summary</div>
      <Table data={monthlySummary} />
    </>
  );

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

      {view === Views.workouts ? renderWorkoutsView() : renderSummaryView()}
    </>
  );
};
