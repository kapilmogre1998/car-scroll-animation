import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './CarScroll.css'

gsap.registerPlugin(ScrollTrigger);

export default function CarScroll() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const lettersRef = useRef([]);
  const box1Refs = useRef([]);

  const title = "WELCOME\u00A0ITZFIZZ";

  useEffect(() => {
    const section = sectionRef.current;
    const car = carRef.current;
    const trail = trailRef.current;

    if (!section || !car) return;

    const letters = lettersRef.current.filter(Boolean);
    const boxes = box1Refs.current.filter(Boolean);

    const roadWidth = window.innerWidth;
    const carWidth = 160;
    const endX = roadWidth - carWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(car, {
      x: endX,
      ease: "none",
      onUpdate: () => {
        const carX = gsap.getProperty(car, "x") + carWidth / 2;

        letters.forEach((letter) => {
          const letterX = letter.offsetLeft;
          letter.style.opacity = carX >= letterX ? 1 : 0;
        });

        if (trail) {
          gsap.set(trail, { width: carX });
        }
      },
    });

    boxes.forEach((box, index) => {
      const startPoint = index * 0.1;

      tl.fromTo(
        box,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.2 },
        startPoint
      );
    });


    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);


  return (
    <section ref={sectionRef} className="relative h-[100vh] flex items-center justify-center car-scroll-container" >
      <div className="relative w-full h-[200px] overflow-hidden" style={{ background: '#1e1e1e' }}>
        <div
          ref={trailRef}
          className="absolute left-0 top-0 h-full bg-green-400"
          style={{ width: 0 }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-10 flex text-[100px] font-bold text-black z-10 gap-4">
          {title.split("").map((letter, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="opacity-0 transition-opacity duration-200 z-10"
              style={{ fontSize: '7.5rem' }}
            >
              {letter}
            </span>
          ))}
        </div>

        <img
          ref={carRef}
          src="/public/mcLaren.png"
          alt="car"
          className="absolute top-1/2 -translate-y-1/2 z-20"
          style={{ width: '28%', height: '194px' }}
        />
      </div>

      {[
        { top: "7%", right: "30%", color: '#111', bgClr: '#def54f', text1: '58%', text2: 'Increase in pick up point use' },
        { top: "73%", right: "40%", color: '#111', bgClr: '#6ac9ff', text1: '23%', text2: 'Decreased in customer phone calls' },
        { top: "7%", right: "8%", color: '#fff', bgClr: '#333', text1: '27%', text2: 'Increase in pick up point use' },
        { top: "73%", right: "15%", color: '#111', bgClr: '#fa7328', text1: '40%', text2: 'Decreased in customer phone calls' },
      ].map((pos, index) => (
        <div
          key={index}
          ref={(el) => (box1Refs.current[index] = el)}
          className="absolute opacity-0 shadow-xl rounded-xl px-6 py-9 text-md z-20 "
          style={{
            top: pos.top,
            right: pos.right,
            background: pos.bgClr,
            color: pos.color,
          }}
        >
          <span className="text-5xl font-bold block mb-2">{pos.text1}</span>
          {pos.text2}
        </div>
      ))}

    </section>
  );
}