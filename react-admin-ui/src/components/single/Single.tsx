import { Area, Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./single.scss"

type Props ={
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string} [];
        data: object[];
    };
    activities?: { time: string; text: string } [];
};

const Single = (props: Props) => {
  return (
    <div className="single">
        <div className="view">
            <div className="info">
                <div className="topInfo">
                    {props.img && <img src={props.img} alt="" />}
                    <h1>{props.title}</h1>
                    <button onClick={() =>alert('This button is for display purpose only and has no actual file to store your data. Sorry :)')}> UPDATE </button>
                </div>
                <div className="details">
                    {Object.entries(props.info).map((item) => (
                        <div className="item" key={item[0]}>
                            <span className="itemTitle">{item[0]}</span>
                            <span className="itemValue">{item[1]}</span>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            {props.chart && 
                <div className="chart">

                    <ResponsiveContainer >
                        <ComposedChart
                            width={100}
                            height={100}
                            data={props.chart.data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: -20,
                                left: 10,
                            }}
                        >
                            <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ae4ff" />
            <stop offset="100%" stopColor="#104237" stopOpacity={0} />
          </linearGradient>
        </defs>
                    
                        <XAxis 
                        dataKey="name" 
                        scale="band" />

                        <YAxis />
                        <Tooltip
                contentStyle={{
                    background: "hsla(186, 70.10%, 13.10%, 0.42)",
                    borderRadius: "5%",
                    borderColor: "hsla(186, 70.10%, 13.10%, 0.42)",
                    color: "hsl(188, 100.00%, 59.00%)"
                  
                  }}
                labelStyle={{ display: "none", background:"transparent" }}
                position={{ x: 80, y: 0 }}
                cursor={{fill:"none"}}
                />
                        <Legend />
                        {props.chart.dataKeys.map((dataKey) => (
                            <Area
                                type="monotone"
                                dataKey={dataKey.name}
                                stroke={dataKey.color}
                                fill="url(#areaGradient)"
                            />
                            
                            
                        ))}
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            } 
        </div>
    <div className="activities">
        <h2> Latest Activity </h2>
        {props.activities && (
            <ul>
                {props.activities.map((activity) => (
                        
                    <li key={activity.text}>
                        <div>
                            <p> {activity.text} </p>
                            <time> {activity.time} </time>
                        </div>
                    </li>
                ))}

            </ul>
        )}

    </div>
        
    </div>
  )
}

export default Single