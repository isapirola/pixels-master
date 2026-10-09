import React from "react";

const PaletteCounter = ({ palette }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {Object.keys(palette).map(c => {
        return (
          <div
            key={c}
            title={palette[c].id}
            className="relative inline-flex items-center justify-center w-9 h-9"
            style={{ backgroundColor: c }}
          >
            <span className="absolute px-0.5 bottom-0 right-0 bg-white text-gray-800 text-xs opacity-45">
              {palette[c].count}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(PaletteCounter);
