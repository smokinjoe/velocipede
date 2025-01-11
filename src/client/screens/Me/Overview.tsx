import { DataList } from "@/client/components/ui/DataList";
import { Table } from "@/client/components/ui/Table";
import { Overview as OverviewType } from "@/common/types/Overview";

type OverviewProps = {
  overview?: OverviewType;
};

export const Overview = ({ overview }: OverviewProps) => {
  if (!overview) {
    return <div>There was an error fetching your overview data</div>;
  }

  const renderPersonalRecords = () => {
    return (
      <div className="col-span-12">
        <div className="text-3xl font-bold">Personal Records</div>
        {overview.personalRecords.map((pr) => (
          <div key={pr.slug} className="flex flex-col">
            <div className="text-xl font-bold my-4">{pr.name}</div>
            <Table data={pr.records} />
          </div>
        ))}
      </div>
    );
  };

  const renderStreaks = () => {
    return <DataList data={overview.streaks} />;
  };

  const renderAchievements = () => {
    return <Table data={overview.achievements} />;
  };

  return (
    <>
      {renderPersonalRecords()}
      {renderStreaks()}
      {renderAchievements()}
    </>
  );
};
