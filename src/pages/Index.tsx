import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import LandingPage from "@/components/LandingPage";
import LetterPage from "@/components/LetterPage";
import SongsPage from "@/components/SongsPage";
import MemoryMatchGame from "@/components/MemoryMatchGame";
import RandomThoughts from "@/components/RandomThoughts";
import WhyYouMatterPage from "@/components/WhyYouMatterPage";
import OneLastThoughtPage from "@/components/OneLastThoughtPage";
import FallingPetals from "@/components/FallingPetals";

const steps = [
  "loading",
  "landing",
  "letter",
  "songs",
  "memory",
  "thoughts",
  "whyyoumatter",
  "onelastthought",
] as const;

const Index = () => {
  const [step, setStep] = useState(0);

  const nextStep = useCallback(() => {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }, []);

  const currentStep = steps[step];

  return (
    <>
      <FallingPetals />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {currentStep === "loading" && <LoadingScreen onComplete={nextStep} />}
          {currentStep === "landing" && <LandingPage onNext={nextStep} />}
          {currentStep === "letter" && <LetterPage onNext={nextStep} />}
          {currentStep === "songs" && <SongsPage onNext={nextStep} />}
          {currentStep === "memory" && <MemoryMatchGame onNext={nextStep} />}
          {currentStep === "thoughts" && <RandomThoughts onNext={nextStep} />}
          {currentStep === "whyyoumatter" && <WhyYouMatterPage onNext={nextStep} />}
          {currentStep === "onelastthought" && <OneLastThoughtPage />}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Index;
