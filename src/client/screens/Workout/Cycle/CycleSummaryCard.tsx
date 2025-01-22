import { CycleDescriptors } from "@/common/types/Cycle";

type CycleSummaryCardProps = {
  details: CycleDescriptors;
};

const CycleSummaryCard = ({ details }: CycleSummaryCardProps) => {
  const { title, description, fitnessDisciplineDisplayName, imageUrl } =
    details;

  return (
    <div className="cycle-detail-card col-span-6 border-gray-400 border p-3 rounded-lg flex flex-col min-h-full grid grid-cols-6 gap-4">
      <img
        className="cycle-detail-card__image border shadow shadow-gray-200 col-span-3 "
        src={imageUrl}
        alt={title}
      />
      <div className="cycle-detail-card__information flex-grow mb-4 col-span-3">
        <div className="font-bold text-2xl">{title}</div>
        <div className="mb-3">{description}</div>
        <div className="font-bold">
          Fitness Discipline:{" "}
          <span className="font-normal">{fitnessDisciplineDisplayName}</span>
        </div>
      </div>
    </div>
  );
};

export default CycleSummaryCard;
