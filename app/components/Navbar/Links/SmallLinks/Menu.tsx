"use client";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMessage } from "react-icons/ai";
import { BsPostcard } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

export default function Menu() {
  const pathname = usePathname();

  return (
    <motion.ul
      className="absolute px-5 py-2 bottom-full left-1/2 -translate-x-1/2 flex sm:hidden items-center gap-3 justify-between text-[rgba(255, 255, 255, 0.7)] backdrop-blur-[6px] rounded-full shadow"
      variants={{
        opened: {
          y: -5,
          x: "-50%",
          opacity: 1,
          display: "flex",
        },
        closed: {
          y: 100,
          x: "-50%",
          opacity: 0,
          display: "hidden",
        },
      }}
    >
      <Tooltip title="Home" arrow placement="top">
        <li
          className={
            pathname === "/"
              ? "text-black bg-green-200 rounded-lg p-1"
              : "hover:text-black text-neutral-700 duration-100 ease-out hover:bg-green-200 rounded-lg p-1"
          }
        >
          <Link href="/" className="cursor-newTab">
            <IoHomeOutline size={25} />
          </Link>
        </li>
      </Tooltip>
      <Tooltip title="About" arrow placement="top">
        <li
          className={
            pathname === "/about"
              ? "text-black bg-green-200 rounded-lg p-1"
              : "hover:text-black text-neutral-700 duration-100 ease-out hover:bg-green-200 rounded-lg p-1"
          }
        >
          <Link href="/about" className="cursor-newTab">
            <IoMdInformationCircleOutline size={25} />
          </Link>
        </li>
      </Tooltip>
      <Tooltip title="Portfolio" arrow placement="top">
        <li
          className={
            pathname === "/portfolio"
              ? "text-black bg-green-200 rounded-lg p-1"
              : "hover:text-black text-neutral-700 duration-100 ease-out hover:bg-green-200 rounded-lg p-1"
          }
        >
          <Link href="/portfolio" className="cursor-newTab">
            <MdOutlinePhotoSizeSelectActual size={25} />
          </Link>
        </li>
      </Tooltip>
      <Tooltip title="Contact" arrow placement="top">
        <li
          className={
            pathname === "/contact"
              ? "text-black bg-green-200 rounded-lg p-1"
              : "hover:text-black text-neutral-700 duration-100 ease-out hover:bg-green-200 rounded-lg p-1"
          }
        >
          <Link href="/contact" className="cursor-newTab">
            <AiOutlineMessage size={25} />
          </Link>
        </li>
      </Tooltip>
      <Tooltip title="Blog" arrow placement="top">
        <li
          className={
            pathname === "/blog"
              ? "text-black bg-green-200 rounded-lg p-1"
              : "hover:text-black text-neutral-700 duration-100 ease-out hover:bg-green-200 rounded-lg p-1"
          }
        >
          <Link href="/blog" className="cursor-newTab">
            <BsPostcard size={25} />
          </Link>
        </li>
      </Tooltip>
    </motion.ul>
  );
}
