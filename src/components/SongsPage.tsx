import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, Heart, Headphones } from "lucide-react";
import { useState, useRef } from "react";

interface Props {
  onNext: () => void;
}

const songs = [
  { title: "Pal Pal", subtitle: "Your favourite babe 💖", color: "bg-amber-100", file: "/palpal.mp3" },
  { title: "Tum Mile", subtitle: "One of my favourites🐌", color: "bg-green-100", file: "/tummile.mp3" },
  { title: "Shivaaye", subtitle: "Whem you miss US🌙", color: "bg-green-100", file: "/shivay.mp3" },
];


const SongCard = ({ song, index }: { song: typeof songs[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  return (
    <motion.div
      className={`${song.color} rounded-2xl p-6 shadow-md relative overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.2 }}
    >
      {/* Corner dots */}
      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-foreground/20" />
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-foreground/20" />
      <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-foreground/20" />
      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-foreground/20" />

      {/* SIDE A label */}
      <p className="text-center text-xs text-foreground/40 tracking-widest mb-3">SIDE A</p>

      {/* Inner card */}
      <div className="bg-pink-100/80 rounded-xl p-4 mb-4">
        <h3 className="font-bold text-lg text-center text-foreground">{song.title}</h3>
        <p className="font-handwriting text-sm text-primary text-center">{song.subtitle}</p>

        {/* Cassette reel */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="w-8 h-8 rounded-full border-2 border-foreground/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border border-foreground/20" />
          </div>
          <div className="flex-1 h-6 bg-foreground/80 rounded" />
          <div className="w-8 h-8 rounded-full border-2 border-foreground/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border border-foreground/20" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-foreground/50">0:00</span>
        <button
  onClick={() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(song.file);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }}
  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
>
  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
</button>

        <Heart className="w-5 h-5 text-foreground/30" />
      </div>
    </motion.div>
  );
};

const SongsPage = ({ onNext }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background relative overflow-hidden px-4 py-12">
      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/8"
          style={{
            width: 12 + i * 10,
            height: 12 + i * 10,
            left: `${5 + i * 20}%`,
            top: `${10 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
        />
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
        Hope they make you smile ✨
      </motion.p>
      <motion.h1
        className="font-handwriting text-4xl md:text-5xl text-primary italic mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Songs That Feel Like Us 🎵
      </motion.h1>

      {/* Headphones icon */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Headphones className="w-8 h-8 text-foreground/30" />
      </motion.div>

      <div className="max-w-md w-full space-y-6 mb-8">
        {songs.map((song, i) => (
          <SongCard key={i} song={song} index={i} />
        ))}
      </div>

      <button
        onClick={onNext}
        className="bg-primary text-primary-foreground rounded-full py-3 px-8 font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
      >
        Next ✨ <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SongsPage;
