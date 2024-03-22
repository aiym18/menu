import React, { useContext } from "react";
import { MenuContext } from "../../context";

const Hero = () => {
  const { productAll, setProductAll } = useContext(MenuContext);
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--btn">
            <button>Завтрак</button>
            <button>Салаты</button>
            <button>Десерты</button>
            <button>Холодные напитки</button>
            <button>Кофе</button>
            <button>Пицца</button>
          </div>
          <div className="hero--menu">
            {/* {productAll.map((el) => (
              <div className="hero--menu__cart">
                <img src={el.url} alt="img" />
                <h1>{el.name}</h1>
                <h2>{el.price}</h2>
                <p>{el.info}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
