import React from 'react'
import { useCanvas } from '../hooks/useCanvas'

type Props = {
    width?:number,
    height?:number,
    className?:string,
    canvasRef:React.MutableRefObject<HTMLCanvasElement | null>
    color:string,
    util:'pen'| 'rect'| 'move'
    contextRef:React.MutableRefObject<CanvasRenderingContext2D | null>,
    startDrawing:({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void,
    draw:({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void,
    stopDrawing:({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
 
}




const Canvas = (props: Props) => {

const {color,util,canvasRef, contextRef,startDrawing,draw,stopDrawing ,...rest} = props
   
    
  return (
    <canvas
     ref={canvasRef}
      {...rest}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      
      />
  )
}

export default Canvas