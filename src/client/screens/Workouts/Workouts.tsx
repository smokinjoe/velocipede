import { useUserSession } from "@/client/hooks/useUserSession";
import { useWorkouts } from "@/client/hooks/usePelotonQueries";
import { useSelectedView } from "@/client/components/ui/PillNavigation/useSelectedView";

import { Loading } from "@/client/components/ui/Loading";
import { PillNavigation } from "@/client/components/ui/PillNavigation/PillNavigation";

import { WorkoutsTable } from "./WorkoutsTable";
import { WorkoutsSummary } from "./WorkoutsSummary";
import { formatDateToMMDDYYYY } from "@/common/utils/date";

import { Pagination, usePagination } from "@/client/components/ui/Table";

const views = ["workouts", "summary"];

const Workouts = () => {
  const selectedView = useSelectedView();
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId, userId } = userSession;
  const { page, limit } = usePagination();
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
  // TODO: have this done at the mapper seam in the future
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

  const renderWorkoutsTable = () => {
    const { showPrevious, showNext, total, count } = data;

    return (
      <>
        <Pagination
          showPrevious={showPrevious}
          showNext={showNext}
          total={total}
          count={count}
        />
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

export default Workouts;
