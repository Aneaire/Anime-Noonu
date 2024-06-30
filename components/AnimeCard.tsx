const AnimeCard = () => {
  return (
    <div className=" flex w-fit h-[320px] object-cover bg-sBackground relative rounded-md overflow-hidden">
      <div className="h-full"></div>
      <div className="relative w-56 h-full">
        {/* <Image
          src={lists.results.topTen[1].poster}
          fill
          alt="anime"
          className="w-56 h-[300px]"
        /> */}
      </div>
    </div>
  );
};

export default AnimeCard;
