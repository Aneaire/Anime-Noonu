type ITopTen = {
  success: boolean;
  results: {
    topTen: {
      data_id: string;
      number: string;
      name: string;
      poster: string;
      tvInfo: {
        sub: string;
        dub?: string;
        eps?: string;
      };
    }[];
  };
};
