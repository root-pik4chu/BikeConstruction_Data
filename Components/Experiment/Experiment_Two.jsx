import React, { useEffect, useRef } from 'react';

const Experiment_Two = () => {
  const animatedBgRef = useRef(null);
  
  // Define fixed box positions instead of random
  const fixedBoxes = [
    { id: 1, left: "20vw", top: "30vh" },
    { id: 2, left: "70vw", top: "15vh" },
    { id: 3, left: "45vw", top: "60vh" },
    { id: 4, left: "85vw", top: "80vh" },
    { id: 5, left: "10vw", top: "85vh" },
    { id: 6, left: "60vw", top: "40vh" },
    { id: 7, left: "30vw", top: "70vh" },
    { id: 8, left: "90vw", top: "25vh" }
  ];

  // Handle animation with custom implementation - only for background now
  useEffect(() => {
    let animationFrameId;
    let currentBgX = 0;
    let currentBgY = 0;

    const animate = () => {
      if (animatedBgRef.current) {
        // Keep the background animation
        const targetX = window.mouseX || 0;
        const targetY = window.mouseY || 0;
        
        // Smooth background animation
        currentBgX += (targetX * 0.5 - currentBgX) * 0.05;
        currentBgY += (targetY * 0.5 - currentBgY) * 0.05;
        
        animatedBgRef.current.style.transform = `translate(${-currentBgX}px, ${-currentBgY}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      // Store mouse position globally for the animation
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
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
    <div className="overflow-x-hidden bg-gray-900 relative w-full h-full">
      <div className="relative w-screen min-h-screen overflow-hidden">
        <div 
          ref={animatedBgRef} 
          className="absolute w-[150vw] h-[150vh] bg-radial-gradien"
        >
          {fixedBoxes.map(box => (
            <div 
              key={box.id} 
              className="absolute w-12 h-12 bg-blue-600" 
              style={{ left: box.left, top: box.top }}
            ></div>
          ))}
        </div>
        
        <div className="relative w-screen min-h-screen flex items-center justify-center text-3xl text-white bg-red-500/30">
          Page 1
        </div>
      </div>
      
      {/* Custom styles for radial gradient since Tailwind doesn't have this built-in */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,1) 100%);
        }
      `}</style>
    </div>
  );
};

export default Experiment_Two;