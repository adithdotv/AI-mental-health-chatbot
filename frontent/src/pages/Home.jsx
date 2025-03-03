import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Mental Health Chatbot</h1>
      <p>
        Your safe space to express yourself and get support. Start your journey towards better mental health today!
      </p>
      <div style={styles.buttonContainer}>
        <Link to="/chat" style={styles.button}>Start Chat</Link>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/register" style={styles.button}>Register</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    background: "#f0f4ff",
    height: "100vh",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    textDecoration: "none",
    padding: "10px 20px",
    margin: "10px",
    background: "#6200ea",
    color: "white",
    borderRadius: "5px",
    fontSize: "18px",
  },
};

export default Home;
