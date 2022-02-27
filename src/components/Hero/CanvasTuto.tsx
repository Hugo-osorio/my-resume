
import React, { useRef, useEffect} from 'react'

type Props = {
    children?: React.ReactNode;
}

var circles = [{
    x: 50,
    y: 100,
    r: 10,
    vx: 1,
    vy: 1,
    color: '#126E82'
}, {
    x: 150,
    y: 80,
    r: 20,
    vx: 0.5,
    vy: 0.5,
    color: '#51C4D3'
}, {
    x: 90,
    y: 150,
    r: 5,
    vx: 1.5,
    vy: 1.5,
    color: '#126E82'
}, {
    x: 100,
    y: 50,
    r: 15,
    vx: 2,
    vy: 2,
    color: '#51C4D3'
}];

let x = 0;
const CanvasTuto:React.FC<Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    const render = () => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < circles.length; i++) {
            //draw the circles
            ctx.fillStyle = circles[i].color;
            ctx.beginPath();
            ctx.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
            ctx.fill()
        
            //time to animate our circles ladies and gentlemen.
            if (circles[i].x - circles[i].r + circles[i].vx < 0 || circles[i].x + circles[i].r + circles[i].vx > 0 + canvas.width) {
              circles[i].vx = -circles[i].vx;
            }
        
            if (circles[i].y + circles[i].r + circles[i].vy > 0 + canvas.height || circles[i].y - circles[i].r + circles[i].vy < 0) {
              circles[i].vy = -circles[i].vy;
            }
        
            circles[i].x += circles[i].vx
            circles[i].y += circles[i].vy
          }
        //Ends the animation loop
        requestAnimationFrame(render);
    };
    render();
  }, []);
  
  return (
    <div className='relative' style={{overflow: 'hidden'}}>
        <canvas ref={canvasRef} id='canvas' height={500} width={700} className='bg-primary h-screen w-screen'/>
        <div className='absolute top-0 left-0 h-full'>
            {children}
        </div>
    </div>
  )
};

export default CanvasTuto;