import { usePillNavigation } from "./usePillNavigation";

type PillNavigationProps = {
  views: string[];
  selectedView: string | null;
};

export const PillNavigation = ({
  views,
  selectedView,
}: PillNavigationProps) => {
  const { currentView, handleViewChange } = usePillNavigation(
    views,
    selectedView
  );
  const normalPillClass =
    "text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4";
  const activePillClass =
    "text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white";

  return (
    <div className="flex flex-col col-span-12 items-center">
      <ul className="flex col-span-2">
        {views.map((view) => (
          <li className="flex-1 mr-2" key={view}>
            <button
              onClick={() => handleViewChange(view)}
              className={
                currentView === view ? activePillClass : normalPillClass
              }
            >
              {view}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
