import { Link } from "react-router-dom";
import { Table } from "@/client/components/ui/Table";

type WorkoutsTableProps = {
  workoutsData: Array<{
    id: string;
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
  id: "ID",
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
  const cellOverrides = {
    id: (value: string) => <Link to={value}>{value}</Link>,
  };

  return (
    <div className="col-span-12 flex-col flex" data-testid="workouts-table">
      <div className="text-3xl col-span-12">Workouts Data</div>
      <Table
        data={workoutsData}
        columnNames={tableColumnNames}
        cellOverrides={cellOverrides}
      />
    </div>
  );
};
