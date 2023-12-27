import React, { useState } from "react";

export default function Editor() {
  const modelNames = ["Model 1", "Model 2", "Model 3", "Model 4"];
  const colorOptions = [
    { name: "Red", color: "bg-red-500" },
    { name: "Blue", color: "bg-blue-500" },
    { name: "Green", color: "bg-green-500" },
    { name: "Yellow", color: "bg-yellow-500" },
    { name: "Purple", color: "bg-purple-500" },
  ];

  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="flex w-screen h-screen">
      <div className="w-[70vw] h-full bg-white flex justify-center items-center">
        <img
          src="/atlantis.png"
          alt="Centered Image"
          className="w-full h-full"
        />
      </div>
      <div className="w-[30vw] h-full bg-gray-300 p-8">
        <h1 className="text-3xl font-bold mb-6">Editor</h1>
        <h1 className="text-2xl mb-4">Model</h1>
        <hr className="border-t border-gray-500 mb-4" />

        {/* Buttons to choose models */}
        <div className="flex flex-wrap space-x-2 mb-4">
          {modelNames.map((modelName) => (
            <button
              key={modelName}
              className={`bg-white text-gray-800 py-2 px-6 rounded-md outline-none border border-none mb-2 ${
                selectedModel === modelName ? "shadow" : ""
              }`}
              onClick={() => setSelectedModel(modelName)}
            >
              {modelName}
            </button>
          ))}
        </div>

        {/* Exterior color options */}
        <div className="flex flex-col mb-4">
          <h1 className="text-2xl mb-4 mt-4">Exterior Colours</h1>
          <hr className="border-t border-gray-500 mb-4" />
          <div className="flex flex-row justify-between">
            {colorOptions.map((colorOption) => (
              <div
                key={colorOption.name}
                className={`w-16 h-16 rounded-md cursor-pointer ${
                  colorOption.color
                } ${
                  selectedColor === colorOption.name
                    ? "shadow-lg border border-white"
                    : ""
                }`}
                onClick={() => setSelectedColor(colorOption.name)}
              ></div>
            ))}
          </div>
          {selectedColor && (
            <p className="mt-4 text-2xl font-bold">{selectedColor}</p>
          )}
        </div>
      </div>
    </div>
  );
}
