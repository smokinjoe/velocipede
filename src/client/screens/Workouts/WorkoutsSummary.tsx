import { Table } from "@/client/components/ui/Table";

type WorkoutsSummaryProps = {
  summary: Record<string, number>;
};

export const WorkoutsSummary = ({ summary }: WorkoutsSummaryProps) => {
  const monthlySummary: Array<{
    date: string;
    count: number;
  }> = [];
  for (const month in summary) {
    const dateObj = new Date(month);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
    };
    const formattedDate = dateObj.toLocaleString("en-US", options);

    monthlySummary.push({
      date: formattedDate,
      count: summary[month],
    });
  }

  // TODO: Fix the col-span-2 not actually being applied as expected
  return (
    <div data-testid="workouts-summary">
      <div className="text-3xl col-span-12">Monthly Summary</div>
      <div className="col-span-2">
        <Table data={monthlySummary} />
      </div>
    </div>
  );
};
