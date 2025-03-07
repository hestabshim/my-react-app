import { useState, useEffect } from 'react';

const useProfiles = (selectedTitle, search) => {
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://web.ics.purdue.edu/~zeng274/profile-app/fetch-data-with-filter.php?title=${selectedTitle}&name=${search}&page=${page}&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data.profiles);
        setCount(data.count);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
      });
  }, [selectedTitle, search, page]);

  const goToNextPage = () => {
    if (page < Math.ceil(count / 10)) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const resetPage = () => {
    setPage(1);
  };

  return {
    profiles,
    page,
    count,
    goToNextPage,
    goToPreviousPage,
    resetPage
  };
};

export default useProfiles; 