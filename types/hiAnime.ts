export type IHiAnimeHome = {
  genres: IGenre[];
  latestEpisodeAnimes: ILatestEpisode[];
  spotlightAnimes: ISpotLight[];
  top10Animes: ITop10[];
  topUpcomingAnimes: ITopUpcoming[];
  topAiringAnimes: ITopAiring[];
  trendingAnimes: ITrending[];
};

export type ITopAiring = {
  id: string;
  name: string;
  jname: string;
  poster: string;
  otherInfo: [];
};

export type ISpotLight = {
  rank: number;
  id: string;
  name: string;
  description: string;
  poster: string;
  jname: string;
  episodes: IEpisodesType;
  otherInfo: [0, 1, 2, 3];
};

export type ILatestEpisode = {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating: string | null;
  episodes: IEpisodesType;
};

export type ITopUpcoming = {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating: string | null;
  episodes: IEpisodesType;
  otherInfo: [];
};

export type ITrending = {
  id: string;
  rank: number;
  name: string;
  poster: string;
};

export type ITop10 = {
  today: IBasicInfo[];
  week: IBasicInfo[];
  month: IBasicInfo[];
};

export type IBasicInfo = {
  id: string;
  rank: number;
  name: string;
  poster: string;
  episodes: IEpisodesType;
};

export type IEpisodesType = {
  sub: number;
  dub: number;
};

// EPISODES

export type IEpisodes = {
  episodes: IEpisode[];
  totalEpisodes: number;
};

export type IEpisode = {
  episodeId: string;
  isFiller: boolean;
  number: number;
  title: string;
};

export type IGenre = string;

// INFO

export type IInfo = {
  anime: { info: IAnimeInfo; moreInfo: IAnimeMoreInfo };
  mostPopularAnimes: IBasicCardContent[];
  recommendedAnimes: IBasicCardContent[];
  relatedAnimes: IBasicCardContent[];
  seasons: unknown[];
};

export type IAnimeInfo = {
  id: string;
  anilistId: number;
  description: string;
  charactersVoiceActors: [];
  malId: number;
  name: string;
  poster: string;
  promotionalVideos: [];
  stats: IStats;
};

export type IAnimeMoreInfo = {
  aired: string;
  description: string;
  genres: string[];
  japanese: string;
  malscore: string;
  premiered: string;
  producers: string[];
  status: string;
  studios: string;
  synonyms: string;
};

// COMMON

export type IStats = {
  duration: string;
  episodes: IEpisodesType;
  quality: string;
  rating: string;
  type: string;
};

export type IBasicCardContent = {
  id: string;
  name: string;
  title?: string;
  poster: string;
};
