
import "./pieChartBox.scss";
import { ResponsiveContainer, Pie, PieChart, Tooltip, Cell } from "recharts";

const data = [
  { name: "Mobile", value: 313, color: "url(#tabletGradient)" },
  { name: "Desktop", value: 521, color: "url(#laptopGradient)" },
  { name: "Laptop", value: 641, color: "url(#desktopGradient)" },
  { name: "Tablet",value: 520, color: "url(#mobileGradient)" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Device</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <defs>
              {/* Define linear gradients */}
              <linearGradient id="mobileGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor='hsl(211, 98.40%, 49.80%)' />
                <stop offset="100%" stopColor="hsl(332, 100.00%, 50.00%)" />
              </linearGradient>
              <linearGradient id="desktopGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="hsl(87, 100.00%, 50.40%)" />
                <stop offset="100%" stopColor="hsl(200, 100.00%, 50.00%)" />
              </linearGradient>
              <linearGradient id="laptopGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="hsl(84, 100.00%, 50.40%)" />
                <stop offset="100%" stopColor="hsla(23, 100.00%, 48.40%, 0.97)" />
              </linearGradient>
              <linearGradient id="tabletGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="hsla(15, 100.00%, 48.80%, 0.89)" />
                <stop offset="100%" stopColor="hsla(349, 96.30%, 42.40%, 0.99)" />
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
              paddingAngle={3}
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
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                className="dot"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
