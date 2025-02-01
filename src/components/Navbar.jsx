
import styles from "../styles/navbar.module.css";

const NavBar = ({mode, updateMode}) => {
  return (
    <nav className={`${styles["navbar"]}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Profiles</a>
        </li>
      </ul>
      <button onClick={updateMode}>
        {mode === "light" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};
export default NavBar;
