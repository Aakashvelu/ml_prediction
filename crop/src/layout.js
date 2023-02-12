import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/nav";
import './App.css'
const Layout = () => {
  return (
    <>
    <Navbar className="pl"></Navbar>
    <div className="Part1">
      <div className="sub-txt1">
            <h1 className="txt1">Farmers Problem</h1>
            <p>Predicting the optimal crop that could be grown in a particular location based on the
      soil composition, rainfall, temperature and return of investment is essential for any
      farmer of the modern world. This could not only save farmers from spending extra
      money on fertilizers but also avoid the dangerous practice of growing the same crops
      on the same patch of land repeatedly, which depletes the solid from its natural
      resources.</p>
      </div>
      <div>
      <img src="https://drive.google.com/uc?export=view&id=17PCLEj4lmF9GaALq2dQo0GI4Q9Ip-trW" alt="drive image"/>
      </div>
    </div>


    <div className="Part2">
      <img src="https://drive.google.com/uc?export=view&id=1TcLfuZHvPbNM2ymPcCe464dfkO5sIHoz" alt="drive image"/>
      <div className="sub-txt2">
            <h1 className="txt1">Machine Learning Approach</h1>
            <p>As the prediction comes the machine learnig comes in. We know that machine learning are trained with large data sets with many catagories . Farmers are very benifitted with the ml models which give right predictions of crop or the price.
              The PANDA has trained ml models to predict the data trained over 8 Lakh + datas.
            </p>
      </div>
    
    </div>


      <div className="links">
        <div>
          <Link to="app"><button className="btn">PRICE</button></Link>
          <Link to="yield"><button className="btn">YIELD</button></Link>
        </div>

      </div>

    <div className="outlet">
      <Outlet />
    </div>
      
    </>
  )
};

export default Layout;