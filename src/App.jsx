import './App.css'
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

;
  //Variable to store the animation state
  const [animation, setAnimation] = useState(false);
  //function to update the animation state
  const handleAnimation = () => {
    setAnimation(false);
  };

  //Variable to store the mode state
  const [mode, setMode] = useState("light");
  //function to update the mode state
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // get titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [title, setTitle] = useState("");
  //update the title on change of the drowndrop
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setAnimation(true);
  };

  const [search, setSearch] = useState("");
  //update the search on change of the input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnimation(true);
  };

  //clear the title and search
  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true);
  };

  //filter the profiles based on the title
  const filtedProfiles = profiles.filter(
    (profile) =>
      (title === "" || profile.title === title) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
  );
  const buttonStyle = {
    border: "1px solid #ccc",
  };

  return (
    <>
      <header>
        
      <NavBar mode={mode} updateMode={handleModeChange}/>
        
        
      </header>
      <main className={mode === "light" ? "light" : "dark"}>
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
              <Card key={profile.id} {...profile} />
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