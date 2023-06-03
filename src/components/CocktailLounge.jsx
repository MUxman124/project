import "../styles/CocktailLounge.scss";
import loungeimg1 from "../images/loungeimg1.jpg";
import loungeimg2 from "../images/loungeimg2.jpg";
import loungeimg3 from "../images/loungeimg3.jpg";
const CocktailLounge = () => {
  return (
    <section className="cocktail">
      <div className="container">
        <div className="cocktail-lounge">
          <h2>Visit our Cocktail Lounge</h2>
        </div>
        <div className="cocktail-lounge__content">
          <div>
            <img
              src={loungeimg1}
              alt=""
            />
            <h4>At Vros eos et + acsumssus</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="/">Read More</a>
          </div>
          <div>
            <img
              src={loungeimg2}
              alt=""
            />
            <h4>At Vros eos et + acsumssus</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="/">Read More</a>
          </div>
          <div>
            <img
              src={loungeimg3}
              alt=""
            />
            <h4>At Vros eos et + acsumssus</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CocktailLounge;
