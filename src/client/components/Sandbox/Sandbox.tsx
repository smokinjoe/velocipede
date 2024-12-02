import {
  Grid,
  Container,
  Title,
  Button,
  // TextInput,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { useLogin, useMe } from "../../hooks/usePelotonQueries";

export const Sandbox = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, userSession } = useLogin();
  const { data } = useMe(userSession);

  return (
    <Container>
      <Grid gutter="xl" w="100vw">
        <Grid.Col span={3}>
          <Title order={1}>Actions</Title>
          <form
            onSubmit={form.onSubmit(async (values) => {
              login({ username: values.email, password: values.password });
            })}
          >
            {/* <TextInput
              label="email"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />

            <TextInput
              label="password"
              type="password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            /> */}

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Grid.Col>
        <Grid.Col span={9}>
          <Title order={1}>Session Data</Title>
          <pre>{JSON.stringify(userSession, null, 2)}</pre>
          <Title order={1}>Me Data</Title>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
