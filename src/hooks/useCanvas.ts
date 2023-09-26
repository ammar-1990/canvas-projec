import { useEffect, useRef, useState } from "react"




export const useCanvas =(color:string,util:'pen' | 'rect'| 'move')=>{


    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)

    const canvasOffsetX = useRef<number | null>(null)
    const canvasOffsetY = useRef<number | null>(null)

    const startX = useRef<number | null>(null)
    const startY = useRef<number | null>(null)


    const newMouseX = useRef<number | null>(null)
    const newMouseY = useRef<number | null>(null)

    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(()=>{
        if(!canvasRef.current) return

        const ctx = canvasRef.current.getContext('2d')
        if(!ctx) return 
        ctx.lineCap ='round'
        ctx.strokeStyle = color
        ctx.lineWidth = 5
        contextRef.current = ctx

        const canvasOffset = canvasRef.current.getBoundingClientRect()
        canvasOffsetX.current = canvasOffset.left
        canvasOffsetY.current = canvasOffset.top

      
        

       

    },[color])


    


    const startDrawing = ({nativeEvent}:React.MouseEvent<HTMLCanvasElement, MouseEvent>)=>{

        if(util === 'pen'){
            const {offsetX, offsetY} = nativeEvent



            contextRef.current?.beginPath()
            contextRef.current?.moveTo(offsetX,offsetY)
            // contextRef.current?.lineTo(offsetX,offsetY)
            contextRef.current?.stroke()
            setIsDrawing(true)
            nativeEvent.preventDefault()
        }

        if(util ==='rect') {
nativeEvent.preventDefault()
nativeEvent.stopPropagation()
if(!canvasOffsetX.current || !canvasOffsetY.current) return

startX.current = nativeEvent.clientX  - canvasOffsetX.current
startY.current = nativeEvent.clientY - canvasOffsetY.current

setIsDrawing(true)


        }

       

    }


    const draw = ({nativeEvent}:React.MouseEvent<HTMLCanvasElement, MouseEvent>)=>{

        if(util==='pen') {
            if(!isDrawing) return

            const {offsetX, offsetY} = nativeEvent
            
            
            
            contextRef.current?.lineTo(offsetX,offsetY)
            contextRef.current?.stroke()
            nativeEvent.preventDefault()
        }

        if(util ==='rect') {
if(!isDrawing) return 
nativeEvent.preventDefault()
nativeEvent.stopPropagation()

if(!canvasOffsetX.current || !canvasOffsetY.current) return
 newMouseX.current = nativeEvent.clientX - canvasOffsetX.current
 newMouseY.current = nativeEvent.clientY - canvasOffsetY.current


if(!startX.current || !startY.current) return 



// contextRef.current?.clearRect(0,0,canvasRef.current?.width as number,canvasRef.current?.height as number)  //could be deleted

// contextRef.current?.strokeRect(startX.current,startY.current,rectWidth,rectHeight)




            
        }


    }


    const stopDrawing = ()=>{
        if(util === 'pen'){
            contextRef.current?.closePath()
            setIsDrawing(false)
        }

        if(util ==='rect') {
            const rectWidth = newMouseX.current! - startX.current!
const rectHeight = newMouseY.current! - startY.current!
            contextRef.current?.strokeRect(startX.current!,startY.current!,rectWidth,rectHeight)
setIsDrawing(false)
            
        }
      
    }


    return {canvasRef, contextRef,startDrawing,draw,stopDrawing}

}