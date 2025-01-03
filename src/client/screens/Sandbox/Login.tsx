import { Grid, Title, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

import { useLogin } from "../../hooks/usePelotonQueries";
import { useUserSession } from "../../hooks/useUserSession";

export const Login = () => {
  const { userSession } = useUserSession();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login } = useLogin();

  return (
    <>
      <Grid.Col span={3}>
        <Title order={1}>Actions</Title>
        <form
          onSubmit={form.onSubmit(async (values) => {
            login({ username: values.email, password: values.password });
          })}
        >
          <Group justify="flex-end" mt="md">
            <Button type="submit">Login</Button>
          </Group>
        </form>
      </Grid.Col>
      <Grid.Col span={9}>
        <Title order={1}>Session Data</Title>
        <pre>{JSON.stringify(userSession, null, 2)}</pre>
      </Grid.Col>
    </>
  );
};
