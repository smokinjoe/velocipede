export type Instructor = {
  id: string;
  userId: string;

  /**
   * Descriptors
   */
  descriptors: {
    bio: string;
    shortBio: string;
    coachType: string;

    quote: string;
    username: string;
    name: string;
    firstName: string;
    lastName: string;

    isFeaturedProfile: string;

    fitnessDisciplines: string[];

    isActive: boolean;
    isVisible: boolean;
  };

  /**
   * Image related
   */
  media: {
    aboutImageUrl: string;
    imageUrl: string;
    webInstructorListGifImageUrl: string | null;
    instructorHeroImageUrl: string;
    workoutShareImages: Array<{
      fitnessDiscipline: string;
      imageUrl: string;
    }>;

    background: string;
    lifeStyleImageUrl: string;

    bikeInstructorListDisplayImageUrl: string | null;
    webInstructorListDisplayImageUrl: string;
    iosInstructorListDisplayImageUrl: string;
  };

  /**
   * Investigate
   */
  // instagramProfile: string;
  // stravaProfile: string;
  // twitterProfile: string;
  // facebookFanPage: string;
  // musicBio: string;
  // spotifyPlaylistUri: string;

  // orderedQAndAs: Array<string[]>;

  // defaultCrossFade: number;
  // defaultCueDelay: number;
  // jumbotronUrl: string | null;
  // jumbotronUrlDark: string;
  // jumbotronUrlIos: string;

  // isFilterable: boolean;
  // isInstructorGroup: boolean;
  // individualInstructorIds: string[];
  // isAnnounced: boolean;
  // listOrder: number;
  // filmLink: string;

  /**
   * Not important
   */
};
