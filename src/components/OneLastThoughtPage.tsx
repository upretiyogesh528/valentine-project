import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";

const OneLastThoughtPage = () => {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden px-4">
      <motion.p
        className="font-handwriting text-lg text-primary/70 mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        the grand finale... ✨
      </motion.p>
      <motion.h1
        className="font-handwriting text-4xl md:text-5xl text-primary italic mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        One Last Thought ❤️
      </motion.h1>

      <motion.div
        className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-lg border border-border/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-handwriting text-xl text-primary/80">Final Letter</h2>
        </div>

        <div className="bg-secondary/30 rounded-xl p-5 mb-6">
          <p className="font-handwriting text-lg text-foreground/80 mb-3">Hey Aditi, 💖</p>
          <p className="font-handwriting text-foreground/70 mb-2">love isn't about perfection, just connection. ✨</p>
          <p className="font-handwriting text-foreground/70 mb-2">I want to be with you babe that's it. 💜</p>
          <p className="font-handwriting text-foreground/70 mb-2">So here's my small proposal... 🌙</p>
          <p className="font-handwriting text-lg text-foreground/90 font-semibold">Will you be my Valentine? 🌹</p>
        </div>

        <AnimatePresence mode="wait">
          {answer === null ? (
            <motion.div className="flex justify-end gap-3" key="buttons">
              <button
                onClick={() => setAnswer("yes")}
                className="bg-primary text-primary-foreground rounded-full py-2.5 px-8 font-medium hover:bg-primary/90 transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => setAnswer("no")}
                className="bg-card border border-border rounded-full py-2.5 px-8 font-medium text-foreground/70 hover:bg-accent transition-colors"
              >
                No
              </button>
            </motion.div>
          ) : answer === "yes" ? (
            <motion.div
              key="yes"
              className="text-center py-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-5xl mb-3">🥰💖🎉</div>
              <p className="font-handwriting text-2xl text-primary italic">I already knew babe!</p>
              <p className="font-handwriting text-lg text-muted-foreground mt-2">Happy Valentine's Day, my love 🌹</p>
            </motion.div>
          ) : (
            <motion.div
              key="no"
              className="text-center py-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-5xl mb-3">🥺</div>
              <p className="font-handwriting text-2xl text-primary italic">Its a trap you can only choose yes 😂💖</p>
              <button
                onClick={() => setAnswer(null)}
                className="mt-3 text-primary underline font-handwriting"
              >
                yes dont look here 😂
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OneLastThoughtPage;
