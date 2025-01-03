import { Link, Outlet } from "react-router-dom";
import { Container, Grid, Space } from "@mantine/core";

export function Layout() {
  return (
    <Container>
      <Grid gutter="xl" w="100vw">
        <Grid.Col span={1}>
          <Link to="/">Sandbox</Link>
        </Grid.Col>
        <Grid.Col span={1}>
          <Link to="/login">Login</Link>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      <Grid gutter="xl" w="100vw">
        <Outlet />
      </Grid>
    </Container>
  );
}
