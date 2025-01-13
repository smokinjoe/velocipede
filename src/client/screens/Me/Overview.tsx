import { DataList } from "@/client/components/ui/DataList";
import { Table } from "@/client/components/ui/Table";
import { Overview as OverviewType } from "@/common/types/Overview";
import { AchievementCards } from "./AchievementCards";

type OverviewProps = {
  overview?: OverviewType;
};

export const Overview = ({ overview }: OverviewProps) => {
  if (!overview) {
    return <div>There was an error fetching your overview data</div>;
  }

  const renderPersonalRecords = () => {
    const tableHeaders = {
      name: "Name",
      slug: "Slug",
      value: "Value",
      rawValue: "Raw Value",
      unit: "Unit",
      unitSlug: "Unit Slug",
      workoutId: "Workout ID",
      workoutDate: "Workout Date",
    };

    return (
      <div className="col-span-6">
        {overview.personalRecords.map((pr) => (
          <div key={pr.slug} className="flex flex-col">
            <div className="text-3xl font-bold mb-4">{pr.name} records</div>
            <Table data={pr.records} columnNames={tableHeaders} />
          </div>
        ))}
      </div>
    );
  };

  const renderStreaks = () => {
    const rowTitles = {
      currentWeekly: "Current Weekly",
      bestWeekly: "Best Weekly",
      startDateOfCurrentWeekly: "Start Date of Current Weekly",
    };
    return (
      <div className="col-span-6">
        <div className="text-3xl font-bold mb-4">Streaks</div>
        <DataList data={overview.streaks} rowTitles={rowTitles} />
      </div>
    );
  };

  const renderAchievements = () => {
    return <AchievementCards achievements={overview.achievements} />;
  };

  return (
    <>
      {renderPersonalRecords()}
      {renderStreaks()}
      {renderAchievements()}
    </>
  );
};
