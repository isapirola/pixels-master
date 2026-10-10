import React from "react";

const PaletteCounter = ({ palette, selectedColor, onSelectColor }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1">
      {Object.keys(palette).map((c) => {
        const isSelected = selectedColor === c;
        const isDimmed = selectedColor && !isSelected;

        return (
          <div
            key={c}
            title={palette[c].id}
            onClick={() => onSelectColor && onSelectColor(isSelected ? null : c)}
            className={`relative inline-flex items-center justify-center w-9 h-9 transition-all ${
              onSelectColor ? "cursor-pointer hover:scale-105" : ""
            } ${isDimmed ? "opacity-25" : "opacity-100"} ${
              isSelected ? "ring-2 ring-white scale-110 z-10 shadow-lg" : ""
            }`}
            style={{ backgroundColor: c }}
          >
            <span className="absolute px-0.5 bottom-0 right-0 bg-white text-gray-800 text-xs opacity-60 font-semibold rounded-tl">
              {palette[c].count}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(PaletteCounter);
