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
  episodes: IEpisodes;
  otherInfo: [0, 1, 2, 3];
};

export type ILatestEpisode = {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating: string | null;
  episodes: IEpisodes;
};

export type ITopUpcoming = {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating: string | null;
  episodes: IEpisodes;
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
  episodes: IEpisodes;
};

export type IEpisodes = {
  sub: number;
  dub: number;
};

export type IGenre = string;
