import BarChartBox from "../../components/barChartBox/BarChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox from "../../components/chartbox/ChartBox"
import ChartBox4 from "../../components/chartbox4/ChartBox4"
import ChartBox1 from "../../components/chartbox1/ChartBox1"
import PieChartBox1 from "../../components/pieChartBox1/PieChartBox1"
import { barChartBoxRevenue, bigChartBoxRevenue, chartBoxConversion, chartBoxProduct, chartBoxUser } from "../../data"
import "./charts.scss"
import PieChartBox from "../../components/pieChartBox/PieChartBox"

const Charts = () => {
    return (
    <div className="charts">


 
      {/* @ts-ignore   */}

      <div className="box box7"><BigChartBox {...bigChartBoxRevenue} /> </div>
      {/* @ts-ignore   */}
      

      <div className="box box8"><ChartBox1 {...chartBoxProduct} /></div>
      {/* @ts-ignore   */}

      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
      {/* @ts-ignore   */}
      
      <div className="box box6"><PieChartBox {...chartBoxConversion} /></div>
      {/* @ts-ignore   */}

      <div className="box box9"><ChartBox {...chartBoxUser} /></div>
      {/* @ts-ignore   */}

      <div className="box box7"><PieChartBox1 /> </div>
      {/* @ts-ignore   */}
      <div className="box box5"><ChartBox4 {... bigChartBoxRevenue}/></div>
    </div>
  )
}

export default Charts