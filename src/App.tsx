import React, { useEffect, useRef, useState } from "react";
import Canvas from "./components/Canvas";
import { ChromePicker } from "react-color";
import Types from "./components/Types";
import { useCanvas } from "./hooks/useCanvas";

function App() {
  const [color, setColor] = useState("#000");
  const [util, setUtil] = useState<"pen" | "rect" | "move">("pen");

  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement | null>(null);

  const { canvasRef, contextRef, draw, startDrawing, stopDrawing } = useCanvas(
    color,
    util
  );
  // ----------------------------------------

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    if (!file) return;

    const img = new Image();
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    img.onload = () => {
      const ctx = contextRef.current!;
      const scaledWidth = img.width / 2;
      const scaledHeight = img.height / 2;
      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      imageRef.current = img;
    };

    img.src = URL.createObjectURL(file);
  };


  const erase = ()=>{
    contextRef.current?.clearRect(0,0,canvasRef.current?.width as number,canvasRef.current?.height as number)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-300">
      <div className="flex flex-col ">
        <Canvas
          canvasRef={canvasRef}
          contextRef={contextRef}
          draw={draw}
          startDrawing={startDrawing}
          stopDrawing={stopDrawing}
          height={600}
          width={600}
          className="border bg-white rounded-md"
          color={color}
          util={util}
        />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <label
              htmlFor="file"
              className="px-4 py-1 border rounded-full w-[150px] flex items-center justify-center cursor-pointer bg-white text-zinc-600 hover:bg-gray-100 transition"
            >
              Upload image
            </label>
            <input
              onChange={handleImageUpload}
              type="file"
              hidden
              id="file"
              multiple
            />
          </div>
          <button
            className="px-4 py-1 border rounded-full w-[150px] flex items-center justify-center cursor-pointer bg-white text-zinc-600 hover:bg-gray-100 transition"
            type="button"
            onClick={erase}
          >
            Erase
          </button>
        </div>
      </div>
      <div className="fixed top-0 right-0  mt-4 mr-4 flex flex-col ">
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <Types setUtil={setUtil} util={util} />
      </div>
    </div>
  );
}

export default App;
