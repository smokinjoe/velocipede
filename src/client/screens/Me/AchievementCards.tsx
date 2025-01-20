import { Achievement } from "@/common/types/Overview";

type AchievementCardProps = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
};

const AchievementCard = ({
  name,
  imageUrl,
  description,
}: AchievementCardProps) => {
  return (
    <div className="achievement-card col-span-3 border-gray-400 border p-3 rounded-lg flex flex-col min-h-full">
      <div className="achievement-card-details flex-grow">
        <div className="font-bold text-2xl">{name}</div>
        <div className="text-xl">{description}</div>
      </div>
      <img className="block mx-auto self-end" src={imageUrl} alt={name} />
    </div>
  );
};

type AchievementCardsProps = {
  achievements: Achievement[];
};

export const AchievementCards = ({ achievements }: AchievementCardsProps) => {
  return (
    <div className="achievement-cards col-span-12 grid grid-cols-12 gap-4 mt-5">
      {achievements.map((achievement) => (
        <AchievementCard key={achievement.id} {...achievement} />
      ))}
    </div>
  );
};
