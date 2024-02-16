import BigLinks from "./BigLinks";
import SmallLinks from "./SmallLinks";

interface Props {
  isTapping: boolean;
  handleTappingStart: () => void;
  handleTappingEnd: () => void;
}

export default function Links({
  isTapping,
  handleTappingStart,
  handleTappingEnd,
}: Props) {
  return (
    <>
      <BigLinks />
      <SmallLinks
        isTapping={isTapping}
        handleTappingStart={handleTappingStart}
        handleTappingEnd={handleTappingEnd}
      />
    </>
  );
}
