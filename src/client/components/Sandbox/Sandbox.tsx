import { Grid, Container } from "@mantine/core";

import { Me } from "./Me";
import { Workouts } from "./Workouts";
import { Login } from "./Login";

export const Sandbox = () => {
  return (
    <Container>
      <Grid gutter="xl" w="100vw">
        <Login />
        <Me />
        <Workouts />
      </Grid>
    </Container>
  );
};
