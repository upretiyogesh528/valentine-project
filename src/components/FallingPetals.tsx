import { motion } from "framer-motion";
import { useMemo } from "react";

const FallingPetals = () => {
  const petals = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 10 + Math.random() * 14,
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: -20,
            fontSize: petal.size,
            opacity: petal.opacity,
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, Math.sin(petal.id) * 60],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          🌹
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
