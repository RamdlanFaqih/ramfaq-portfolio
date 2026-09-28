import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Ramdlan Faqih`,
      description: project.description,
      url: `/projects/${slug}`,
      siteName: "Ramdlan Faqih — Portfolio",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ramdlan Faqih`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const currentProjectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (currentProjectIndex === -1) {
    notFound();
  }

  const project = projectsData[currentProjectIndex];
  const nextProjectIndex = (currentProjectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  return (
    <ProjectDetailView
      project={project}
      nextProject={nextProject}
      currentProjectIndex={currentProjectIndex}
    />
  );
}
