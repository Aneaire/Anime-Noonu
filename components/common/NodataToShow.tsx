const NodataToShow = ({ text = "No data to show" }: { text?: string }) => {
  return (
    <div className=" w-full flex-center py-10">
      <h6 className=" text-xl text-foreground opacity-75">{text}</h6>
    </div>
  );
};

export default NodataToShow;
