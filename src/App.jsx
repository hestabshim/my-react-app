import '../App.css'
import About from './components/About'
import NavBar from './components/Navbar'
import alien from './assets/ouh.png'
import amber from './assets/pfp1.jpeg'
import Card from './components/maincard'
import Wrapper from './components/wrapper'
import { useState } from 'react'

function App() {
  const profiles = [
    {
      id:0,
      img: alien,
      name: "Goobli Goo",
      title: "Alien",
      email: "goobligoo@gmail.com",
    },
    {
      id:1,
      img: amber,
      name: "Amber Zeng",
      title: "UX designer",
      email: "zeng274@purdue.edu",
    },
    {
      id:2,
      img: alien,
      name: "Bob Johnson",
      title: "Web developer",
      email: "c@a.com",
    },
    {
      id:3,
      img: alien,
      name: "Ava Smith",
      title: "Web developer",
      email: "d@a.com",
    },
    {
      id:4,
      img: alien,
      name: "Tom Smith",
      title: "Software Engineer",
      email: "e@a.com",
    },
    {
      id:5,
      img: alien,
      name: "Eva Smith",
      title: "Graphic designer",
      email: "f@a.com",
    }
  ]
  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClear = () => {
    setTitle("");
    setSearch("");
  };

  const filterProfiles = profiles.filter(
    (profile) =>
      (title === "" || profile.title === title) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <header>
        
        <NavBar />
        
        
      </header>
      <main>
      <Wrapper>
      <h1>Profile App </h1>
      </Wrapper>
      <Wrapper>
        <About/>
      </Wrapper>
      <Wrapper>
      <div className="filter-wrapper">
            <div className="filter--select">
              <label htmlFor="title-select">Select a title:</label>
              <select
                id="title-select"
                onChange={handleTitleChange}
                value={title}
              >
                <option value="">All</option>
                {titles.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter--search">
              <label htmlFor="search">Search by name:</label>
              <input
                type="text"
                id="search"
                onChange={handleSearchChange}
                value={search}
              />
            </div>
            <button onClick={handleClear}>Clear</button>
          </div>
          <div className="profile-cards">
            {filterProfiles.map((profile) => (
              <Card key={profile.email} {...profile} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  )
  





  /* 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */}

  export default App;