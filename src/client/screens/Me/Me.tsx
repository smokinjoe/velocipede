import { useUserSession } from "@/client/hooks/useUserSession";
import { useMe } from "../../hooks/usePelotonQueries";
import { Loading } from "@/client/components/ui/Loading";
import { DataList } from "@/client/components/ui/DataList";
import { PropTypeList } from "@/client/components/dev/PropTypeList";
import { Table } from "@/client/components/ui/Table";

export const Me = () => {
  const { userSession } = useUserSession();
  const { isLoggedIn, sessionId } = userSession;

  const { data, isLoading } = useMe({
    isLoggedIn: isLoggedIn,
    sessionId,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There was an error fetching your data</div>;
  }

  return (
    <>
      <div className="text-3xl col-span-12">Me Data</div>

      <DataList data={data} />

      <div className="col-span-12"></div>

      <Table data={data.workout_counts} />

      <div className="col-span-12"></div>
      <PropTypeList data={data} />

      <div className="col-span-12"></div>
      <PropTypeList data={data.workout_counts} />
    </>
  );
};
