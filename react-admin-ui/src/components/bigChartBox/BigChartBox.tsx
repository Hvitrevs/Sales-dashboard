import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip,  YAxis } from "recharts"
import "./bigChartBox.scss"
 
type Props = {
    title: string;
    dataKey: string;
    number: number | string;
    chartData: object[];
  };

const BigChartBox = (props: Props) => {
  return (
    <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
            
        <ResponsiveContainer width="99%" height="100%">
      <AreaChart
        data={props.chartData}
        margin={{
          top: 50,
          right: 30,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a80ff" />
            <stop offset="100%" stopColor="#104237" stopOpacity={0} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="areaGradient1" x1="0" y1="0" x2="0" y2="2">
            <stop offset="0%" stopColor="#e431eb" />
            <stop offset="100%" stopColor="#104237" stopOpacity={0} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="areaGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#39ffdb" />
            <stop offset="100%" stopColor="#104237" stopOpacity={0} />
          </linearGradient>
        </defs>

        <YAxis />
    
        <Tooltip
                contentStyle={{
                    background: "hsla(186, 70.10%, 13.10%, 0.42)",
                    borderRadius: "5%",
                    borderColor: "hsla(186, 70.10%, 13.10%, 0.42)",
                    color: "hsl(188, 100.00%, 59.00%)"
                  
                  }}
                labelStyle={{ display: "none", background:"transparent" }}
                position={{ x: 80, y: 0 }}
                cursor={{fill:"none"}}
                />
        <Area type="monotone" dataKey="artworks" stackId="1" stroke="#7c76f5" fill="url(#areaGradient)" />
        <Area type="monotone" dataKey="posters" stackId="1" stroke="#f56ecd" fill="url(#areaGradient1)" />
        <Area type="monotone" dataKey='stickers' stackId="1" stroke="#34ffd6" fill="url(#areaGradient2)" />
      </AreaChart>
    </ResponsiveContainer>

        </div>
    </div>
  )
}

export default BigChartBox