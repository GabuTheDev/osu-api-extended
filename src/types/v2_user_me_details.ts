export interface response {
  avatar_url: string;
  country_code: string;
  default_group: string;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_deleted: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit: string;
  pm_friends_only: boolean;
  profile_colour: string;
  username: string;
  cover_url: string;
  discord: string;
  has_supported: boolean;
  interests: string;
  join_date: string;
  kudosu: {
    total: number;
    available: number;
  };
  location: string;
  max_blocks: number;
  max_friends: number;
  occupation: string;
  playmode: string;
  playstyle: string[];
  post_count: number;
  profile_order: string[];
  title: string;
  title_url: string;
  twitter: string;
  website: string;
  country: {
    code: string;
    name: string;
  };
  cover: {
    custom_url: string;
    url: string;
    id: string;
  };
  is_restricted: boolean;
  account_history: [];
  active_tournament_banner: string;
  badges: [];
  beatmap_playcounts_count: number;
  comments_count: number;
  favourite_beatmapset_count: number;
  follower_count: number;
  graveyard_beatmapset_count: number;
  groups: [];
  guest_beatmapset_count: number;
  loved_beatmapset_count: number;
  mapping_follower_count: number;
  monthly_playcounts: {
    start_date: string;
    count: number;
  }[];
  nominated_beatmapset_count: number;
  page: {
    html: string;
    raw: string;
  };
  pending_beatmapset_count: number;
  previous_usernames: [];
  rank_highest: {
    rank: number;
    updated_at: string;
  };
  ranked_beatmapset_count: number;
  replays_watched_counts: {
    start_date: string;
    count: number;
  }[];
  scores_best_count: number;
  scores_first_count: number;
  scores_pinned_count: number;
  scores_recent_count: number;
  statistics: {
    count_100: number;
    count_300: number;
    count_50: number;
    count_miss: number;
    level: {
      current: number;
      progress: number;
    };
    global_rank: number;
    global_rank_exp: number;
    pp: number;
    pp_exp: number;
    ranked_score: number;
    hit_accuracy: number;
    play_count: number;
    play_time: number;
    total_score: number;
    total_hits: number;
    maximum_combo: number;
    replays_watched_by_others: number;
    is_ranked: boolean;
    grade_counts: {
      ss: number;
      ssh: number;
      s: number;
      sh: number;
      a: number;
    };
    country_rank: number;
    rank: {
      country: number;
    };
  };
  statistics_rulesets: {
    osu: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: number;
      global_rank_exp: number;
      pp: number;
      pp_exp: number;
      ranked_score: number;
      hit_accuracy: number;
      play_count: number;
      play_time: number;
      total_score: number;
      total_hits: number;
      maximum_combo: number;
      replays_watched_by_others: number;
      is_ranked: boolean;
      grade_counts: {
        ss: number;
        ssh: number;
        s: number;
        sh: number;
        a: number;
      };
    };
    taiko: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: string;
      global_rank_exp: string;
      pp: number;
      pp_exp: number;
      ranked_score: number;
      hit_accuracy: number;
      play_count: number;
      play_time: number;
      total_score: number;
      total_hits: number;
      maximum_combo: number;
      replays_watched_by_others: number;
      is_ranked: boolean;
      grade_counts: {
        ss: number;
        ssh: number;
        s: number;
        sh: number;
        a: number;
      };
    };
    fruits: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: string;
      global_rank_exp: string;
      pp: number;
      pp_exp: number;
      ranked_score: number;
      hit_accuracy: number;
      play_count: number;
      play_time: number;
      total_score: number;
      total_hits: number;
      maximum_combo: number;
      replays_watched_by_others: number;
      is_ranked: boolean;
      grade_counts: {
        ss: number;
        ssh: number;
        s: number;
        sh: number;
        a: number;
      };
    };
    mania: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: string;
      global_rank_exp: string;
      pp: number;
      pp_exp: number;
      ranked_score: number;
      hit_accuracy: number;
      play_count: number;
      play_time: number;
      total_score: number;
      total_hits: number;
      maximum_combo: number;
      replays_watched_by_others: number;
      is_ranked: boolean;
      grade_counts: {
        ss: number;
        ssh: number;
        s: number;
        sh: number;
        a: number;
      };
    };
  };
  support_level: number;
  user_achievements: {
    achieved_at: string;
    achievement_id: number;
  }[];
  rank_history: {
    mode: string;
    data: number[];
  };
  rankHistory: {
    mode: string;
    data: number[];
  };
  ranked_and_approved_beatmapset_count: number;
  unranked_beatmapset_count: number;
}

export interface UserAuth extends response {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface types {
  /**
   * Return details about your account
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_user_me_details = await v2.user.me.details(mode);
   *   console.log(v2_user_me_details);
   * };
   * 
   * main();
   * ```
   * @param {string} mode ```osu``` or ```fruits``` or ```mania``` or ```taiko```
  */
  (mode?: 'osu' | 'fruits' | 'mania' | 'taiko' ): Promise<response>;
}
