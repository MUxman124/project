import "../styles/NewArrival.scss";
import donjulio from "../images/donjulio.png";

const NewArrival = () => {
  return (
    <div>
      <div className="header2">
        <div className="header2-content">
          <div className="header2-content__left">
          <h1 >New Arrival Collections</h1>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi cumque eligendi nisi quae ratione iste expedita delectus, sunt sint ipsum fuga.</p>
          <button>SHOP NOW</button>
          </div>
        
        <div className="header2-content__right">
        <img src={donjulio} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewArrival;
