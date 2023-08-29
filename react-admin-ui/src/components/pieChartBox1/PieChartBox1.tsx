
import "./pieChartBox1.scss";
import { ResponsiveContainer, Pie, PieChart, Tooltip, Cell } from "recharts";

const data = [
  { name: "Mobile", value: 520, color: "url(#mobileGradient)" },
  { name: "Desktop", value: 641, color: "url(#desktopGradient)" },
  { name: "Laptop", value: 521, color: "url(#laptopGradient)" },
  { name: "Tablet", value: 313, color: "url(#tabletGradient)" },
];

const PieChartBox1 = () => {
  return (
    <div className="pieChartBox1">
      <h1>Leads by Device</h1>
      <div className="piechart">
        <ResponsiveContainer width="99%" height={200}>
          <PieChart>
            <defs>
              {/* Define linear gradients */}
              <linearGradient id="mobileGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="#00fedc" />
                <stop offset="100%" stopColor="#009df2" />
              </linearGradient>
              <linearGradient id="desktopGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="#9cff66" />
                <stop offset="100%" stopColor="#00fedc" />
              </linearGradient>
              <linearGradient id="laptopGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="#adff66" />
                <stop offset="100%" stopColor="#ff7559" />
              </linearGradient>
              <linearGradient id="tabletGradient" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="#fb4f4f" />
                <stop offset="100%" stopColor="#008cfe" />
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

export default PieChartBox1;
