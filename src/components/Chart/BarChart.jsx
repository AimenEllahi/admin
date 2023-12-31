import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 239, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 349, pv: 4300, amt: 2100 },
];

const RenderBarChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 5,
      }}
      className='max-w-full'
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' fontSize={12} />
      <YAxis fontSize={12} />
      <Tooltip />
      <Legend />
      <Bar dataKey='pv' fill='#8884d8' />
      <Bar dataKey='uv' fill='#82ca9d' />
    </BarChart>
  );
};

export default RenderBarChart;
