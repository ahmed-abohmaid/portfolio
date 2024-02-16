"use client";
import styles from "@/styles";
import { useScrollTrigger } from "@mui/material";
import Links from "./Links";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  window?: () => Window;
};

export default function Navbar({ window }: Props) {
  const [isTapping, setIsTapping] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
    target: window ? window() : undefined,
  });

  const handleTappingStart = () => setIsTapping(true);
  const handleTappingEnd = () => setIsTapping(false);

  return (
    <nav
      className={`fixed bottom-0 sm:bottom-auto sm:top-0 left-0 right-0 flex gap-5 justify-between sm:items-center items-end px-5 md:px-10 duration-200 ease ${
        styles.container
      } ${
        trigger &&
        "bg-[rgba(255, 255, 255, 0.7)] backdrop-blur-[6px] rounded-3xl shadow sm:mt-2 mb-3"
      }`}
    >
      <motion.h1
        className={`font-[500] text-2xl ${styles.circleHighlight}`}
        animate={{
          x: isTapping ? 8 : 0,
          y: isTapping ? 4 : 0
        }}
      >
        Abohmaid
      </motion.h1>
      <Links
        isTapping={isTapping}
        handleTappingStart={handleTappingStart}
        handleTappingEnd={handleTappingEnd}
      />
    </nav>
  );
}
