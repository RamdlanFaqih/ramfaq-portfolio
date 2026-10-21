import Sketch from "./Sketch";

const skills = ["Flutter", "React Native", "React", "Next.js", "TypeScript", "Node.js"];

export default function SkillsMarquee() {
  return (
    <div className="page-width toolkit">
      <div className="toolkit-label"><p>Tools I work with</p><Sketch kind="pencil" /></div>
      <ul aria-label="Technologies">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </div>
  );
}
