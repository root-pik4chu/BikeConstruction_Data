import React, { useEffect, useRef, useState } from 'react';

const Experiment_Mouse_Cursor = () => {
  const freeSpaceRef = useRef(null);
  const animatedBgRef = useRef(null);
  const mainContainerRef = useRef(null);
  const [randomBoxes, setRandomBoxes] = useState([]);

  // Generate random boxes data
  useEffect(() => {
    const boxes = [];
    for (let i = 0; i < 10; i++) {
      boxes.push({
        id: i,
        left: `${Math.random() * 200}vw`,
        top: `${Math.random() * 200}vh`
      });
    }
    setRandomBoxes(boxes);
  }, []);

  // Handle animation with custom implementation
  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let currentBgX = 0;
    let currentBgY = 0;

    const animate = () => {
      if (freeSpaceRef.current && animatedBgRef.current) {
        // Smooth cursor animation
        cursorX += (targetX - cursorX) * 0.3;
        cursorY += (targetY - cursorY) * 0.3;
        
        freeSpaceRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        
        // Smooth background animation
        currentBgX += (targetX * 0.5 - currentBgX) * 0.05;
        currentBgY += (targetY * 0.5 - currentBgY) * 0.05;
        
        animatedBgRef.current.style.transform = `translate(${-currentBgX}px, ${-currentBgY}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (freeSpaceRef.current) {
        targetX = e.clientX - freeSpaceRef.current.offsetWidth / 2;
        targetY = e.clientY - freeSpaceRef.current.offsetHeight / 2;
      }
    };

    // Start animation and add event listener
    animate();
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="free-space" ref={freeSpaceRef}></div>
      <div className="main-container" ref={mainContainerRef}>
        <div className="animated-bg" ref={animatedBgRef}>
          {randomBoxes.map(box => (
            <div 
              key={box.id} 
              className="random-box" 
              style={{ left: box.left, top: box.top }}
            ></div>
          ))}
        </div>
        <div className="page" style={{ background: "rgba(255, 0, 0, 0.3)" }}>Page 1</div>
        <div className="page" style={{ background: "rgba(0, 255, 0, 0.3)" }}>Page 2</div>
        <div className="page" style={{ background: "rgba(0, 0, 255, 0.3)" }}>Page 3</div>
      </div>

      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .app-container {
          overflow-x: hidden;
          background: #111;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .main-container {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          overflow: hidden;
        }
        .animated-bg {
          position: absolute;
          width: 200vw;
          height: 200vh;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,1) 100%);
          will-change: transform;
        }
        .free-space {
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          mix-blend-mode: difference;
          z-index: 100;
          will-change: transform;
          pointer-events: none;
        }
        .random-box {
          position: absolute;
          width: 50px;
          height: 50px;
          background: blue;
        }
        .page {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Experiment_Mouse_Cursor;