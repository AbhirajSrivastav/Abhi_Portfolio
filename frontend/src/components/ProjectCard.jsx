export default function ProjectCard({ title, desc }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    borderRadius: "10px",
    background: "#1e293b",
    marginBottom: "20px",
  },
};