import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  onNext: () => void;
}

const LandingPage = ({ onNext }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden px-4">
      {/* Floating decorations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 10 + i * 8,
            height: 10 + i * 8,
            background: i % 2 === 0 ? 'hsl(var(--primary) / 0.1)' : 'hsl(var(--secondary) / 0.3)',
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* Hamburger menu icon */}
      <div className="absolute top-6 right-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="space-y-1">
            <div className="w-4 h-0.5 bg-primary/40 rounded" />
            <div className="w-4 h-0.5 bg-primary/40 rounded" />
            <div className="w-4 h-0.5 bg-primary/40 rounded" />
          </div>
        </div>
      </div>

      <motion.p
        className="font-handwriting text-xl text-primary/70 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hey Aditi, I made this only for you... ✨
      </motion.p>

      <motion.h1
        className="font-handwriting text-4xl md:text-6xl lg:text-7xl text-primary text-center leading-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        See what I have made for you Babe ❤️
      </motion.h1>

      {/* Card */}
      <motion.div
        className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full shadow-lg border border-border/50 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* Traffic light dots */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* Snail emoji */}   
        <div className="absolute -top-4 -right-2 text-3xl">🐌💕</div>

        <p className=" font-handwriting text-foreground/80 text-center mb-2">
          Just a few thoughts, and a little question at the end. 🐌
        </p>
        <p className="font-handwriting text-primary text-center mb-4">
          Tap below when you're ready 💖
        </p>

        <button
          onClick={onNext}
          className="w-full bg-primary text-primary-foreground rounded-full py-3 px-6 font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Open This 💌 <ArrowRight className="w-4 h-4" />
        </button>

        {/* Bunny emoji */}
        <div className="absolute -bottom-6 -left-4 text-4xl">🐰</div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
