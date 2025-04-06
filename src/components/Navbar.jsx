
import styles from "../styles/navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ModeContext from "../contexts/ModeContext";
import { toggle } from "../redux/modeSlice.js";
import { logout} from "../redux/authSlice.js";
import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {

  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const handleModeChange = () => {
    dispatch(toggle());
  }
  const isLogin = useSelector((state) => state.auth.isLogin);
  // const { isLogin, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    // logout();
    dispatch(logout());
    navigate("/login");
  }
  return (
    <nav className={`${styles["navbar"]}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {
        isLogin &&
        <li>
        <Link to="/add-profile">Add Profile</Link>
        </li>}
      </ul>
      {
        isLogin ?
        <button onClick={handleClick}>Logout</button>
        :
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul> 
      }
      <button onClick={handleModeChange}>
        {mode === "light" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;