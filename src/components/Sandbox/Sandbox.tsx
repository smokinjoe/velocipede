import {
  Grid,
  Container,
  Title,
  Button,
  TextInput,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { useLogin } from "../../hooks/usePelotonQueries";

export const Sandbox = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login } = useLogin();

  return (
    <Container>
      <Grid gutter="xl">
        <Grid.Col span={4}>
          <Title order={1}>Login</Title>
          <form
            onSubmit={form.onSubmit(async (values) => {
              console.log(values);
              login({ username: values.email, password: values.password });
            })}
          >
            <TextInput
              label="email"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />

            <TextInput
              label="password"
              type="password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Grid.Col>
        <Grid.Col span={8}>
          <Title order={1}>Results</Title>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
