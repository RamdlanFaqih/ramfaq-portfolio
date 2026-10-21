"use client";

import Sketch from "./Sketch";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Grid2X2, Smartphone, Monitor } from "lucide-react";
import { projectsData, type Project } from "@/data/projects";

const descriptions: Record<string, string> = {
  "sancha-tea": "Mobile ordering, store finder, and loyalty rewards for Sancha Tea.",
  "temenin-id": "Companion bookings, payments, real-time chat, and online audio/video sessions.",
  "tpa-employee-hub": "Employee document collection with offline drafts and verification feedback.",
  "dashboard-tpa-employee-hub": "A document verification dashboard connecting field submissions, review teams, and employee records.",
  "fun-music-software": "A music player with streaming, offline playback, and playlists.",
  "fairway": "A golf tracking prototype built with Google’s 3D Maps API.",
};
const filters = ["All work", "Mobile", "Web"] as const;
type Filter = typeof filters[number];
function matches(project: Project, filter: Filter) {
  return filter === "All work" || (filter === "Mobile" ? project.type !== "web-only" : project.type !== "mobile-only");
}

export default function SelectedWorks() {
  const [filter, setFilter] = useState<Filter>("All work");
  const visible = projectsData.filter(project => matches(project, filter));
  const featured = visible.filter(project => project.image);
  const other = visible.filter(project => !project.image);
  return (
    <section id="works" className="page-width section-space">
      <div className="section-heading"><Sketch kind="arrow" /><div><p className="eyebrow"><span className="section-index">01</span> SELECTED WORK</p><h2>Selected projects<span className="wordmark-dot">.</span></h2></div></div>
      <div className="work-toolbar"><div className="filter-list" aria-label="Filter projects">{filters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)} className={filter === item ? "selected" : ""}>{item === "All work" ? <Grid2X2 size={16} aria-hidden="true" /> : item === "Mobile" ? <Smartphone size={16} aria-hidden="true" /> : <Monitor size={16} aria-hidden="true" />}{item}</button>)}</div><span aria-live="polite">{visible.length} projects</span></div>
      <div className="project-grid">
        {featured.map(project => <Link key={project.slug} href={`/projects/${project.slug}`} className={`project-card project-${project.slug}`}>
          <div className={`project-art ${project.type === "web-only" ? "web-art" : "mobile-art"}`}>
            <span className="art-label">{project.type === "web-only" ? "WEB APPLICATION" : "MOBILE APPLICATION"}</span>
            {project.type === "web-only" ? <div className="browser-preview"><div className="browser-toolbar"><i /><i /><i /></div><Image src={project.image!} alt={`${project.title} interface`} width={800} height={500} sizes="(max-width: 700px) 90vw, 45vw" /></div> : <div className="phone-pair">{[project.image!, project.images?.find(src => src && src !== project.image) || project.image!].map((src, index) => <div className={`phone-preview phone-${index}`} key={index}><Image src={src} alt={`${project.title}, screen ${index + 1}`} width={220} height={460} sizes="(max-width: 700px) 35vw, 200px" /></div>)}</div>}
          </div>
          <div className="project-info"><div className="project-meta"><span>{project.tech.slice(0, 2).join(" / ")}</span><span>{project.year}</span></div><h3>{project.title}<ArrowUpRight size={21} /></h3><p>{descriptions[project.slug] || project.description}</p></div>
        </Link>)}
      </div>
      {other.length > 0 && <div className="more-work"><div className="more-work-heading"><h3>More projects</h3><Sketch kind="folder" /></div>{other.map(project => <Link key={project.slug} href={`/projects/${project.slug}`} className="project-row"><FileText size={19} /><span><strong>{project.title}</strong><small>{project.role} · {project.tech[0]}</small></span><span className="row-year">{project.year}</span><ArrowUpRight size={19} /></Link>)}</div>}
    </section>
  );
}
