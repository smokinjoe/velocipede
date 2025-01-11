type PillNavigationProps = {
  views: string[];
  currentView: string;
  handleViewChange: (view: string) => void;
};

export const PillNavigation = ({
  views,
  currentView,
  handleViewChange,
}: PillNavigationProps) => {
  const normalPillClass =
    "text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4";
  const activePillClass =
    "text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white";

  return (
    <div className="flex flex-col col-span-12 items-center">
      <ul className="flex col-span-2">
        {views.map((view) => (
          <li className="flex-1 mr-2">
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
