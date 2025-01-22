import { useForm } from "@mantine/form";

import { useLogin } from "client/hooks/usePelotonQueries";
import { useUserSession } from "client/hooks/useUserSession";
import { Button } from "client/components/ui/Button";
import { Loading } from "client/components/ui/Loading";

const Login = () => {
  const { userSession, clearSession } = useUserSession();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useLogin();

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <div className="col-span-3">
        <div className="text-3xl">Actions</div>
        <form
          onSubmit={form.onSubmit(async (values) => {
            login({ username: values.email, password: values.password });
          })}
        >
          <Button type="submit">Login</Button>
          <Button type="button" onClick={clearSession}>
            Logout
          </Button>
        </form>
      </div>
      <div className="col-span-9">
        <div className="text-3xl">Session Data</div>
        <pre>{JSON.stringify(userSession, null, 2)}</pre>
      </div>
    </>
  );
};

export default Login;
