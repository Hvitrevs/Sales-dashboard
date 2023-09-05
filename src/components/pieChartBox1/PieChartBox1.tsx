
import "./pieChartBox1.scss";
import { ResponsiveContainer, Pie, PieChart, Tooltip, Cell } from "recharts";

const data = [
  { name: "Week 1", value: 1220, color: "url(#mobileGradient1)" },
  { name: "Week 2", value: 2541, color: "url(#desktopGradient1)" },
  { name: "Week 3", value: 1321, color: "url(#laptopGradient1)" },
  { name: "Week 4", value: 2613, color: "url(#tabletGradient1)" },
];

const PieChartBox1 = () => {
  return (
    <div className="pieChartBox1">
        <div className="content-text">
          <h1> Monthly Profit</h1>
          <div className="options">

              {data.map((item) => (
                <div className="option" key={item.name}>
                  <div className="title">
                    <div
                      className="dot"
                      style={{ backgroundColor: item.color }}
                    />
                    <ul>
                     
                          <li>
                            <div>
                                <h1>{item.name}</h1>
                                <h5>${item.value}</h5>
                            </div>
                          </li>
                      
                    </ul>
                  </div>
                </div>
              ))}


          </div>
          
        </div>
        

        <div className="piechart11">
         
            <ResponsiveContainer width="99%" height={330}>
              <PieChart>
                <defs>
                  {/* Define linear gradients */}
                  <linearGradient id="mobileGradient1" gradientTransform="rotate(0)">
                    <stop offset="0%" stopColor="#4423ff" />
                    <stop offset="100%" stopColor="#ff3780" />
                  </linearGradient>
                  <linearGradient id="desktopGradient1" gradientTransform="rotate(0)">
                    <stop offset="0%" stopColor="#41ff87" />
                    <stop offset="100%" stopColor="#013bea" />
                  </linearGradient>
                  <linearGradient id="laptopGradient1" gradientTransform="rotate(0)">
                    <stop offset="0%" stopColor="#34ff67" />
                    <stop offset="100%" stopColor="#ffc400" />
                  </linearGradient>
                  <linearGradient id="tabletGradient1" gradientTransform="rotate(0)">
                    <stop offset="0%" stopColor="#feb152" />
                    <stop offset="100%" stopColor="#ff3737" />
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{ 
                      background: "hsla(171, 100.00%, 74.30%, 0.50)",
                      borderRadius: "5px",
                      borderColor:"hsla(171, 63.80%, 36.90%, 0.00)"
                  }}
                  labelStyle={{ display: "none" }}
                                  
                />
                <Pie
                  data={data}
                  innerRadius={"60%"}
                  outerRadius={"80%"}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  
                  {data.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>

              </PieChart>
            </ResponsiveContainer>
            
        </div>      

    </div>
  );
};

export default PieChartBox1;
