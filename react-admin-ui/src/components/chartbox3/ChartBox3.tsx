import { Link } from 'react-router-dom'
import './chartBox3.scss'
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

const data = [
  { name: 'Prints', value: 44 },
  { name: 'Art', value: 110 },
  { name: 'Commissions', value: 15 },
];

const ChartBox = () => {
  return (
    <div className='chartBox'>
        <div className='boxInfo'>
            <div className='title'>
                <img src='/form.svg' alt='' />
                <span>Statistics</span>
            </div>
            <h1>Sales </h1>
            <Link to='/sales'> View all</Link>
        </div>
        <div className='chartInfo'>
            <div className='chart'>
              

            <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <defs>
          <linearGradient id="pieGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(352, 100%, 69%)" />
            <stop offset="100%" stopColor="hsl(272, 100%, 69%)" />
          </linearGradient>
        </defs>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="100%"
          outerRadius={35}
          fill="url(#pieGradient)"
          label
          
        />
        <Tooltip

            contentStyle={{ background: "transparent", border: "none" }}
            labelStyle={{ display: "none" }}
            position={{ x: 10, y: 50 }}
            
        />
      </PieChart>
    </ResponsiveContainer>

            </div>
            <div className='texts'>
                <span className='percentage'></span>
                <span className='duration'>This month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox