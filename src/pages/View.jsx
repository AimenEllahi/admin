import React from "react";

const HEADERS = [
  "Article Code",
  "Concept",
  "Volume",
  "Gender",
  "Relatie code",
  "Date",
];

export default function View() {
  return (
    <div className="w-full p-5 py-10 flex flex-col gap-y-10 h-screen">
      <span className="text-3xl font-semibold">View Records</span>
      <div className="flex w-full border rounded-2xl h-4/5 overflow-scroll overflow-x-hidden flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    {HEADERS.map((header, index) => {
                      return (
                        <th key={index} scope="col" className="px-6 py-4">
                          {header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b font-normal dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      row.Artikelcode
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">row.Concept</td>
                    <td className="whitespace-nowrap px-6 py-4">row.Volume</td>
                    <td className="whitespace-nowrap px-6 py-4">row.GENDER</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      row.Relatiecode
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">row.Datum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
