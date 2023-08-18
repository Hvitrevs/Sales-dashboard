import { Link } from "react-router-dom";
import "./chartBox1.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox1 = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
        <img src='/order.svg' alt='' />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/products" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">


          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
                contentStyle={{
                    background: "transparent",
                    border: "none",
                    color: "hsl(188, 100.00%, 59.00%)"
                  
                  }}
                labelStyle={{ display: "none", background:"transparent" }}
                position={{ x: 7, y: -35 }}
                cursor={{fill:"none"}}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(270, 100%, 59%)" />
                <stop offset="100%" stopColor="hsl(166, 100.00%, 59.00%)" />
              </linearGradient>
            </defs>
            <Bar
          dataKey={props.dataKey}
          fill="url(#gradient)"
          shape={({ x, y, width, height }) => (
            <rect
              
              x={x}
              y={y}
              width={width}
              height={height}
              rx={7} // You can adjust the corner radius as needed
              ry={7} // You can adjust the corner radius as needed
              fill="url(#gradient)"
            />
          )}

        />
          </BarChart>
          </ResponsiveContainer>

          
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">This week</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox1;


{/* <ResponsiveContainer width="100%" height="100%">
<BarChart width={150} height={40} data={data}>
<Tooltip
          contentStyle={{ background: "transparent", border: "none" }}
          labelStyle={{ display: "none" }}
          position={{ x: 7, y: 55 }}
          
        />
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="hsl(270, 100%, 59%)" />
      <stop offset="100%" stopColor="hsl(200, 100%, 59%)" />
    </linearGradient>
  </defs>
  <Bar dataKey="uv" fill="url(#gradient)" />
</BarChart>
</ResponsiveContainer> */}