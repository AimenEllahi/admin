import React, { useState } from "react";
import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { Check } from "lucide-react";

const modelNames = [
  "15ft Fishing Series",
  "17ft Family Series",
  "19ft Pontoon",
  "23ft Cruiser",
  "25ft Cruiser",
  "25ft Lounge Cruiser",
];
const exteriorColorOptions = [
  { name: "Black", color: "bg-[#1a1818]" },

  { name: "Dark Green", color: "bg-[#1e5631]" },
  { name: "Blue", color: "bg-[#375f8d]" },
  { name: "Brown", color: "bg-[#534f4f]" },
];

const accentColorOptions = [
  { name: "Slate Black", color: "bg-[#1a1818]" },

  { name: "White", color: "bg-white" },
  { name: "Gray", color: "bg-[#e2e2e2]" },
  { name: "Dark Gray", color: "bg-[#d1d1d1]" },
];

const accessories = [
  "Sea Start Hydraulic Steering",
  "Search Light",
  "Other Tablet/Unit",
  "Update Table",
  "Double Color Railing (Special Order)",
  "Courtesy Light",
  "LED Signal Lights",
  "Electirc Horn",
  "Storage Box",
  "Battery Box",
  "Updated Console",
  "Painted Pontoon Tubes",
  "Fishing Station with Washing Basin",
];
const SelectorTitle = ({ title }) => {
  return <h1 className='text-2xl font-light mb-4 mt-4'>{title}</h1>;
};
const ColorSelector = ({
  title,
  colorOptions,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div className='flex flex-col mb-14'>
      <SelectorTitle title={title} />
      <hr className='border-t border-gray-500 mb-4' />
      <div className='flex flex-row justify-between'>
        {colorOptions.map((colorOption) => (
          <div
            key={colorOption.name}
            className={`w-16 h-16 flex items-center justify-center shadow rounded-md cursor-pointer ${
              colorOption.color
            } ${
              selectedColor === colorOption.name
                ? "shadow-lg  border-4 scale-110 text-[#bebebe] border-[#bebebe]"
                : ""
            }`}
            onClick={() => setSelectedColor(colorOption.name)}
          >
            {selectedColor === colorOption.name && (
              <Check strokeWidth={4} size={28} />
            )}
          </div>
        ))}
      </div>
      {selectedColor && <p className='mt-4 text-xl '>{selectedColor}</p>}
    </div>
  );
};

const CustomCheckbox = ({ label, checked, setChecked }) => {
  return (
    <Text as='label' size='3' className='font-medium'>
      <Flex gap='2'>
        <Checkbox /> {label}
      </Flex>
    </Text>
  );
};

const Accessories = () => {
  return (
    <div className='flex flex-col mb-14'>
      <SelectorTitle title={"Accessories"} />
      <hr className='border-t border-gray-500 mb-4' />
      {accessories.map((accessory) => (
        <CustomCheckbox label={accessory} />
      ))}
    </div>
  );
};
export default function Editor() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedExteriorColor, setSelectedExteriorColor] = useState(null);
  const [selectedAccentColor, setSelectedAccentColor] = useState(null);
  const [selectedFurnitureColor, setSelectedFurnitureColor] = useState(null);
  const [selectedFloorColor, setSelectedFloorColor] = useState(null);
  const [selectedAccessoring, setSelectedAccessoring] = useState(null);

  return (
    <div className='flex w-screen h-screen !bg-white'>
      <div className='w-[70vw] h-full bg-white flex justify-center items-center'>
        <img
          src='/atlantis.png'
          alt='Centered Image'
          className='w-full h-full'
        />
      </div>
      <div className='max-w-[30vw] h-screen overflow-y-scroll  p-10'>
        <h1 className='text-5xl font-medium mb-6 text-[#3e3e3e]'>Pontoon</h1>
        <SelectorTitle title='Models' />
        <hr className='border-t border-gray-500 mb-4' />

        {/* Buttons to choose models */}
        <div className='flex flex-wrap gap-x-2 mb-10 w-full '>
          {modelNames.map((modelName) => (
            <button
              key={modelName}
              className={`bg-[#ededed] hover:bg-[#3e3e3e] hover:text-white transition-colors duration-300 text-sm text-black  py-2.5 w-[48%] rounded-lg outline-none border border-none mb-2 ${
                selectedModel === modelName ? "shadow" : ""
              }`}
              onClick={() => setSelectedModel(modelName)}
            >
              {modelName}
            </button>
          ))}
        </div>

        {/* Exterior color options */}
        <ColorSelector
          title='Exterior Colours'
          colorOptions={exteriorColorOptions}
          selectedColor={selectedExteriorColor}
          setSelectedColor={setSelectedExteriorColor}
        />

        <ColorSelector
          title='Accent Colours'
          colorOptions={accentColorOptions}
          selectedColor={selectedAccentColor}
          setSelectedColor={setSelectedAccentColor}
        />

        <ColorSelector
          title='Furniture Colours'
          colorOptions={accentColorOptions}
          selectedColor={selectedFurnitureColor}
          setSelectedColor={setSelectedFurnitureColor}
        />

        <ColorSelector
          title='Floor Colours and Material'
          colorOptions={accentColorOptions}
          selectedColor={selectedFloorColor}
          setSelectedColor={setSelectedFloorColor}
        />
        <Accessories />
        <button className='w-full py-3 rounded-lg text-white bg-[#3e3e3e]'>
          Request A Qoute
        </button>
      </div>
    </div>
  );
}
