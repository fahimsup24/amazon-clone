import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home" >
      <div className="home__container">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-MzFkYTc5YjUt-w1500._CB418314283_.jpg" alt=""/>

        <div className="home__row">
          <Product
          id={875874438} 
          title={`adidas Originals Men's Superstar Track Jacket`}
          image={'https://images-na.ssl-images-amazon.com/images/I/810wUXbwzdL._AC_UX679_.jpg'}
          price={63.75}
          rating={5}/>

          <Product
          id={456}
          title={'New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (Latest Model, 4th Generation)'}
          image={'https://images-na.ssl-images-amazon.com/images/I/71ammbDB5EL._AC_SL1500_.jpg'}
          price={599.00}
          rating={4}
          />
          
        </div>

        <div className="home__row">
          <Product
          id={124}
          title={'Got2b PhenoMENal Fiber Hair Cream, 3.5 Ounce'}
          image={'https://images-na.ssl-images-amazon.com/images/I/61bebyy4TUL._SL1061_.jpg'}
          price={7.79}
          rating={5}
          />

          <Product
          id={587587}
          title={'Optimum Nutrition Gold Standard 100% Whey Protein Powder, Extreme Milk Chocolate, 5 Pound (Packaging May Vary)'}
          image={'https://images-na.ssl-images-amazon.com/images/I/71v7HrxsIYL._AC_SL1500_.jpg'}
          price={58.62}
          rating={5}
          />

          <Product
          id={9876}
          title={'C4 Original Sugar Free Energy Drink 12oz (Pack of 12) | Frozen Bombsicle | Pre Workout Performance Drink with No Artificial Colors or Dyes'}
          image={'https://images-na.ssl-images-amazon.com/images/I/81QEm-8PwnL._AC_SL1500_.jpg'}
          price={19.44}
          rating={5}
          />

        </div>

        <div className="home__row">
          <Product
            id={688487578}
            title={'Logitech MX Keys Advanced Wireless Illuminated Keyboard - Graphite'}
            image={'https://images-na.ssl-images-amazon.com/images/I/61PIn5vGm2L._AC_SL1001_.jpg'}
            price={99.99}
            rating={5}
            />
        </div>

      </div>
    </div>
  );
};

export default Home;
