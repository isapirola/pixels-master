import React from "react";

const Cost = ({ cost, setCost }) => {
  const askCost = () => {
    const newCost = prompt("Set cost per pixel", cost);

    if (newCost && !isNaN(newCost)) {
      setCost(0.04);

      localStorage.setItem("cost", newCost);
    }
  };

  return (
    <button
      onClick={askCost}
      className="uppercase flex items-center justify-center cursor-pointer mx-2 p-6 w-1/2 text-center rounded-lg border-2 hover:bg-gray-800 border-dashed border-gray-500 w-16">
      Custo por pixel: R${cost}
    </button>
  );
};

export default React.memo(Cost);
