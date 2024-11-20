export default function ProjectCard({ src, title, description, githubLink }) {
  return (
    <a href={githubLink} target="_blank">
      <img className="hover" src={src} alt="Virberr logo" />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
