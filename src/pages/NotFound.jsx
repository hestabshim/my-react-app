import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p style={{textAlign:"center"}}>Sorry, the page you are looking for is not found.</p>
      <Link to="/" style={{textAlign:"center", display: "block"}}>Go back to Home</Link>
    </Wrapper>
  );
};

export default NotFound;