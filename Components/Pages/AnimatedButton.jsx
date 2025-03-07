import React, { useState, useRef, useEffect } from "react";

const AnimatedButton = ({color_One , color_two}) => {
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isHovering || !buttonRef.current || !flairRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update flair position to follow cursor with slight delay for smoother movement
    flairRef.current.style.left = `${x}px`;
    flairRef.current.style.top = `${y}px`;
  };

  const handleMouseEnter = (e) => {
    setIsHovering(true);

    if (!buttonRef.current || !flairRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Position flair at cursor entry point
    flairRef.current.style.left = `${x}px`;
    flairRef.current.style.top = `${y}px`;

    // Expand the flair with enhanced easing
    flairRef.current.style.width = "800px";
    flairRef.current.style.height = "800px";
    flairRef.current.style.transition = "width 0.6s cubic-bezier(0.25, 0.12, 0.25, 1), height 0.6s cubic-bezier(0.25, 0.12, 0.25, 1)";
  };
  
  const handleMouseLeave = (e) => {
    setIsHovering(false);

    if (!buttonRef.current || !flairRef.current) return;

    // Get exit coordinates for a smooth exit animation
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Position flair at cursor exit point
    flairRef.current.style.left = `${x}px`;
    flairRef.current.style.top = `${y}px`;

    // Shrink the flair with enhanced easing
    flairRef.current.style.width = "0";
    flairRef.current.style.height = "0";
    flairRef.current.style.transition = "width 0.7s cubic-bezier(0.25, 0.12, 0.25, 1), height 0.7s cubic-bezier(0.25, 0.12, 0.25, 1)";
  };

  return (
    <div className=" ">
      <button
        ref={buttonRef}
        className={`relative w-[20vw] h-[6vw] px-8 py-4 text-3xl font-semibold   rounded-full cursor-pointer overflow-hidden  ${color_two}`}
      
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          ref={flairRef}
          className={`absolute  rounded-full pointer-events-none ${color_One} `}
          style={{
            width: 0,
            height: 0,
            transform: "translate(-50%, -50%)",
        
          }}
        />
        <span
          className="relative z-10 "
          style={{
            transition: "color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            color: isHovering ? "black" : "white",
          }}
        >
          Tadaa
        </span>
      </button>
    </div>
  );
};

export default AnimatedButton;