import { useState } from "react";
import { useAtom } from "jotai";
import { Grid, Title, Button } from "@mantine/core";
import { useMe } from "../../hooks/usePelotonQueries";
import { userSessionAtom } from "../../atoms/userSession";

export const Me = () => {
  const [fetch, toggleFetch] = useState(false);

  const [userSession] = useAtom(userSessionAtom);
  const { isLoggedIn, sessionId } = userSession;

  const { data } = useMe({
    isLoggedIn: isLoggedIn && fetch,
    sessionId,
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
