import { useState, useEffect } from 'react';

const useTitles = () => {
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zeng274/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data.titles);
      })
      .catch((error) => {
        console.error('Error fetching titles:', error);
      });
  }, []);

  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const clearFilters = () => {
    setSelectedTitle('');
    setSearch('');
  };

  return {
    titles,
    selectedTitle,
    search,
    handleTitleChange,
    handleSearchChange,
    clearFilters
  };
};

export default useTitles; 