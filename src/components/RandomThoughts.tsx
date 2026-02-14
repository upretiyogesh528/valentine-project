import { motion } from "framer-motion";
import { link } from "fs";
import { useHref } from "react-router-dom";
import { a } from "vitest/dist/chunks/suite.d.FvehnV49.js";

const thoughts = [
  {
    
    image: "/rr.jpeg",
    caption: "us",
    emoji: "🥺",
    bg: "bg-orange-100",
  },
  {
    image: "/ss.jpeg",
    caption: "A few flowers, just because you are a flower 🌹",
    emoji: "💕",
    bg: "bg-blue-50",
  },
  {
    image: "collage.jpeg",
    caption: "Lifes Becomes Beautiful✨",
    emoji: "🧸",
    bg: "bg-white",
  },
];

interface Props {
  onNext?: () => void;
}

const RandomThoughts = ({ onNext }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background relative overflow-hidden px-4 py-12">
      {/* Floating decorations */}
      {[...Array(6)].map((_, i) => (
        <motion.div
        
          key={i}
          className="absolute rounded-full bg-primary/8"
          style={{
            width: 10 + i * 10,
            height: 10 + i * 10,
            left: `${8 + i * 16}%`,
            top: `${12 + (i % 3) * 28}%`,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity }}
        />
      ))}

      {/* Menu */}
      <div className="absolute top-6 right-6 z-10">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="space-y-1">
            <div className="w-4 h-0.5 bg-primary/40 rounded" />
            <div className="w-4 h-0.5 bg-primary/40 rounded" />
            <div className="w-4 h-0.5 bg-primary/40 rounded" />
          </div>
        </div>
      </div>

      <motion.p
        className="font-handwriting text-lg text-primary/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        the kind that matter ✨
      </motion.p>
      <motion.h1
        className="font-handwriting text-4xl md:text-5xl text-primary italic mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Some random thoughts 💭
      </motion.h1>
      <p className="text-muted-foreground mb-8">Simple thoughts, genuine feelings 💕</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-8">
        {thoughts.map((thought, i) => (
          <motion.div
            key={i}
            className={`${thought.bg} rounded-2xl overflow-hidden shadow-lg`}
            initial={{ opacity: 0, y: 30, rotate: i === 0 ? -3 : i === 2 ? 3 : 0 }}
            animate={{ opacity: 1, y: 0, rotate: i === 0 ? -3 : i === 2 ? 3 : 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            {/* Image area */}
            <div className="h-48 overflow-hidden">
  <img
    src={thought.image}
    alt={thought.caption}
    className="w-full h-full object-cover"
  />
</div>

            {/* Caption area */}
            <div className="bg-white p-4 text-center">
              <p className="font-handwriting text-lg text-foreground/80">{thought.caption}</p>
              <p className="text-2xl mt-1">{thought.emoji}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {onNext && (
        <button
          onClick={onNext}
          className="bg-primary text-primary-foreground rounded-full py-3 px-8 font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Next ✨
        </button>
      )}
    </div>
  );
};

export default RandomThoughts;
