import { Link } from 'react-router-dom'
import './chartBox.scss'
import {  ResponsiveContainer, LineChart, Line, } from 'recharts';



const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 3400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 7800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 8908,
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
      uv: 2390,
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
                <img src='/user.svg' alt='' />
                <span>Total Users</span>
            </div>
            <h1>11.250</h1>
            <Link to='/users'> View all</Link>
        </div>
        <div className='chartInfo'>
            <div className='chart'>


            <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#3dfbb8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>


            </div>
            <div className='texts'>
                <span className='percentage'>67%</span>
                <span className='duration'>This month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox