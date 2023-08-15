import { Link } from 'react-router-dom';
import './chartBox2.scss';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 2500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const ChartBox = () => {
  return (
    <div className='chartBox'>
        <div className='boxInfo'>
            <div className='title'>
                <img src='/order.svg' alt='' />
                <span>New Customers</span>
            </div>
            <h1>+ 216</h1>
            
        </div>
        <div className='chartInfo'>
            <div className='chart'>


            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 0,
                  right: 30,
                  left: 20,
                  bottom: 0,
                }}
              >
                

                <Line type="monotone" dataKey="uv" stroke="#ff4476" strokeWidth={2} />
                
              </LineChart>
              
            </ResponsiveContainer>


            </div>
            <div className='texts'>
                <span className='percentage'></span>
                <span className='duration'>Last 6 months</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox