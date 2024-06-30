import { useGetHomeAnime } from "@/utils/react-query/query";

const Test = () => {
  const { data, isLoading } = useGetHomeAnime();

  if (isLoading) return <div>Loading...</div>;

  console.log(data);
  return <div>Test me baby</div>;
};

export default Test;
