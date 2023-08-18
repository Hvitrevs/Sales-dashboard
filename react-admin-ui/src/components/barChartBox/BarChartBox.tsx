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
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip 
            contentStyle={{background: "transparent", borderRadius: "5px"}}
            labelStyle={{display: "none"}}
            />
          <Bar dataKey={props.dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox;