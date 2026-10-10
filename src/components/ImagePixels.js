import React from "react";

const ImagePixels = ({
  pixels,
  map,
  palette,
  width,
  height,
  size,
  titled,
  selectedColor,
  hasGap,
}) => {
  return (
    <div
      className={`inline-flex flex-col ${hasGap ? "gap-[1px] bg-white/40 p-[1px] rounded" : ""}`}
      style={{
        width: hasGap ? width * size + (width - 1) + 2 + "px" : width * size + "px",
        height: hasGap ? height * size + (height - 1) + 2 + "px" : height * size + "px",
      }}
    >
      {pixels.map((r, i) => {
        return (
          <div
            className={`flex ${hasGap ? "gap-[1px]" : ""}`}
            key={i}
            style={{ height: size + "px" }}
          >
            {r.map((p, j) => {
              if (!p) {
                return (
                  <div
                    key={j}
                    className="inline-block bg-transparent"
                    style={{
                      width: size + "px",
                      height: size + "px"
                    }}
                  />
                );
              } else {
                const color = palette ? palette[map[p.hex]] : p.hex;
                const isDimmed = selectedColor && color !== selectedColor;

                return (
                  <div
                    key={j}
                    className={`inline-block ${hasGap ? "rounded-[1px]" : ""}`}
                    title={titled ? map[p.hex] : null}
                    style={{
                      backgroundColor: color,
                      width: size + "px",
                      height: size + "px",
                      opacity: isDimmed ? 0.15 : 1
                    }}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ImagePixels);
