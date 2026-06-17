"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ActiveMissionRunner() {
  return (
    <motion.div
      className="pointer-events-none absolute right-4 top-[3.25rem] sm:right-6 sm:top-[3.5rem]"
      aria-hidden
      animate={{ y: [0, -16, 0] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      <Image
        src="/active-mission-sprite.png"
        alt=""
        width={72}
        height={52}
        className="h-10 w-auto object-contain mix-blend-screen sm:h-11"
        draggable={false}
      />
    </motion.div>
  );
}
