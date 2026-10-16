import { useState, useRef, useEffect, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const AboutCube3D = memo(function AboutCube3D({ cards }) {
  const [activeFace, setActiveFace] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(320);

  // Measure container width dynamically to match the EXACT width of the Executive Bio Banner above it
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const measured = Math.round(containerRef.current.offsetWidth);
        setCardWidth(measured);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Cube radius is half the card width (snapped to integer to prevent subpixel texture blur)
  const radius = Math.round(cardWidth / 2);

  // Track rotation angle with spring physics
  const targetRotation = -activeFace * 90;
  const rotMotionVal = useMotionValue(targetRotation);
  const smoothRotation = useSpring(rotMotionVal, {
    stiffness: 280,
    damping: 30,
    mass: 0.8
  });

  useEffect(() => {
    rotMotionVal.set(targetRotation);
  }, [targetRotation, rotMotionVal]);

  const handleNext = () => {
    setActiveFace((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveFace((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleSelectFace = (index) => {
    setActiveFace(index);
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center select-none py-1">
      
      {/* 3D CUBE STAGE (Full-width matching Executive Banner) */}
      <div
        className="relative flex items-center justify-center my-1"
        style={{
          width: `${cardWidth}px`,
          height: "390px",
          perspective: "1200px"
        }}
      >
        {/* Rotating 3D Prism Rig (Rotates around cube center at Z = -radius so active face sits at Z = 0) */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_e, { offset, velocity }) => {
            if (offset.x < -35 || velocity.x < -250) {
              handleNext();
            } else if (offset.x > 35 || velocity.x > 250) {
              handlePrev();
            }
          }}
          style={{
            width: `${cardWidth}px`,
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            z: -radius,
            rotateY: smoothRotation,
            cursor: "grab"
          }}
          whileDrag={{ scale: 0.95 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const angle = idx * 90;
            const isCurrentlyActive = idx === activeFace;

            return (
              <div
                key={card.category}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "flat",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  WebkitFontSmoothing: "subpixel-antialiased"
                }}
                className={`p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between transition-opacity duration-300 ${
                  isCurrentlyActive ? "opacity-100 ring-2 ring-[#4452E6]/25 shadow-md" : "opacity-80 pointer-events-none"
                }`}
              >
                {/* Face Content */}
                <div className="space-y-3">
                  {/* Category & Icon Row */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs"
                      style={{ backgroundColor: card.bgAccent, color: card.accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#475569] block font-bold leading-tight text-left">
                      {card.category}
                    </span>
                  </div>

                  {/* Title Row - Crisp Dark Text */}
                  <div className="text-left pt-0.5">
                    <h4 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                      {card.title}
                    </h4>
                  </div>

                  {/* Organization & Period Row */}
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs border-b border-[#E2E8F0] pb-2 text-left">
                    <span className="font-semibold text-[#0F172A] text-xs">
                      {card.subtitle}
                    </span>
                    <span className="text-[#64748B] font-mono text-[10px] flex-shrink-0">
                      {card.period}
                    </span>
                  </div>

                  {/* Highlights Bullet Matrix - Razor Sharp High-Contrast Text */}
                  <div className="space-y-2 pt-0.5 text-left">
                    {card.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#0F172A] leading-relaxed">
                        <CheckCircle2 size={14} className="text-[#4452E6] mt-0.5 flex-shrink-0" />
                        <span className="text-xs leading-snug text-[#1E293B]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* CLEAN CENTERED 4-DOT PILL INDICATOR */}
      <div className="flex items-center justify-center gap-2 mt-6 mb-1">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectFace(idx)}
            aria-label={`Jump to face ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeFace ? "w-7 bg-[#4452E6]" : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
            }`}
          />
        ))}
      </div>

    </div>
  );
});

export default AboutCube3D;

