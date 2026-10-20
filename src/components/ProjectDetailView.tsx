import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectDetailViewProps {
  project: Project;
  nextProject: Project;
  currentProjectIndex: number;
}

export default function ProjectDetailView({ project, nextProject }: ProjectDetailViewProps) {
  const screenshots = [...new Set([project.image, ...(project.images || [])].filter((src): src is string => Boolean(src)))];
  return (
    <>
      <header className="site-header"><nav className="page-width nav-inner" aria-label="Project navigation"><Link href="/#works" className="text-link text-sm"><ArrowLeft size={16} /> Back to work</Link><span className="eyebrow">FAQIH / PROJECT NOTES</span></nav></header>
      <main className="page-width project-detail">
        <p className="eyebrow">{project.role} / {project.year}</p>
        <h1>{project.title}</h1>
        <dl className="detail-facts"><div><dt>Client / Organization</dt><dd>{project.client || "Freelance"}</dd></div><div><dt>Platform</dt><dd>{project.type === "web-only" ? "Web" : project.type === "mobile-only" ? "Mobile" : "Web & Mobile"}</dd></div><div><dt>Built with</dt><dd>{project.tech.slice(0, 3).join(", ")}</dd></div></dl>
        {screenshots.length > 0 && <div className={`detail-gallery ${project.type === "web-only" ? "detail-gallery-web" : ""}`}>{screenshots.map((src, index) => <Image key={src} src={src} alt={`${project.title} interface, screen ${index + 1}`} width={project.type === "web-only" ? 1200 : 400} height={project.type === "web-only" ? 800 : 850} sizes={project.type === "web-only" ? "(max-width: 700px) 90vw, 1000px" : "(max-width: 700px) 65vw, 300px"} preload={index === 0} />)}</div>}
        <div className="detail-content"><div><section><h2>About the project</h2><p>{project.overview}</p></section><section><h2>What I built</h2><ul>{project.keyFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul></section><section><h2>Engineering challenges</h2><ul>{project.challenges.map(challenge => <li key={challenge}>{challenge}</li>)}</ul></section></div><aside><p className="eyebrow">THE TOOLKIT</p><ul>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul></aside></div>
        <Link href={`/projects/${nextProject.slug}`} className="next-project"><span className="eyebrow">UP NEXT</span><h2>{nextProject.title}<ArrowRight size={25} /></h2></Link>
      </main>
    </>
  );
}
