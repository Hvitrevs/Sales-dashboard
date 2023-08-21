import { Link } from "react-router-dom";
import "./chartBox3.scss";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox3 = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
        <img src='/chart.svg' alt='' />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/charts" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">

        <ResponsiveContainer width="99%" height="100%">
          <PieChart width={400} height={400}>
            <defs>
              <linearGradient id="pieGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(352, 100%, 69%)" />
                <stop offset="100%" stopColor="hsl(296, 100.00%, 69.00%)" />
              </linearGradient>
            </defs>
            <Pie
              dataKey={props.dataKey}
              startAngle={180}
              endAngle={0}
              data={props.chartData}
              cx="50%"
              cy="100%"
              outerRadius={18}
              fill="url(#pieGradient)"
              label
              
            />
            <Tooltip

                contentStyle={{ 
                  background: "hsla(171, 63.80%, 36.90%, 0.46)",
                  borderRadius: "5px",
                  borderColor:"hsla(171, 63.80%, 36.90%, 0.00)"
                 }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 0 }}
                
            />
          </PieChart>
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

export default ChartBox3;


 
