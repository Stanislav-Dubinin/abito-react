import './Side.css';
import { sideArray } from '../../constants';
import { Link } from 'react-router-dom';

export const Side = () => {
  return (
    <>
      <div className="content-side">
        <h3 className="content-side__title">Сервисы и услуги</h3>

        <div className="content-side__box">
          <div className="content-side__list">
            {sideArray.map(advantages => {
              return (
                <div className="content-side__list-item">
                  <img
                    className="content-side__list-item--img"
                    src={advantages.img}
                    alt={advantages.title}
                  />
                  <h5 className="content-side__list-item--title">{advantages.title}</h5>
                  <p className="content-side__list-item--text">{advantages.description}</p>
                </div>
              );
            })}
          </div>

          <div className="content-side__footer">
            <p className="content-side__footer--item">© ООО «Абито», 2011–2021</p>
            <Link to="/" className="content-side__footer--item">
              Политика конфиденциальности
            </Link>
            <Link to="/" className="content-side__footer--item">
              Обработка данных
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
