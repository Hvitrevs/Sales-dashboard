
import "./pieChartBox.scss";
import { ResponsiveContainer, Pie, PieChart, Tooltip, Cell } from "recharts";

const data = [
  { name: "Mobile", value: 520, color: "url(#mobileGradient)" },
  { name: "Desktop", value: 641, color: "url(#desktopGradient)" },
  { name: "Laptop", value: 521, color: "url(#laptopGradient)" },
  { name: "Tablet", value: 313, color: "url(#tabletGradient)" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Device</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
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
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
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

export default PieChartBox;
