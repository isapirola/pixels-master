import React from "react";
import PaletteCounter from "./PaletteCounter";

const GlobalCounter = ({ colorsGlobal, pixels, cost, sprites }) => {
  const avgPixels = sprites > 0 ? Math.round(pixels / sprites) : 0;
  const avgCost = sprites > 0 ? ((cost / sprites) + 6).toFixed(2).replace(".", ",") : "0,00";

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className=" flex gap-3 text-center text-sm uppercase">
        <span>
          Sprites: <b>{sprites}</b>
        </span>
        <span>
          Total pixels: <b>{pixels}</b>
        </span>
        <span>
          Média pixels: <b>{avgPixels}</b>
        </span>
        <span>
          Custo total: <b>R${Math.round(cost)},00</b>
        </span>
        <span>
          Custo médio: <b>R${avgCost}</b>
        </span>
      </div>
      <PaletteCounter palette={colorsGlobal} />
    </div>
  );
};

export default React.memo(GlobalCounter);
