import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: 20 + i * 15,
            height: 20 + i * 15,
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Pixel cat */}
      <motion.div
        className="text-8xl mb-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
         <img
    src="/yogesh.jpeg"
    alt="Yogesh"
    className="w-24 h-24 object-cover mx-auto rounded-full"
  />
      </motion.div>
      <motion.div
        className="text-4xl -mt-8 mb-8"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        💖
      </motion.div>

      <motion.h1
        className="font-handwriting text-4xl md:text-5xl text-primary italic mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Something Special Sanvi ✨
      </motion.h1>
      <p className="text-muted-foreground mb-8">
        is being prepared for you... 🐌
      </p>

      {/* Progress bar */}
      <div className="w-64 h-3 rounded-full bg-primary/20 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="flex gap-1 mt-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
