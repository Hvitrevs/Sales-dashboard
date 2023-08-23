import "./barChartBox1.scss"
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

const BarChartBox1 = (props: Props) => {
  return (
    <div className="barChartBox1">
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={100}>
            <BarChart width={100} height={20} data={props.chartData}>
            <Tooltip
                contentStyle={{
                    background: "hsla(186, 70.10%, 13.10%, 0.42)",
                    borderRadius: "5%",
                    borderColor: "hsla(186, 70.10%, 13.10%, 0.42)",
                    color: "hsl(188, 100.00%, 59.00%)"
                  
                  }}
                labelStyle={{ display: "none", background:"transparent" }}
                position={{ x: 80, y: -10 }}
                cursor={{fill:"none"}}
            />
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsla(150, 100.00%, 61.00%, 0.73)" />
                <stop offset="100%" stopColor="hsl(180, 100.00%, 49.20%)" />
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
              fill="url(#gradient1)"
            />
          )}
        />
          </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox1;