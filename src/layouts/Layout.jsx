import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search/Search'; // Импортируем компонент Search
import { useEffect, useState } from 'react';
import { cardArray } from '../constants';

export const Layout = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setProducts(
      cardArray.filter(p => p.title.includes(searchText) || p.price.includes(searchText)),
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />

      <main>
        <Search
          searchText={searchText}
          onSearchChange={handleSearch}
          onSearch={handleSearchArray}
        />
      </main>

      <Outlet context={{ products }} />
    </>
  );
};
