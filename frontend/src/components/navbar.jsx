import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Avi.dev</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/chat" style={styles.link}>AI Chat</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#020617",
  },
  link: {
    marginLeft: "20px",
  },
};