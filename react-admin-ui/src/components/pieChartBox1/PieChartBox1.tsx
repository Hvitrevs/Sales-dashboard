
import "./pieChartBox1.scss";
import { ResponsiveContainer, Pie, PieChart, Tooltip, Cell } from "recharts";

const data = [
  { name: "Week 1", value: 220, color: "url(#mobileGradient1)" },
  { name: "Week 2", value: 541, color: "url(#desktopGradient1)" },
  { name: "Week 3", value: 321, color: "url(#laptopGradient1)" },
  { name: "week 4", value: 613, color: "url(#tabletGradient1)" },
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
                                {item.name}
                                {item.value}
                            </div>
                          </li>
                      
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          
        </div>
        <hr></hr>

        <div className="piechart11">
         
            <ResponsiveContainer width="99%" height={300}>
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
                  outerRadius={"75%"}
                  paddingAngle={2}
                  dataKey="value"
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
