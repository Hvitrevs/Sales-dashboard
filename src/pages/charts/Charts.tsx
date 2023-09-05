// import BarChartBox from "../../components/barChartBox/BarChartBox"
// import BigChartBox from "../../components/bigChartBox/BigChartBox"
// import ChartBox from "../../components/chartbox/ChartBox"
// import ChartBox4 from "../../components/chartbox4/ChartBox4"
// import ChartBox1 from "../../components/chartbox1/ChartBox1"
// import PieChartBox1 from "../../components/pieChartBox1/PieChartBox1"
// import { barChartBoxRevenue, bigChartBoxRevenue, chartBoxConversion, chartBoxProduct, chartBoxUser } from "../../data"
// import "./charts.scss"
// import PieChartBox from "../../components/pieChartBox/PieChartBox"

// const Charts = () => {
//     return (
//     <div className="charts">


 
//       {/* @ts-ignore   */}

//       <div className="box box7"><BigChartBox {...bigChartBoxRevenue} /> </div>
//       {/* @ts-ignore   */}
      

//       <div className="box box8"><ChartBox1 {...chartBoxProduct} /></div>
//       {/* @ts-ignore   */}

//       <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
//       {/* @ts-ignore   */}
      
//       <div className="box box6"><PieChartBox {...chartBoxConversion} /></div>
//       {/* @ts-ignore   */}

//       <div className="box box9"><ChartBox {...chartBoxUser} /></div>
//       {/* @ts-ignore   */}

//       <div className="box box7"><PieChartBox1 /> </div>
//       {/* @ts-ignore   */}
//       <div className="box box5"><ChartBox4 {... bigChartBoxRevenue}/></div>
//     </div>
//   )
// }

// export default Charts



import BarChartBox from "../../components/barChartBox/BarChartBox"
import BarChartBox1 from "../../components/barChartBox1/BarChartBox1"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox from "../../components/chartbox/ChartBox"
import ChartBox1 from "../../components/chartbox1/ChartBox1"
import ChartBox2 from "../../components/chartbox2/ChartBox2"
import ChartBox4 from "../../components/chartbox4/ChartBox4"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import PieChartBox1 from "../../components/pieChartBox1/PieChartBox1"
import { barChartBoxRevenue, barChartBoxVisit, bigChartBoxRevenue, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./charts.scss"


const Charts = () => {
  return (
    <div className="charts">
      <div className="box box1">
        <PieChartBox1 />
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
      <ChartBox4 {... bigChartBoxRevenue}/>
      </div>
      {/* @ts-ignore   */}

      <div className="box box7"><BigChartBox {...bigChartBoxRevenue} /> </div>
      {/* @ts-ignore   */}

      <div className="box box8"><BarChartBox1 {...barChartBoxVisit} /></div>
      

      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}
export default Charts