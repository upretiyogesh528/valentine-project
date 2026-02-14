import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  onNext: () => void;
}

const words = [
  "I'm",
  "Always",
  "Here",
  "For",
  "you",
  "Babe",
];

const MemoryMatchGame = ({ onNext }: Props) => {
  const [cards, setCards] = useState<{ id: number; word: string; flipped: boolean; matched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const shuffled = [...words, ...words]
      .sort(() => Math.random() - 0.5)
      .map((word, i) => ({ id: i, word: word, flipped: false, matched: false }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setMatched(0);
    setWon(false);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    const card = cards[id];
    if (card.flipped || card.matched) return;

    const newCards = [...cards];
    newCards[id].flipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
    if (cards[first].word === cards[second].word) {
        setTimeout(() => {
          const updated = [...newCards];
          updated[first].matched = true;
          updated[second].matched = true;
          setCards(updated);
          setFlippedCards([]);
          const newMatched = matched + 1;
          setMatched(newMatched);
          if (newMatched === words.length) setWon(true);
        }, 500);
      } else {
        setTimeout(() => {
          const updated = [...newCards];
          updated[first].flipped = false;
          updated[second].flipped = false;
          setCards(updated);
          setFlippedCards([]);
        }, 800);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background relative overflow-hidden px-4 py-12">
      {/* Confetti-like decorations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${5 + i * 12}%`,
            top: `${8 + (i % 4) * 20}%`,
            fontSize: '12px',
          }}
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
        >
          {['💜', '✨', '💫', '🌸', '💕', '⭐', '🦋', '💐'][i]}
        </motion.div>
      ))}

      {/* Menu icon */}
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
        Ye thodi Bkchodi 😂 
      </motion.p>
      <motion.h1
        className="font-handwriting text-4xl md:text-5xl text-primary italic mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Memory Match 💞
      </motion.h1>
      <p className="text-muted-foreground mb-6">Match the pairs and test your memory 💖</p>

      {/* Score */}
      <div className="flex gap-4 mb-6">
        <div className="bg-secondary/50 rounded-xl px-6 py-3 text-center border border-border/30">
          <p className="text-xs text-muted-foreground">Moves</p>
          <p className="font-bold text-xl text-primary">{moves}</p>
        </div>
        <div className="bg-secondary/50 rounded-xl px-6 py-3 text-center border border-border/30">
          <p className="text-xs text-muted-foreground">Matched</p>
          <p className="font-bold text-xl text-primary">{matched}/{words.length}</p>
        </div>
      </div>

      {/* Game board */}
      <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-md w-full shadow-lg border border-border/30 mb-6">
        {won ? (
          <motion.div
            className="text-center py-8 bg-gradient-to-b from-secondary/30 to-secondary/10 rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="font-handwriting text-3xl text-primary italic mb-2">You Won!</h2>
            <p className="text-muted-foreground mb-4">Completed in {moves} moves</p>
            <button
              onClick={resetGame}
              className="bg-primary text-primary-foreground rounded-full py-2 px-6 font-medium hover:bg-primary/90 transition-colors"
            >
              Play Again
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {cards.map((card, i) => (
              <motion.button
                key={card.id}
                className={`aspect-square rounded-xl text-2xl flex items-center justify-center font-bold transition-all ${
                  card.flipped || card.matched
                    ? 'bg-card shadow-md border border-border/30'
                    : 'bg-primary/70 text-primary-foreground hover:bg-primary/80'
                }`}
                onClick={() => handleCardClick(i)}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
              >
                {card.flipped || card.matched ? card.word : '?'}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={resetGame}
          className="border border-border rounded-full py-3 px-6 font-medium text-muted-foreground hover:bg-accent transition-colors"
        >
          Reset Game
        </button>
        <button
          onClick={onNext}
          className="bg-primary text-primary-foreground rounded-full py-3 px-6 font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Next ✨ <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MemoryMatchGame;
