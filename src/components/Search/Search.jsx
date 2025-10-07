import './Search.css';

export const Search = ({ searchText, onSearchChange, onSearch }) => {
  const handleKeyUp = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <section className="search">
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Поиск по объявлениям"
            name="search"
            value={searchText}
            onChange={onSearchChange}
            onKeyUp={handleKeyUp}
          />
          <button className="btn btn-primary search-btn" onClick={onSearch}>
            <img className="search-btn__icon" src="/image/search.svg" alt="search" />
            <span className="search-btn__text">Найти</span>
          </button>
        </div>
      </div>
    </section>
  );
};
