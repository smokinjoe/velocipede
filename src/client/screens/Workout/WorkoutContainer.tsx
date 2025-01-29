import { useParams } from "react-router-dom";

import { asCycle, asWalk } from "@/common/types/WorkoutDetail";
import { assertNever } from "@/common/utils/assertions";

import { Loading } from "@/client/components/ui/Loading";
import { useWorkout } from "@/client/hooks/usePelotonQueries";
import { useUserSession } from "@/client/hooks/useUserSession";

import WalkWorkout from "./Walk/WalkWorkout";
import CycleWorkout from "./Cycle/CycleWorkout";
import Descriptors from "./Descriptors";
import Stats from "./Stats";

const WorkoutContainer = () => {
  const { id } = useParams();
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId } = userSession;
  const { data, isLoading } = useWorkout({ id, isLoggedIn, sessionId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  const renderDiscipline = (discipline: "walking" | "cycling") => {
    switch (discipline) {
      case "walking":
        return <WalkWorkout workout={asWalk(data.ride)} />;
      case "cycling":
        return <CycleWorkout workout={asCycle(data.ride)} />;
      default:
        assertNever(
          discipline,
          `Invalid fitness discipline: ${data.descriptors.fitnessDiscipline} for workout id: ${id}.`
        );
    }
  };

  return (
    <>
      <div className="text-3xl col-span-12">Workout Details</div>
      <div className="text-xl col-span-12">Workout ID: {id}</div>

      <Descriptors descriptors={data.descriptors} />
      <Stats stats={data.stats} />

      {renderDiscipline(data.descriptors.fitnessDiscipline)}
    </>
  );
};

export default WorkoutContainer;
