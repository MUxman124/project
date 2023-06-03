import "../styles/Catagories.scss";
import cocktail from "../images/img2.jpg"
import cocktail1 from "../images/img3.jpg"
import cocktail2 from "../images/img4.jpg"
import cocktail3 from "../images/img5.jpg"
import cocktail4 from "../images/img6.jpg"
import cocktail5 from "../images/img7.jpg"
const Catagories = () => {
  return (
    <div className="container">
      <div className="cat-bar">
        <ul>
          <li>Sprite</li>
          <li>Wine</li>
          <li>Gifts</li>
          <li>Categories</li>
        </ul>
        <div className="line"></div>
      </div>

      <div className="catagories">
        <div className="catagories__item">
          <img src={cocktail} alt="" />
          <span>Astral Taquila</span>
        </div>
        <div className="catagories__item">
          <img src={cocktail1} alt="" />
          <span>Astral Taquila</span>
        </div>
        <div className="catagories__item">
          <img src={cocktail2} alt="" />
          <span>Astral Taquila</span>
        </div>
        <div className="catagories__item">
          <img src={cocktail3} alt="" />
          <span>Astral Taquila</span>
        </div>
        <div className="catagories__item">
          <img src={cocktail4} alt="" />
          <span>Astral Taquila</span>
        </div>
        <div className="catagories__item">
          <img src={cocktail5} alt="" />
          <span>Astral Taquila</span>
        </div>

      </div>
    </div>
  );
};

export default Catagories;
