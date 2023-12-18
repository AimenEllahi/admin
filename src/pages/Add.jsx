import React, { useState } from "react";

export default function Add() {
  return (
    <div className="p-5 flex w-5/5 h-full flex-col py-10">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold">Add Records</span>
        <span>You can upload a excel sheet</span>
      </div>

      <div className="flex items-center justify-center h-full w-full">
        <Upload />
      </div>
    </div>
  );
}

function Upload() {
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setIsLoading(true);
  };
  return (
    <>
      {isLoading ? (
        <div>
          <div
            className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <form>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              onChange={handleChange}
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </label>
        </form>
      )}
    </>
  );
}
