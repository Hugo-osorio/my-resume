import React, {ReactNode, useEffect, useState} from 'react'

type Props = {
    children?: ReactNode
}

//create te container that will hold the boincing balls.
var container = {
    x: 0,
    y: 0,
    width: 1200,
    height: 900
};
//create the array of circles that will be animated
var circles = [{
    x: 50,
    y: 100,
    r: 10,
    vx: 1,
    vy: 1,
    color: 125
}, {
    x: 150,
    y: 80,
    r: 20,
    vx: 2,
    vy: 2,
    color: 205
}, {
    x: 90,
    y: 150,
    r: 5,
    vx: 5,
    vy: 4,
    color: 25
}, {
    x: 100,
    y: 50,
    r: 15,
    vx: 3,
    vy: 3,
    color: 100
}];

const Canvas:React.FC<Props> = ({ children }) => {

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

useEffect(()=>{

    var canvas = document.getElementById("my_canvas") as HTMLCanvasElement;
    
    var c = canvas?.getContext("2d") as CanvasRenderingContext2D;

    function animate() {
        //draw the container
        c.fillStyle = "#222";
        c.fillRect(container.x, container.y, 1800, 1200);
      
        //loop throughj the circles array
        for (var i = 0; i < circles.length; i++) {
          //draw the circles
          c.fillStyle = 'hsl(' + circles[i].color + ', 100%, 50%)';
          c.beginPath();
          c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
          c.fill()
      
          //time to animate our circles ladies and gentlemen.
          if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
            circles[i].vx = -circles[i].vx;
          }
      
          if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
            circles[i].vy = -circles[i].vy;
          }
      
          circles[i].x += circles[i].vx
          circles[i].y += circles[i].vy
        }
      
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
})
  return (
    <canvas id="my_canvas" width={useWindowSize().width} height={useWindowSize().height}>
        {children}
    </canvas>
  )
}

export default Canvas