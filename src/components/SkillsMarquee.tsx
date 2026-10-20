const skills = ["Flutter", "React Native", "React", "Next.js", "TypeScript", "Node.js"];

export default function SkillsMarquee() {
  return (
    <div className="page-width toolkit">
      <p>Tools I work with</p>
      <ul aria-label="Technologies">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </div>
  );
}
