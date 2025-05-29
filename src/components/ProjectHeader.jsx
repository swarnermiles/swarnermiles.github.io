export default function ProjectHeader({ title }) {
  return (
    <header style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "var(--text)" }}>{title}</h1>
    </header>
  );
}
