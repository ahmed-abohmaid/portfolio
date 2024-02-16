"use client";
import styles from "@/styles";
import Links from "./Links";
import { useScrollTrigger } from "@mui/material";

type Props = {
  window?: () => Window;
};

export default function Navbar({ window }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
    target: window ? window() : undefined,
  });

  return (
    <nav
      className={`flex gap-5 justify-between items-center px-10 duration-200 ease ${
        styles.container
      } ${
        trigger &&
        "bg-[rgba(255, 255, 255, 0.7)] backdrop-blur-[6px] rounded-3xl shadow mt-2"
      }`}
    >
      <h1 className={`font-[500] text-2xl ${styles.circleHighlight}`}>
        Abohmaid
      </h1>
      <Links />
    </nav>
  );
}
