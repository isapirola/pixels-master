import React from "react";

const Cost = ({ cost, setCost }) => {
  const askCost = () => {
    const newCost = prompt("Set cost per pixel", cost);

    if (newCost && !isNaN(newCost)) {
      setCost(newCost);

      localStorage.setItem("cost", newCost);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={askCost}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          askCost();
        }
      }}
      className="uppercase flex items-center justify-center cursor-pointer flex-1 p-8 text-center rounded-lg border-2 hover:bg-gray-800 border-dashed border-gray-500"
    >
      Custo por pixel: R${cost}
    </div>
  );
};

export default React.memo(Cost);
