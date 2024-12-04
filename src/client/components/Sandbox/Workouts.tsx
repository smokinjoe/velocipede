import { useState } from "react";
import { useAtom } from "jotai";
import { Grid, Title, Button } from "@mantine/core";
import { useWorkouts } from "../../hooks/usePelotonQueries";
import { userSessionAtom } from "../../atoms/userSession";

export const Workouts = () => {
  const [fetch, toggleFetch] = useState(false);
  const [userSession] = useAtom(userSessionAtom);
  const { isLoggedIn, sessionId, userId } = userSession;
  const { data } = useWorkouts({
    isLoggedIn: isLoggedIn && fetch,
    userId,
    sessionId,
  });

  return (
    <>
      <Grid.Col span={3}>
        <Button onClick={() => toggleFetch(!fetch)}>Fetch workouts</Button>
        <Button onClick={() => toggleFetch(false)}>Show/Hide</Button>
      </Grid.Col>
      <Grid.Col span={9}>
        <Title order={1}>Workouts Data</Title>
        {fetch ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      </Grid.Col>
    </>
  );
};
