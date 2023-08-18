import "./barChartBox.scss"
import {ResponsiveContainer, BarChart, Bar, Tooltip} from "recharts"

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
  };

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
            <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
                contentStyle={{
                    background: "hsla(186, 70.10%, 13.10%, 0.42)",
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
          fill="hsl(192, 100.00%, 59.00%)"
          shape={({ x, y, width, height }) => (
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx={20} // You can adjust the corner radius as needed
              ry={20} 
              fill="url(#gradient)"
            />
          )}
        />
          </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox;