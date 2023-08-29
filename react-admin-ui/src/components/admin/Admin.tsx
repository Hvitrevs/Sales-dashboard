import { Area, Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./admin.scss"

const data = {
    info: {
      username: " Admin",
      fullname: " Admin",
      email: " corpoemail@organization.com",
      phone: " 123 456 789",
      status: " verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#70eeff" },
        { name: "clicks", color: "#47fa95" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Catherin Amber added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Duke purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Winchester reviewed a product",
        time: "1 month ago",
      },
      {
        text: "Melissa Hermitage added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Admin reviewed a feedback left on item #3394-5988-77795-32",
        time: "2 months ago",
      },
    ],
  };

const Admin = () => {
  return (
    <div className="admin">
        <div className="view">
            <div className="info">
                <div className="topInfo">
                    <img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <h1>Admin</h1>
                    <button onClick={() =>alert('This button is for display purpose only and has no actual file to store your data. Sorry :)')}> UPDATE </button>
                </div>
                <div className="details">
                    
                        <div className="item" >
                            <span className="itemTitle"></span>
                            <span className="itemValue"></span>
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
                        dataKey="clicks" 
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
                       
                            <Area
                                type="monotone"
                                dataKey="visits"
                                stroke="#4ae4ff"
                                fill="url(#areaGradient2)"
                            />
                            
                            
                        
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            
        </div>
    <div className="activities">
        <h2> Latest Activity </h2>
        
            <ul>
               
                        
                    <li>
                        <div>
                            <p> activity </p>
                            <time> time</time>
                        </div>
                    </li>
                

            </ul>
        

    </div>
        
    </div>
  )
}

export default Admin