import { memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import heroImg from "../../assets/hero-avatar.jpg";

const HeroAvatar = memo(function HeroAvatar() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-fluid physics spring configuration
  const springConfig = { damping: 22, stiffness: 200, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, (y) => -y * 0.75);
  const rotateY = useTransform(smoothX, (x) => x * 0.75);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-auto max-w-none py-0 mx-auto flex items-center justify-end lg:justify-center select-none card-stable"
    >
      {/* Floating Portrait Card with Solid Blue Border, Smooth Settle & Dynamic 3D Spring Tilt */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        style={{
          x: smoothX,
          y: smoothY,
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        className="relative z-10 w-[118px] xs:w-[130px] sm:w-[160px] lg:w-[320px] xl:w-[350px] aspect-[522/678] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden border-2 sm:border-[3px] lg:border-4 border-[#4452E6] shadow-md shadow-[#2C3480]/10 bg-white will-change-transform flex-shrink-0"
      >
        <motion.img
          src={heroImg}
          alt="Abraham Samuel T — Full Stack Developer"
          width="522"
          height="678"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          className="w-full h-full object-cover object-[center_12%]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
    </div>
  );
});

export default HeroAvatar;
