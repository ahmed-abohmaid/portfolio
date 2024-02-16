"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "../../../MenuIcon";
import Menu from "./Menu";

type Props = {
  isTapping: boolean;
  handleTappingStart: () => void;
  handleTappingEnd: () => void;
};

export default function BigNavbar({
  isTapping,
  handleTappingStart,
  handleTappingEnd,
}: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => setIsClicked(!isClicked);

  return (
    <div className="sm:hidden block">
      <motion.button
        onClick={handleMenuClick}
        className="py-6"
        animate={{
          y: isTapping ? 7 : 0,
        }}
        onTapStart={handleTappingStart}
        onTap={handleTappingEnd}
        onTapCancel={handleTappingEnd}
      >
        <MenuIcon isClicked={isClicked} />
      </motion.button>
      <motion.div animate={isClicked ? "opened" : "closed"} className="w-full">
        <Menu />
      </motion.div>
    </div>
  );
}
