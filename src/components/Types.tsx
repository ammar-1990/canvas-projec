import { BsFillPencilFill } from "react-icons/bs";
import { PiRectangleLight } from "react-icons/pi";
import { LiaHandRock } from "react-icons/lia";
import { BsCircle } from "react-icons/bs";

type Props = {
  util: 'pen'| 'rect' | 'move' | 'circle';
  setUtil: React.Dispatch<React.SetStateAction<"pen" | "rect" | 'move' | 'circle'>>;
};

const Types = ({ util, setUtil }: Props) => {
  return (
    <div className="flex items-center gap-y-1 mt-4 border rounded-md justify-between w-full px-4 py-1 bg-white flex-wrap gap-x-1">
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
          util === "circle" && "bg-gray-200"
        }`}
        onClick={()=>setUtil('circle')}
      >
        {" "}
        <BsCircle />
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
