import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./single.scss"

type Props ={
    id: number;
    img?: string;
    title: string;
    info: object;
    chart: {
        dataKeys: { name: string; color: string};
        data: object[];
    };
}

const Single = (props: Props) => {
  return (
    <div className="single">
        <div className="view">
            <div className="info">
                <div className="topInfo">
                    <img src="https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    <h1> John Doe</h1>
                    <button onClick={() =>alert('This button is for display purpose only and has no actual file to store your data. Sorry :)')}> UPDATE </button>
                </div>
                <div className="details">
                    <div className="item">
                        <span className="itemTitle">Username:</span>
                        <span className="itemValue">John Doe</span>
                    </div>
                    <div className="item">
                        <span className="itemTitle">U</span>
                        <span className="itemValue">D</span>
                    </div>
                    <div className="item">
                        <span className="itemTitle">U</span>
                        <span className="itemValue">D</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="chart">

                <ResponsiveContainer >
                    <ComposedChart
                        width={100}
                        height={100}
                        data={data}
                        margin={{
                            top: 0,
                            right: 20,
                            bottom: 0,
                            left: 20,
                        }}
                    >
                    
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
            <li>
                <div>
                    <p> John Doe purchased Playstation 5 Digital Edition </p>
                    <time> 3 days ago </time>
                </div>
            </li>
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