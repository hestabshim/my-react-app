import Card from "../components/maincard";
import Wrapper from "../components/wrapper";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import useTitles from "../hooks/useTitles";
import useProfiles from "../hooks/useProfiles";

const HomePage = () => {
  const {
    titles,
    selectedTitle,
    search,
    handleTitleChange,
    handleSearchChange,
    clearFilters
  } = useTitles();

  const {
    profiles,
    page,
    count,
    goToNextPage,
    goToPreviousPage
  } = useProfiles(selectedTitle, search);

  const buttonStyle = {
    border: "1px solid #ccc",
  };

  return (
    <Wrapper>
      <h1>Profile App</h1>
      <div className={styles["filter-wrapper"]}>
        <div className={styles["filter--select"]}>
          <label htmlFor="title-select">Select a title:</label>
          <select
            id="title-select"
            onChange={handleTitleChange}
            value={selectedTitle}
          >
            <option value="">All</option>
            {titles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["filter--search"]}>
          <label htmlFor="search">Search by name:</label>
          <input
            type="text"
            id="search"
            onChange={handleSearchChange}
            value={search}
          />
        </div>
        <button onClick={clearFilters} style={buttonStyle}>
          <span className="sr-only">Reset</span>
        </button>
      </div>
      <div className={styles["profile-cards"]}>
        {profiles.map((profile) => (
          <Link to={`/profile/${profile.id}`} key={profile.id}>
            <Card {...profile} />
          </Link>
        ))}
      </div>
      {count === 0 && <p>No profiles found!</p>}
      {count > 10 && (
        <div className={styles["pagination"]}>
          <button
            onClick={goToPreviousPage}
            disabled={page === 1}
          >
            <span className="sr-only">Previous</span>
          </button>
          <span>
            {page}/{Math.ceil(count / 10)}
          </span>
          <button
            onClick={goToNextPage}
            disabled={page >= Math.ceil(count / 10)}
          >
            <span className="sr-only">Next</span>
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default HomePage;