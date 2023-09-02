import "./barChartBox.scss"
import {ResponsiveContainer, BarChart, Bar, Tooltip} from "recharts"

type Props = {
    color: string;
    title: string;
    dataKey: string;
    chartData: object[];
  };

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height={100}>
            <BarChart width={100} height={20} data={props.chartData}>
            <Tooltip
                contentStyle={{
                    background: "hsla(0, 70.10%, 13.10%, 0.42)",
                    borderRadius: "5%",
                    borderColor: "hsla(0, 70.10%, 13.10%, 0.42)",
                    color: "hsl(188, 100.00%, 59.00%)"
                  
                  }}
                labelStyle={{ display: "none", background:"transparent" }}
                position={{ x: 80, y: -10 }}
                cursor={{fill:"none"}}
            />
            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(342, 98.30%, 54.90%)" />
                <stop offset="100%" stopColor="hsl(277, 98.30%, 54.90%)" />
              </linearGradient>
            </defs>
            <Bar
          dataKey={props.dataKey}
          fill="hsl(325, 100.00%, 77.10%)"
          shape={({ x, y, width, height }) => (
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx={20} // You can adjust the corner radius as needed
              ry={20} 
              fill="url(#gradient2)"
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