import { WorkoutDescriptors } from "@/common/types/WorkoutDetail";

import { DataList } from "@/client/components/ui/DataList";

type DescriptorsProps = {
  descriptors: WorkoutDescriptors;
};

export const Descriptors = ({ descriptors }: DescriptorsProps) => {
  /**
   * Description details
   */
  const formattedDescriptors = {
    name: descriptors.name,
    createdAt: descriptors.createdAt,
    duration: `${((descriptors.endTime - descriptors.startTime) / 60).toFixed(
      0
    )} minutes`,
    device: descriptors.deviceTypeDisplayName,
    status: descriptors.status,
  };

  return (
    <DataList
      rowTitles={{
        createdAt: "Workout Date",
      }}
      data={formattedDescriptors}
      columns={6}
      span={4}
      titleWidth={2}
      definitionWidth={2}
      title="Workout Details"
    />
  );
};

export default Descriptors;
