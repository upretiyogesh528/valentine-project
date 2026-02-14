import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  onNext: () => void;
}

const LetterPage = ({ onNext }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden px-4">
      {/* Floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/8"
          style={{
            width: 15 + i * 12,
            height: 15 + i * 12,
            left: `${10 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Menu icon */}
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
        className="font-handwriting text-lg text-primary/70 mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Just because it felt right ✨
      </motion.p>
      <motion.h1
        className="font-handwriting text-4xl md:text-5xl text-primary italic mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        A Love letter  💌❤️
      </motion.h1>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-lg w-full shadow-lg border border-border/30 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
            transition={{ duration: 0.5 }}
          >
            {/* Envelope */}
            <motion.div
              className="relative w-56 h-40 mb-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Envelope body */}
              <div className="absolute inset-0 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg shadow-md" />
              {/* Envelope flap */}
              <div
                className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-lg"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                }}
              />
              {/* Heart seal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">
                💌
              </div>
              {/* Small hearts */}
              <div className="absolute -top-2 -right-2 text-sm">💕</div>
              <div className="absolute -bottom-2 -left-2 text-sm">💕</div>
            </motion.div>

            <p className="text-muted-foreground text-sm mb-3">Click to open ✨</p>
            <div className="bg-card/80 rounded-full px-4 py-1.5 text-sm text-foreground/70 border border-border/30">
              A Note For You ❤️
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-lg border border-border/30 relative"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
          >
             {/* Background watermark */}
  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
    <img
      src="/we.jpeg"
      alt="memory"
      className="w-full h-full object-cover opacity-10"
    />
  </div>
            {/* Cat with flowers */}
<div className="absolute -top-6 right-4">
  <img
    src="/we.jpeg"
    alt="we"
    className="w-20  h-20 object-cover rounded-full"
  />
</div>

            <h2 className="font-handwriting text-2xl text-foreground mb-2">
              Hey Sanvi 💖
            </h2>
            <div className="w-full h-px bg-border/50 mb-4" />

            <p className="font-handwriting text-lg text-foreground/80 leading-relaxed mb-6">
              I always wanted to do something today, for you everyday but i can't. Babe simply because you are everything to me. 
              You are the best and perfect person i've ever met and the place you got in my hear can never be changed.
              The way you smile, the way you laugh, the way you care, the way you are there for me, even after gussa, the way you understand me, no one has ever loved me like you do.
              sometimes i wonder how did i get so lucky to have you in my life, and then i remember that it's not luck, it's destiny. 
              Sometimes (Always) i make mistakes that hurt you, but you never stop left me you tell me my mistakes and give me a chance to correct, i know i'm not perfect babe but i promise to always try to be better for you, for us. 
              I’ve never seen a perfect human being like you — someone who can manage everything home, outside, friends, love, all of it. You’re truly wife material, babe. And I know you deserve someone much better than me… but I never want to lose you. Never, ever.
              Every time I’m with you, I can’t stop smiling, and i can,want,need to spend my rest of the life with you .🌙
              I don't know where this goes in future, As long as I’m lucky enough to stay by your side, I’ll try my best to make every day better for you. and that's okay.
              I just wanted you to know I appreciate you, I'm proud Of you and I'm glad we have met in this life. 🤍
            </p>

            <p className="font-handwriting text-xl text-right text-foreground/70 mb-4">
              Always i'm here 🐌
            </p>

            <div className="absolute bottom-4 right-6 text-sm text-pink-300">💕</div>

            <button
              onClick={onNext}
              className="w-full bg-primary text-primary-foreground rounded-full py-3 px-6 font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mt-4"
            >
              Keep Going ✨ <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LetterPage;
