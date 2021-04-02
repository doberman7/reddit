import React from "react";

import * as VFX from "react-vfx";

const Cat = () => {
  return (
    <>
      <VFX.VFXProvider>
        {/* Render image with shader */}
        <VFX.VFXImg
          src="https://amagi.dev/react-vfx/cat.gif"
          alt="image"
          shader="rgbShift"
          // shader="halftone"
          style={{ width: "50px", height: "auto" }}
        />
      </VFX.VFXProvider>
    </>
  );
};

export default Cat;
