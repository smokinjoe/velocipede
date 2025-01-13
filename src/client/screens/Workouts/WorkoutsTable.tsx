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

const tableColumnNames = {
  createdAt: "Created At",
  isTotalWorkPersonalRecord: "Personal Record",
  isOutdoor: "Outdoor",
  name: "Name",
  status: "Status",
  totalWork: "Total Work",
  fitnessDiscipline: "Fitness Discipline",
  workoutType: "Workout Type",
};

export const WorkoutsTable = ({ workoutsData }: WorkoutsTableProps) => {
  return (
    <div className="col-span-12 flex-col flex">
      <div className="text-3xl col-span-12">Workouts Data</div>
      <Table data={workoutsData} columnNames={tableColumnNames} />
    </div>
  );
};
