export type PelotonWorkoutCount = {
  name: string;
  slug: string;
  count: number;
  icon_url: string;
};

export type PelotonMeResponse = {
  id: string;
  image_url: string;
  username: string; // not needed
  name: string;
  first_name: string;
  middle_initial: string;
  last_name: string;

  gender: string;
  email: string;
  birthday: number;

  total_followers: number;
  total_following: number;

  weight: number;
  weight_unit: string;
  height: number;
  height_unit: string;

  location: string;

  total_workouts: number;
  default_max_heart_rate: number;
  default_heart_rate_zones: Array<number>;
  total_pedaling_metric_workouts: number;
  cycling_ftp_source: string;
  cycling_ftp: number;
  estimated_cycling_ftp: number;

  workout_counts: PelotonWorkoutCount[];

  // Cutoff point to Me.ts

  is_fitbit_authenticated: boolean;
  is_provisional: boolean;
  has_active_device_subscription: false;
  power_zone_always_on: boolean;
  corporate_wellness_group: null; // Remove
  is_effort_score_enabled: boolean;
  cycling_ftp_workout_id: string;
  customized_heart_rate_zones: string[]; // Not sure what type of Array
  facebook_id: null; // Not sure what type of id
  obfuscated_email: string;
  last_workout_at: null; // not sure what type of id
  disable_explicit_warning: boolean;
  cycling_workout_ftp: number;
  accessibility: {
    is_set_by_user: boolean;
    font_scale: number;
    caption_settings: {
      caption_preset: number;
      caption_font_scale: number;
      caption_custom_details: {
        edge_type: number;
        edge_color: number;
        window_color: number;
        background_color: number;
        foreground_color: number;
      };
    };
    is_color_inverted: boolean;
    is_magnification_enabled: boolean;
  };
  phone_number: null; // not sure if this is string or number
  is_external_beta_tester: boolean;
  quick_hits: {
    quick_hits_enabled: boolean;
    speed_shortcuts: null | boolean;
    incline_shortcuts: null | boolean;
  };
  external_music_auth_list: Array<{
    provider: string;
    status: "disconnected" | "connected";
    email: null | string;
  }>;
  locale: string;
  contract_agreements: Array<{
    contract_type: string;
    contract_id: string;
    contract_created_at: number;
    contract_url: string;
    bike_contract_url: string;
    tread_contract_url: string;
    agreed_at: number;
    acknowledged_at: number;
    required_member_action: string;
    contract_display_name: string;
  }>;
  feed_privacy: string;
  total_non_pedaling_metric_workouts: number;
  facebook_access_token: null | string | number; // Not sure if string or number
  allow_marketing: boolean;
  is_strava_authenticated: boolean;
  v1_referrals_made: number;
  is_internal_beta_tester: boolean;
  has_active_digital_subscription: boolean;
  total_pending_followers: number;
  is_email_verified: boolean;
  member_groups: Array<number | string>; // Not sure what type of Array
  block_explicit: boolean;
  paired_devices: Array<{
    name: string;
    paired_device_type: string;
    serial_number: string;
  }>;
  created_at: number;
  can_charge: boolean;
  customized_max_heart_rate: number;
  account_creation_method: string;
  instructor_id: null | string | number; // Not sure if string or number
  referrals_made: number;
  has_signed_waiver: boolean;
  is_demo: boolean;
  is_profile_private: boolean;
  is_complete_profile: boolean;
  block_prenatal: boolean;
  created_country: string;
  hardware_settings: null; // Not sure what type
  social_connections: Array<{
    social_provider_name: string;
  }>;
  is_profile_image_default: boolean;
};
