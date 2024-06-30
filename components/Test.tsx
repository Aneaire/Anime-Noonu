import { useGetHomeAnime } from "@/utils/react-query/query";

const Test = () => {
  const { data } = useGetHomeAnime();
  console.log(data);
  return <div>Test me baby</div>;
};

export default Test;
