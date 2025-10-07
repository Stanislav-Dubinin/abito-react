import { Card } from '../components/Card/Card';
import { Side } from '../components/Side/Side';
import { useOutletContext } from 'react-router-dom';

export const Home = () => {
  const { products } = useOutletContext();

  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main__title">Рекомендации для вас</h2>

            <div className="content-main__list">
              {products.map(card => {
                return (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    price={card.price}
                    address={card.address}
                    date={card.date}
                    img={card.img}
                  />
                );
              })}
            </div>
          </div>

          <Side />
        </div>
      </div>
    </section>
  );
};
