import BarChartBox from "../../components/barChartBox/BarChartBox"
import BarChartBox1 from "../../components/barChartBox1/BarChartBox1"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox from "../../components/chartbox/ChartBox"
import ChartBox1 from "../../components/chartbox1/ChartBox1"
import ChartBox2 from "../../components/chartbox2/ChartBox2"
import ChartBox3 from "../../components/chartbox3/ChartBox3"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import TopBox from "../../components/topBox/TopBox"
import { barChartBoxRevenue, barChartBoxVisit, bigChartBoxRevenue, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"


const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
        </div>
        
      <div className="box box2">
        {/* @ts-ignore   */}
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3"> 
      {/* @ts-ignore   */}
      <ChartBox1 {... chartBoxRevenue} />
      </div>
      <div className="box box4"><PieChartBox /></div>

      <div className="box box5"> 
      {/* @ts-ignore   */}
      <ChartBox2 {... chartBoxProduct}/>
      </div>
      <div className="box box6"> 
      {/* @ts-ignore   */}
      <ChartBox3 {... chartBoxConversion}/>
      </div>
      {/* @ts-ignore   */}

      <div className="box box7"><BigChartBox {...bigChartBoxRevenue} /> </div>
      {/* @ts-ignore   */}

      <div className="box box8"><BarChartBox1 {...barChartBoxVisit} /></div>
      

      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}
export default Home