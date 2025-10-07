import { Side } from '../components/Side/Side';
import { useOutletContext, useParams } from 'react-router-dom';

export const Product = () => {
  const { products } = useOutletContext();
  const { id } = useParams();
  const findProduct = products.find(item => item.id === parseInt(id));

  return (
    <section className="content">
      <div className="container">
        {findProduct ? (
          <div className="content-box">
            <div className="content-product">
              <div className="content-product__left">
                <h2 className="content-product__title">{findProduct.title}</h2>

                <img
                  className="content-product__img"
                  src={findProduct.img}
                  alt={findProduct.title}
                />
                <p className="content-product__text">{findProduct.description}</p>
              </div>

              <div className="content-product__right">
                <h2 className="content-product__price">{findProduct.price}</h2>

                <button className="btn btn-primary btn-large">Показать телефон</button>
              </div>
            </div>

            <Side />
          </div>
        ) : (
          <h2>Такого товара не существует!</h2>
        )}
      </div>
    </section>
  );
};
