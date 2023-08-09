import { Link } from 'react-router-dom'
import './chartBox.scss'
import {  ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';




const data = [
    {
      subject: 'Jan',
      A: 10,
      B: 11,
      fullMark: 11,
    },
    {
      subject: 'Feb',
      A: 11,
      B: 12,
      fullMark: 12,
    },
    {
      subject: 'Mar',
      A: 11,
      B: 11,
      fullMark: 11,
    },
    {
      subject: 'Jun',
      A: 12,
      B: 12,
      fullMark: 12,
    },
    {
      subject: 'Jul',
      A: 11,
      B: 11,
      fullMark: 11,
    },
    {
      subject: 'Aug',
      A: 12,
      B: 10,
      fullMark: 11,
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
            <Link to='/users'> Viev all</Link>
        </div>
        <div className='chartInfo'>
            <div className='chart'>



                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#15d6c6" fillOpacity={0.6} />
                    </RadarChart>
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