type StackProps = {
  image: string;
  name: string;
};

const StackCard = ({ name, image }: StackProps) => {
  return (
    <div className="w-[230px]">
      <div className="glass py-10">
        <img
          src={image}
          alt="icon image"
          className="aspect-square w-15 block m-auto"
        />
      </div>

      <h1 className="text-white text-center mt-10 text-2xl">{name}</h1>
    </div>
  );
};

export default StackCard;
