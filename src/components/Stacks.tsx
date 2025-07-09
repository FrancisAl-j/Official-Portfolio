import Marquee from "react-fast-marquee";
import { StackImages } from "../Data";
import StackCard from "./StackCard";

type StackProps = {
  image: string;
  name: string;
};

const Stacks = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <div className="flex justify-evenly items-center gap-2 my-20">
        {StackImages.map((stack: StackProps, index: number) => {
          return (
            <StackCard key={index} name={stack.name} image={stack.image} />
          );
        })}
      </div>
    </Marquee>
  );
};

export default Stacks;
