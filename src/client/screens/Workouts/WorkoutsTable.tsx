import { Table } from "@/client/components/ui/Table";

type WorkoutsTableProps = {
  workoutsData: Array<{
    createdAt: string;
    isTotalWorkPersonalRecord: boolean;
    isOutdoor: boolean;
    name: string;
    status: string;
    totalWork: number;
    fitnessDiscipline: string;
    workoutType: string;
  }>;
};

export const WorkoutsTable = ({ workoutsData }: WorkoutsTableProps) => {
  return (
    <>
      <div className="text-3xl col-span-12">Workouts Data</div>
      <Table data={workoutsData} />
    </>
  );
};
