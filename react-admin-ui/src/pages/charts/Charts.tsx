import BarChartBox from "../../components/barChartBox/BarChartBox"
import BarChartBox1 from "../../components/barChartBox1/BarChartBox1"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox2 from "../../components/chartbox2/ChartBox2"
import ChartBox from "../../components/chartbox/ChartBox"
import ChartBox1 from "../../components/chartbox1/ChartBox1"
import ChartBox3 from "../../components/chartbox3/ChartBox3"
import PieChartBox1 from "../../components/pieChartBox1/PieChartBox1"
import TopBox from "../../components/topBox/TopBox"
import { barChartBoxRevenue, barChartBoxVisit, bigChartBoxRevenue, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./charts.scss"
import PieChartBox from "../../components/pieChartBox/PieChartBox"

const Charts = () => {
    return (
    <div className="charts">
      {/* <div className="box box1">
        <TopBox />
        </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>

      <div className="box box3"> 
      <ChartBox1 {... chartBoxRevenue} />
      </div>
      <div className="box box4"><PieChartBox /></div>

      <div className="box box5"> 
      <ChartBox2 {... chartBoxProduct}/>
      </div>
      <div className="box box6"> 
      <ChartBox3 {... chartBoxConversion}/>
      </div> */}




      <div className="box box7"><BigChartBox {...bigChartBoxRevenue} /> </div>

      <div className="box box8"><ChartBox1 {...chartBoxProduct} /></div>

      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
      
      <div className="box box6"><PieChartBox {...chartBoxConversion} /></div>

      <div className="box box9"><ChartBox {...chartBoxUser} /></div>

      <div className="box box7"><PieChartBox1 /> </div>
      <div className="box box5"><ChartBox2 {... chartBoxRevenue}/></div>
    </div>
  )
}

export default Charts