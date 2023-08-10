import { Link } from 'react-router-dom'
import './chartBox3.scss'
import { ResponsiveContainer, PieChart, Pie, } from 'recharts';

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
                <img src='/product.svg' alt='' />
                <span>Statistics</span>
            </div>
            <h1>Sales </h1>
            <Link to='/sales'> View all</Link>
        </div>
        <div className='chartInfo'>
            <div className='chart'>

            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="100%"
            outerRadius={40}
            fill="hsla(352, 100.00%, 69.00%, 0.88)"
            label
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