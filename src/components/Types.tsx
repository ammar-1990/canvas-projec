import { BsFillPencilFill } from "react-icons/bs";
import { PiRectangleLight } from "react-icons/pi";
import { LiaHandRock } from "react-icons/lia";

type Props = {
  util: 'pen'| 'rect' | 'move';
  setUtil: React.Dispatch<React.SetStateAction<"pen" | "rect" | 'move'>>;
};

const Types = ({ util, setUtil }: Props) => {
  return (
    <div className="flex items-center justify-evenly mt-4 border rounded-full w-full px-4 py-1 bg-white">
      <span
        className={`w-12  h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200 transition border ${
          util === "pen" && "bg-gray-200"
        }`}

        onClick={()=>setUtil('pen')}
      >
        {" "}
        <BsFillPencilFill />
      </span>
      <span
        className={`w-12  h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200 transition border ${
          util === "rect" && "bg-gray-200"
        }`}
        onClick={()=>setUtil('rect')}
      >
        {" "}
        <PiRectangleLight />
      </span>
      <span
        className={`w-12  h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200 transition border ${
          util === "move" && "bg-gray-200"
        }`}
        onClick={()=>setUtil('move')}
      >
        {" "}
        <LiaHandRock />
      </span>
    </div>
  );
};

export default Types;
