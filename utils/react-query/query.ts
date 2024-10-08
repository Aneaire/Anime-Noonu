"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getEpisodes,
  getHomeAnime,
  getInfo,
  getStreamInfo,
  searchAnime,
  test,
} from "../hianimeAPI/api";
import { QUERY_KEYS } from "./QUERY_KEYS";

export const useGetHomeAnime = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_HOME_ANIME],
    queryFn: getHomeAnime,
  });
};

export const useGetInfo = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_INFO + id],
    queryFn: () => getInfo(id),
  });
};

export const useGetEpisodes = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_EPISODES + id],
    queryFn: () => getEpisodes(id),
  });
};

export const useGetStreamInfo = () => {
  return useMutation({
    mutationFn: (id: string) => getStreamInfo(id),
    mutationKey: [QUERY_KEYS.GET_STREAM],
    retry: 5,
  });
};

export const useSearchAnime = () => {
  return useMutation({
    mutationFn: (search: string) => searchAnime(search),
    mutationKey: [QUERY_KEYS.SEARCH_ANIME],
  });
};

export const useTest = () => {
  return useMutation({
    mutationFn: (id: string) => test(id),
    mutationKey: [QUERY_KEYS.TEST + "test"],
  });
};

// export const useGetRecentPosts = () => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
//     queryFn: getRecentPosts,
//   });
// };

// export const usePostPlanCollection = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (values: IPlanInfos) => postPlanCollection(values),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: [QUERY_KEYS.USER_PLANS_List],
//       });
//     },
//   });
// };

// export const useGetTotalLikes = ({ postId }: { postId: string }) => {
//   return useInfiniteQuery({
//     queryKey: [QUERY_KEYS.LIKED_POSTS_LIST, postId],
//     queryFn: ({ pageParam }) => getTotalLikes({ pageParam, postId }) as any,
//     getNextPageParam: (lastPage: Models.Document) => {
//       if (lastPage && lastPage.documents.length === 0) {
//         return null;
//       }
//       const lastId = lastPage?.documents[lastPage?.documents.length - 1].$id;

//       return lastId;
//     },
//     enabled: !!postId,
//     initialPageParam: null,
//   });
// };
