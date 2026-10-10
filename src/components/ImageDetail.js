import React, { useEffect, useState } from "react";
import ImagePixels from "./ImagePixels";
import PaletteCounter from "./PaletteCounter";
import { PIXEL_SIZE } from "utils";

const ImageDetail = ({
  id,
  image,
  colors,
  palette,
  selectedPalette,
  setSelectedImage,
  moveSelectedImage,
  cost,
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const ZOOM = 1.6;
  const effectivePixelSize = PIXEL_SIZE * ZOOM;

  useEffect(() => {
    setSelectedColor(null);
  }, [id]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === 27) {
        if (selectedColor) {
          setSelectedColor(null);
        } else {
          setSelectedImage(null);
        }
      }

      if (e.keyCode === 37) {
        moveSelectedImage(-1);
      }

      if (e.keyCode === 39) {
        moveSelectedImage(1);
      }
    };

    document.addEventListener("keydown", handleKey, false);

    return () => {
      document.removeEventListener("keydown", handleKey, false);
    };
  }, [selectedColor, moveSelectedImage, setSelectedImage]);

  return (
    <>
      <div
        onClick={() => setSelectedImage(null)}
        className="bg-gray-900/80 backdrop-blur-sm w-full h-full fixed z-20 top-0 left-0 transition-opacity"></div>
      <div className="w-full h-full p-2 sm:p-4 pointer-events-none fixed z-30 top-0 left-0 flex items-center justify-center">
        <button
          onClick={() => moveSelectedImage(-1)}
          title="Imagem anterior"
          className="mr-2 sm:mr-3 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-800/90 hover:bg-gray-700 flex items-center justify-center text-white font-bold text-xl sm:text-2xl cursor-pointer pointer-events-auto shadow-2xl transition-transform hover:scale-110 shrink-0">
          ◄
        </button>
        <div className="flex flex-col w-auto max-w-[95vw] max-h-[94vh] p-6 overflow-y-auto overflow-x-hidden pointer-events-auto bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
          {/* Header do modal com informações e botão de fechar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-700 text-sm gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="font-semibold text-white truncate max-w-md">{id}</span>
              <span className="text-xs bg-gray-700 px-2.5 py-0.5 rounded text-gray-400">
                {image.width} × {image.height} px
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              title="Fechar (Esc)"
              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-red-600 text-white flex items-center justify-center transition-colors text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {/* Área de visualização das imagens: lado a lado por padrão, quebra para baixo se não couber */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 p-4 my-2">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase text-gray-400 mb-2 font-medium">Original</span>
              <img
                src={image.url}
                alt={id}
                className={`transition-opacity duration-200 rounded shadow-md ${
                  selectedColor ? "opacity-30" : "opacity-100"
                }`}
                style={{
                  imageRendering: "pixelated",
                  width: image.width * effectivePixelSize + "px",
                  height: image.height * effectivePixelSize + "px",
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase text-gray-400 mb-2 font-medium">Resultado</span>
              <div className="rounded shadow-md overflow-hidden">
                <ImagePixels
                  pixels={image.pixels}
                  map={selectedPalette ? colors.map : null}
                  palette={palette}
                  width={image.width}
                  height={image.height}
                  size={effectivePixelSize}
                  titled={selectedPalette ? true : false}
                  selectedColor={selectedColor}
                />
              </div>
            </div>
          </div>

          {selectedPalette && (
            <>
              <div className="p-3">
                <div className="text-center text-sm uppercase">
                  <span className="mr-3">
                    Pixels: <b>{colors.total}</b>
                  </span>
                  <span>
                    Cost: <b>R${Math.round(colors.total * cost + 6)},00</b>
                  </span>
                </div>
              </div>
              <div className="p-3 flex flex-col items-center">
                {selectedColor && (
                  <div className="mb-3 flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-full text-xs uppercase border border-gray-600 shadow">
                    <span
                      className="w-3.5 h-3.5 rounded-full inline-block border border-white/50"
                      style={{ backgroundColor: selectedColor }}
                    />
                    <span>
                      Cor: <b>{colors.count[selectedColor]?.id || selectedColor}</b> (
                      {colors.count[selectedColor]?.count} px)
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedColor(null)}
                      title="Desfazer seleção"
                      className="ml-1 w-5 h-5 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 text-white font-bold text-xs transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                )}
                <PaletteCounter
                  palette={colors.count}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                />
              </div>
            </>
          )}
        </div>
        <button
          onClick={() => moveSelectedImage(1)}
          title="Próxima imagem"
          className="ml-3 w-12 h-12 rounded-full bg-gray-800/90 hover:bg-gray-700 flex items-center justify-center text-white font-bold text-2xl cursor-pointer pointer-events-auto shadow-2xl transition-transform hover:scale-110 shrink-0">
          ►
        </button>
      </div>
    </>
  );
};

export default React.memo(ImageDetail);
