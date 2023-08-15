import { Link } from 'react-router-dom';
import './chartBox2.scss';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const chartBox2 = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
        <img src='/product.svg' alt='' />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/product" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
        
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chartData}
              margin={{
                  top: 0,
                  right: 30,
                  left: 20,
                  bottom: 0,
              }}
            >
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 30 }}
              />
              <Line 
              type="monotone" 
              dataKey={props.dataKey} 
              stroke="#ff4476" 
              strokeWidth={2}
              />
            </LineChart>
              
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};
export default chartBox2;