import React from "react";
import TableComponent from "../components/TableComponent";

const HEADERS = [
  "ArticleCode",
  "Concept",
  "Volume",
  "Status",
  "RelationCode",
  "Date",
];

const data = [
  {
    ArticleCode: "A001",
    Concept: "Concept A",
    Volume: "100",
    Status: "Active",
    RelationCode: "R001",
    Date: "2023-08-11",
  },
  // Add more data as needed
];

export default function View() {
  return <TableComponent headers={HEADERS} data={data} heading={"View"} />;
}
