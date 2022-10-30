import React from "react";
import { ImgPlayButton } from "../../style/custom-styles";
import { Play } from "../../svgs";

const PlayButton = () => {
  return (
    <ImgPlayButton
      src={"https://cdn-icons-png.flaticon.com/512/0/375.png"}
      alt=""
    >
      <Play />
    </ImgPlayButton>
  );
};

export default PlayButton;
