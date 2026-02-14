import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  onNext: () => void;
}

const qualities = [
  { emoji: "💜", title: "Bigges heart", desc: "You care in ways that feel real and haunted hahaha" },
  { emoji: "🌸", title: "Calm Presence", desc: "Being with you feels peaceful and grounding" },
  { emoji: "✨", title: "toooo sweet betu", desc: "even mithais are afraid of you" },
  { emoji: "⭐", title: "Your smile", desc: "Best therapy in the world" },
  { emoji: "🌙", title: "strong Strength", desc: "Ache Acho ko rula de" },
  { emoji: "💫", title: "Just You", desc: "beautiful, confident , loving, caring....... everything is perfect" },
];

const WhyYouMatterPage = ({ onNext }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background relative overflow-hidden px-4 py-12">
      <motion.p
        className="font-handwriting text-lg text-primary/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        for the little reasons ✨
      </motion.p>
      <motion.h1
        className="font-handwriting text-4xl md:text-5xl text-primary italic mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Why You Matter 💖
      </motion.h1>
      <motion.p
        className="text-muted-foreground mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A glimpse into what makes you extraordinary to me
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl w-full mb-8">
        {qualities.map((q, i) => (
          <motion.div
            key={i}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-border/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-2xl">
              {q.emoji}
            </div>
            <h3 className="font-handwriting text-xl text-primary italic mb-2">{q.title}</h3>
            <p className="text-muted-foreground text-sm">{q.desc}</p>
            <div className="w-12 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
          </motion.div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="bg-primary text-primary-foreground rounded-full py-3 px-8 font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
      >
        Continue ✨ <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default WhyYouMatterPage;
