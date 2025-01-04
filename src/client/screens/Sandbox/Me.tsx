import { useState } from "react";
import { useAtom } from "jotai";
import { Button } from "../../components/ui/Button";

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
      <div className="col-span-2">
        <Button onClick={() => toggleFetch(!fetch)}>Fetch Me</Button>
        <Button onClick={() => toggleFetch(false)}>Show/Hide</Button>
      </div>
      <div className="col-span-4">
        <div className="text-3xl">Me Data</div>
        {fetch ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      </div>
    </>
  );
};
