import { useState } from "react";
import { Grid, Title, Button } from "@mantine/core";
import { useWorkouts } from "../../hooks/usePelotonQueries";

type MeProps = {
  userId?: string;
  sessionId?: string;
  isLoggedIn: boolean;
};

export const Workouts = ({ userId, sessionId, isLoggedIn }: MeProps) => {
  const [fetch, toggleFetch] = useState(false);
  const { data } = useWorkouts({
    isLoggedIn: isLoggedIn && fetch,
    user_id: userId,
    session_id: sessionId,
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
