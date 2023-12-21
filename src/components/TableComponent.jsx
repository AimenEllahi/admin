import React from "react";
import { Table } from "@radix-ui/themes";

const TableComponent = ({ headers, data, heading }) => {
  return (
    <div className="w-full p-5 py-10 flex flex-col gap-y-10 h-screen">
      <span className="text-3xl font-semibold">{heading}</span>
      <div className="flex w-full border rounded-2xl h-4/5 overflow-scroll overflow-x-hidden flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    {headers.map((header, index) => (
                      <Table.Cell key={index} scope="col" className="px-6 py-4">
                        {header}
                      </Table.Cell>
                    ))}
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data.map((row, rowIndex) => (
                    <Table.Row
                      key={rowIndex}
                      className="border-b font-normal dark:border-neutral-500"
                    >
                      {headers.map((header, colIndex) => (
                        <Table.Cell
                          key={colIndex}
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {row[header]}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
