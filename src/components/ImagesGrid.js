import React from "react";
import ImagePixels from "./ImagePixels";
import PalettePixels from "./PalettePixels";
import { List, AutoSizer } from "react-virtualized";

const ImagesGrid = ({
  images,
  palette,
  selectedPalette,
  colorsImage,
  cost,
  currency,
  setSelectedImage,
  deleteImage,
}) => {
  const list = Object.keys(images);

  const imageRenderer = ({ key, index, style }) => {
    const id = list[index];
    const image = images[id];

    return (
      <div
        key={key}
        style={style}
        onClick={() => setSelectedImage(id)}
        className="flex w-full items-center p-1 cursor-pointer hover:bg-gray-800">
        <div className="w-20 flex items-center justify-center">
          <img
            src={image.url}
            alt={id}
            style={{
              imageRendering: "pixelated",
              width: image.width + "px",
              height: image.height + "px",
            }}
          />
        </div>
        <div className="w-20 flex items-center justify-center">
          <ImagePixels
            pixels={image.pixels}
            palette={palette}
            map={selectedPalette ? colorsImage[id].map : null}
            width={image.width}
            height={image.height}
            size={1}
          />
        </div>
        {selectedPalette && (
          <>
            <div className="w-20 flex items-center justify-end text-sm">
              {colorsImage[id].total}
            </div>
            <div className="w-20 flex items-center justify-end text-sm">
              R${Math.round(colorsImage[id].total * cost + 6)},00
            </div>
            <div className="flex-1 flex flex-wrap items-center justify-center px-2">
              <PalettePixels palette={colorsImage[id].count} useKey />
            </div>
          </>
        )}
        <div className="w-16 flex items-center justify-center">
          <button
            type="button"
            title="Excluir imagem"
            onClick={(e) => {
              e.stopPropagation();
              deleteImage(id);
            }}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-700 rounded transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 mt-2  items-center">
      <div className="flex w-full p-2 text-xs uppercase text-gray-500 bg-gray-800 rounded-t opacity-70">
        <div className="w-20 flex items-center justify-center">Original</div>
        <div className="w-20 flex items-center justify-center">Resultado</div>
        <div className="w-20 flex items-center justify-end">Pixels</div>
        <div className="w-20 flex items-center justify-end">Preço</div>
        <div className="flex-1 flex flex-wrap items-center justify-center">Paleta</div>
        <div className="w-16 flex items-center justify-center">Excluir</div>
      </div>
      <div className="w-full flex-1 min-h-0">
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowCount={list.length}
              rowHeight={80}
              rowRenderer={imageRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default React.memo(ImagesGrid);
