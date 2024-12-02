import { useState } from "react";
import { Grid, Title, Button } from "@mantine/core";
import { useMe } from "../../hooks/usePelotonQueries";

type MeProps = {
  sessionId?: string;
  isLoggedIn: boolean;
};

export const Me = ({ sessionId, isLoggedIn }: MeProps) => {
  const [fetch, toggleFetch] = useState(false);
  const { data } = useMe({
    isLoggedIn: isLoggedIn && fetch,
    session_id: sessionId,
  });

  return (
    <>
      <Grid.Col span={3}>
        <Button onClick={() => toggleFetch(!fetch)}>Fetch Me</Button>
        <Button onClick={() => toggleFetch(false)}>Show/Hide</Button>
      </Grid.Col>
      <Grid.Col span={9}>
        <Title order={1}>Me Data</Title>
        {fetch ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      </Grid.Col>
    </>
  );
};
