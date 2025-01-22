export type Walk = {
  // id: "00000000000000000000000000000000";
  id: string;
  isArchived: boolean;
  title: string;
  scheduledStartTime: number;
  duration: number;
  /**
   * This is essential in determining the type of ride
   */
  fitnessDiscipline: "walk";
  instructor: {
    // name: "JUST WALK";
    name: string;
    imageUrl: string;
  };
};
