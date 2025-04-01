import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextAnimation = () => {
  const containerRef = useRef(null);
  const other = useRef(null);
  useEffect(() => {
    // Get references to elements
    const heading = containerRef.current.querySelector("h1");
    const letterElements = containerRef.current.querySelectorAll("h1 div");
    const nonDotElements = containerRef.current.querySelectorAll(
      'h1 div:not([data-char="."])'
    );

    // Create animation timeline
    gsap.set(letterElements, { yPercent: -103 });
    gsap.set(heading, { autoAlpha: 1 });

    const tl = gsap.timeline();
    tl.to(letterElements, {
      duration: 1,
      yPercent: 0,
      stagger: 0.05,
      ease: "expo.inOut",
    }).to(nonDotElements, {
      duration: 1,
      yPercent: 103,
      stagger: 0.1,
      ease: "expo.inOut",
    });
  }, []);

  return (
    <div className="text-[5vw]">
      <div
        ref={containerRef}
        className="flex gap-x-10"
        style={{ fontFamily: "'PT Sans Narrow', sans-serif " }}
      >
        <h1 className=" p-0 text-[5vw] leading-[0.75] flex overflow-hidden pb-[0.5vw]">
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            C
          </div>
          <div data-char="R" className="inline-block -tracking-[0.3vw]">
            A
          </div>
          <div data-char="E" className="inline-block -tracking-[0.3vw]">
            F
          </div>
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            A
          </div>
          <div data-char="T" className="inline-block -tracking-[0.3vw]">
            S
          </div>
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            I
          </div>
          <div data-char="V" className="inline-block -tracking-[0.3vw]">
            R
          </div>
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            E
          </div>
        </h1>

        <h1 className=" p-0 text-[5vw] leading-[0.75] flex overflow-hidden pb-[0.5vw]">
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            C
          </div>
          <div data-char="R" className="inline-block -tracking-[0.3vw]">
            A
          </div>
          <div data-char="E" className="inline-block -tracking-[0.3vw]">
            F
          </div>
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            A
          </div>
          <div data-char="T" className="inline-block -tracking-[0.3vw]">
            S
          </div>
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            I
          </div>
          <div data-char="V" className="inline-block -tracking-[0.3vw]">
            R
          </div>
          <div data-char="." className="inline-block -tracking-[0.3vw]">
            E
          </div>
        </h1>
      </div>
    </div>
  );
};

export default TextAnimation;
