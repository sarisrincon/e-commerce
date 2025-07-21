import React, { useEffect, useState } from 'react';
import WelcomeBanner from '../../shared/components/welcomeBanner/WelcomeBanner';
import SearchBar from '../../shared/components/searchBar/SearchBar';

const SearchProduct = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <div className="search-wrapper">
      <SearchBar />
      {showWelcome && <WelcomeBanner onClose={() => setShowWelcome(false)} />}
    </div>
  );
};

export default SearchProduct;
