type Props = {
  isClicked: boolean;
};

export default function MenuIcon({ isClicked }: Props) {
  return (
    <div
      className={`
        w-6 relative
        before:absolute before:h-[2px] before:bg-black before:w-full before:left-0 before:transition-all before:duration-200 before:ease-out before:rounded-full before:cursor-pointer
        after:absolute after:h-[2px] after:bg-black after:w-full after:left-0 after:transition-all after:duration-200 after:ease-out  after:rounded-full after:cursor-pointer
        ${
          isClicked
            ? "before:!top-[12px] before:rotate-45 after:!top-[12px] after:-rotate-45"
            : "before:top-0 after:top-[16px]"
        }`}
    >
      <span
        className={`h-[2px] bg-black w-full absolute top-[8px] left-0 transition-all duration-200 ease rounded-full cursor-pointer ${
          isClicked ? "opacity-0" : "opacity-100"
        }`}
      ></span>
    </div>
  );
}
