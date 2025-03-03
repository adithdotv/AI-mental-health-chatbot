import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#6200ea", color: "white" }}>
      <h2>Mental Health Chatbot</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
        <Link to="/login" style={{ color: "white", marginRight: "10px" }}>Login</Link>
        <Link to="/register" style={{ color: "white" }}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
