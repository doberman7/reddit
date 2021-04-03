import React from "react";
import logo from "./assets/logo.png";
import * as VFX from "react-vfx";

const RedditIcon = () => {
  return (
    <>
      <VFX.VFXProvider>
        {/* Render image with shader */}
        <VFX.VFXImg
          // src="https://amagi.dev/react-vfx/cat.gif"
          src={logo}
          alt="image not found"
          shader="rgbShift"
          // shader="halftone"
          style={{
            height: "70px",
            // width: "auto",
            // position: "absolute",
            // left: "35%",
            // top: " 0px",
            // zIndex: " -1",
          }}
        />
      </VFX.VFXProvider>
    </>
  );
};

export default RedditIcon;
