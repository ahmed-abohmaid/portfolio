const styles: { [props: string]: string } = {
  container: "w-[80%] mx-auto py-5",
  marker:
    "relative before:absolute before:block before:top-1/2 before:left-1.5 before:rounded-tr-[20%] before:rounded-br-[25%] before:rounded-tl-[20%] before:rounded-bl-[24%] before:bg-green-300 before:z-[-1] before:mx-[-3px] before:h-1/2 before:w-full before:rotate-[2deg] before:pt-[6px] before:pr-[5px] before:pb-[3px] before:pl-[6px] before:duration-200 before:ease-in hover:before:bold",
  markerHover:
    "relative before:absolute before:block before:top-1/2 before:left-1.5 before:rounded-tr-[20%] before:rounded-br-[25%] before:rounded-tl-[20%] before:rounded-bl-[24%] before:z-[-1] before:mx-[-3px] before:h-1/3 before:w-full before:bg-green-300 before:rotate-[2deg] before:pt-[6px] before:pr-[5px] before:pb-[3px] before:pl-[6px] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200 before:ease-in hover:before:bold",
  circleHighlight:
    "relative before:absolute before:z-[-1] before:left-[-0.4em] before:top-[-0.15em] before:border-[3px] before:border-green-300 before:border-r-transparent before:w-full before:h-[1em] before:rotate-[2deg] before:rounded-[50%] before:py-[0.1em] before:px-[0.25em] after:absolute after:z-[-1] after:left-[-0.4em] after:top-[0.15em] after:border-[3px] after:border-green-300 after:border-l-transparent after:border-t-transparent after:w-full after:h-[1em] after:rotate-[-1deg] after:rounded-[50%] after:p-[0.1em] after:px-[0.25em]",
};

export default styles;