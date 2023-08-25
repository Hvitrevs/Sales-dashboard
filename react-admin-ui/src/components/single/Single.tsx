import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./single.scss"

const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

const Single = () => {
  return (
    <div className="single">
        <div className="view">
            <div className="info">
                <div className="topInfo">
                    <img src="" alt="" />
                    <h1> John Doe</h1>
                    <button> Update </button>
                </div>
                <div className="details">
                    <div className="item">
                        <span className="itemTitle"></span>
                        <span className="itemValue"></span>
                    </div>
                </div>
            </div>
            <div className="chart">

            <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>



            </div>

        </div>
    <div className="activities">
        <h2> Purchase History </h2>
        <ul>
            <li>
                <div>
                    <p> John Doe purchased Playstation 5 Digital Edition </p>
                    <time> 3 days ago </time>
                </div>
            </li>
        </ul>

    </div>
        
    </div>
  )
}

export default Single