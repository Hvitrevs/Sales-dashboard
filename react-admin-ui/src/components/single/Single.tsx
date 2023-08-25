import { Area, Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./single.scss"

type Props ={
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string}[];
        data: object[];
    };
    activities?: {title: string; text: string};
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
                                top: 0,
                                right: 20,
                                bottom: 0,
                                left: 20,
                            }}
                        >
                    
                        <XAxis 
                        dataKey="name" 
                        scale="band" />

                        <YAxis />
                        <Tooltip />
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