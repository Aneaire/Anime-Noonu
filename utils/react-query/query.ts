"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { getHomeAnime, test } from "../hianimeAPI/api";
import { QUERY_KEYS } from "./QUERY_KEYS";

export const useGetHomeAnime = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_HOME_ANIME],
    queryFn: getHomeAnime,
  });
};

export const useTest = () => {
  return useMutation({
    mutationFn: (id: string) => test(id),
    mutationKey: [QUERY_KEYS.TEST],
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
