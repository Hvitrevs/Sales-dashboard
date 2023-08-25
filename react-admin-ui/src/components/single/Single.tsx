import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./single.scss"

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

    </div>
        
    </div>
  )
}

export default Single