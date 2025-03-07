import React, { useEffect, useRef } from "react";
import gsap from "gsap";



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
const Page_One = () => {
  const animatedBgRef = useRef(null);

  useEffect(() => {
    const animatedBg = animatedBgRef.current;
    gsap.set(animatedBg, { x: "-25%", y: "-25%" });
    const handleMouseMove = (e) => {
      if (!animatedBg) return;

      const xPercent = e.clientX / window.innerWidth;
      const yPercent = e.clientY / window.innerHeight;

      const moveX = -(animatedBg.offsetWidth - window.innerWidth) * xPercent;
      const moveY = -(animatedBg.offsetHeight - window.innerHeight) * yPercent;

      gsap.to(animatedBg, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div
        ref={animatedBgRef}
        className="absolute w-[200vw] h-[200vh]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
{fixedBoxes.map(box => (
            <div 
              key={box.id} 
              className="absolute w-12 h-12 bg-blue-600" 
              style={{ left: box.left, top: box.top }}
            ></div>
          ))}

      </div>

      {/* Pages */}
      <div className="relative w-screen min-h-screen flex items-center justify-center text-2xl text-white bg-red-500/30">
        Page 1
      </div>
      <div className="relative w-screen min-h-screen flex items-center justify-center text-2xl text-white bg-green-500">
        Page 2
      </div>
      <div className="relative w-screen min-h-screen flex items-center justify-center text-2xl text-white bg-blue-500/30">
        Page 3
      </div>
    </div>
  );
};

export default Page_One;
