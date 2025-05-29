export default function ProjectVideoEmbed({ video }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <iframe
        width="100%"
        height="400"
        src={video}
        title="Project Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ border: "none", borderRadius: "12px" }}
        loading="lazy"
      />
    </div>
  );
}
