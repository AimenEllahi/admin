import React from "react";

const Table = ({ headers, data, heading }) => {
  return (
    <div className="w-full p-5 py-10 flex flex-col gap-y-10 h-screen">
      <span className="text-3xl font-semibold">{heading}</span>
      <div className="flex w-full border rounded-2xl h-4/5 overflow-scroll overflow-x-hidden flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    {headers.map((header, index) => (
                      <th key={index} scope="col" className="px-6 py-4">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b font-normal dark:border-neutral-500"
                    >
                      {headers.map((header, colIndex) => (
                        <td
                          key={colIndex}
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {row[header]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
