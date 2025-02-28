
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <nav className={`${styles["navbar"]}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/add-profile">Add Profile</Link>
        </li>
      </ul>
      <button onClick={toggleMode}>
        {mode === "light" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
