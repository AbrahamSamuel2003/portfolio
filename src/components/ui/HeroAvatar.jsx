import { memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import avatarImg from "../../assets/avatar-animated.webp";

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
      className="relative w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] h-[175px] sm:h-[340px] lg:h-[460px] xl:h-[490px] mx-auto flex items-center justify-center select-none card-stable"
    >
      {/* Multi-layered Ambient Light & Blueprint Radial Rings */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4452E6]/20 via-[#2C3480]/10 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
      
      {/* Concentric Blueprint Rings for Engineering Depth */}
      <div className="absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[410px] lg:h-[410px] xl:w-[440px] xl:h-[440px] rounded-full border border-[#4452E6]/20 bg-white/30 pointer-events-none" />
      <div className="absolute w-[210px] h-[210px] sm:w-[350px] sm:h-[350px] lg:w-[460px] lg:h-[460px] xl:w-[490px] xl:h-[490px] rounded-full border border-[#CBD5E1]/60 pointer-events-none border-dashed" />

      {/* Enlarged Floating Avatar Sphere with Dynamic 3D Spring Tilt (0 React Re-renders) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        className="relative z-10 w-[145px] h-[145px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] rounded-full p-1.5 sm:p-2.5 lg:p-3 bg-gradient-to-tr from-[#2C3480] via-[#4452E6] to-[#60A5FA] shadow-xl sm:shadow-2xl shadow-[#2C3480]/25 will-change-transform"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-white p-1 shadow-inner">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-50">
            <img
              src={avatarImg}
              alt="Abraham Samuel T — Full Stack Developer"
              width="400"
              height="400"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default HeroAvatar;
