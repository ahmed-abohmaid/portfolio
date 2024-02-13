"use client";
import styles from "@/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-5 items-center justify-between">
      <li>
        <Link
          href="/"
          className={pathname === "/" ? styles.marker : styles.markerHover}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.marker : styles.markerHover}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/portfolio"
          className={
            pathname === "/portfolio" ? styles.marker : styles.markerHover
          }
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={
            pathname === "/contact" ? styles.marker : styles.markerHover
          }
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className={pathname === "/blog" ? styles.marker : styles.markerHover}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
}
