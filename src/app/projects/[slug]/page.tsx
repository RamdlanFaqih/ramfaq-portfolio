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

  const ogImage = project.image && project.image.trim() !== "" ? project.image : "/images/ramfaq.png";

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Ramdlan Faqih`,
      description: project.description,
      type: "article",
      images: [
        {
          url: ogImage,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ramdlan Faqih`,
      description: project.description,
      images: [ogImage],
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
