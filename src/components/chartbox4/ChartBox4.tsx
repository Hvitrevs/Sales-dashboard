
import './chartBox4.scss';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const chartBox4 = (props: Props) => {
  return (
    <div className="chartBox4">
      <div className="boxInfo">
        <div className="title">
        <img src='/chart.svg' alt='' />
          <span>Sold By Unit</span>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
        
            <ResponsiveContainer width={300} height={150}>
              
              <ComposedChart 
                data={props.chartData}    
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                
                <XAxis dataKey="name" scale="band" />
                <YAxis
                   tick={{
                     fontSize: 10, // Set the desired font size for the tick marks
                    }}
  
                />
                <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: -75 }}
                />
                
                <Area type="monotone" dataKey="artworks" fill="url(#areaGradient2)" stroke="#26e2fa" />
                <Bar 
                  dataKey="posters" 
                  barSize={20} 
                  shape={({ x, y, width, height }) => (
                    <rect 
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={10} // You can adjust the corner radius as needed
                    ry={10} 
                    fill="url(#areaGradient3)"
                    />
                  )}
                  fill="url(#areaGradient3)" 
                />
                <Line type="monotone" dataKey='stickers'stroke="#3bff63" />
              </ComposedChart>
            </ResponsiveContainer>

        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};
export default chartBox4;