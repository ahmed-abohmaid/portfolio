import styles from "@/styles";
import Links from "./Links";

export default function Logo() {
  return (
    <div
      className={`${styles.container} flex justify-between items-center gap-2`}
    >
      <h1 className={`font-bold text-3xl ${styles.circleHighlight}`}>Abohmaid</h1>
      <Links />
    </div>
  );
}
