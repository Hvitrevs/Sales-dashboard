import ChartBox from "../../components/chartbox/ChartBox"
import ChartBox1 from "../../components/chartbox1/ChartBox1"
import ChartBox2 from "../../components/chartbox2/ChartBox2"
import ChartBox3 from "../../components/chartbox3/ChartBox3"
import TopBox from "../../components/topBox/TopBox"
import { chartBoxProduct, chartBoxUser } from "../../data"
import "./home.scss"


const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
        </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>

      <div className="box box3"> 
      <ChartBox1  />
      </div>
      <div className="box box4"> Box 4</div>

      <div className="box box5"> 
      <ChartBox2 {... chartBoxProduct}/>
      </div>
      <div className="box box6"> 
      <ChartBox3 />
      </div>
      <div className="box box7"> Box 7</div>
      <div className="box box8"> Box 8</div>
      <div className="box box9"> Box 9</div>
    </div>
  )
}
export default Home