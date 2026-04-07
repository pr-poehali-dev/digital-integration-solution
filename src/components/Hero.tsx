import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  onSignup: () => void;
}

export default function Hero({ onSignup }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/536451f7-8f5e-4a00-b0a9-6ee503931d54/files/db08b89b-281e-454d-82ab-85787205e01c.jpg"
          alt="Онлайн-тренировки"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm mb-4 opacity-70">Твоя форма — твои правила</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ТРЕНИРУЙСЯ<br />ОНЛАЙН
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Видеоуроки, персональные программы и живые занятия с тренером — всё в одном месте
        </p>
        <button
          onClick={onSignup}
          className="bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer"
        >
          Начать тренировки
        </button>
      </div>
    </div>
  );
}