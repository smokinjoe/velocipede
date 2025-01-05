import { useState } from "react";
import { useAtom } from "jotai";
import { Button } from "../../components/ui/Button";

import { useWorkouts } from "../../hooks/usePelotonQueries";
import { userSessionAtom } from "../../atoms/userSession";
import { Loading } from "@/client/components/ui/Loading";

export const Workouts = () => {
  const [fetch, toggleFetch] = useState(false);
  const [userSession] = useAtom(userSessionAtom);
  const { isLoggedIn, sessionId, userId } = userSession;

  const { data, isLoading } = useWorkouts({
    isLoggedIn: isLoggedIn && fetch,
    userId,
    sessionId,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="col-span-2">
        <Button onClick={() => toggleFetch(!fetch)}>Fetch workouts</Button>
        <Button onClick={() => toggleFetch(false)}>Show/Hide</Button>
      </div>
      <div className="col-span-4">
        <div className="text-3xl">Workouts Data</div>
        {fetch ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      </div>
    </>
  );
};
