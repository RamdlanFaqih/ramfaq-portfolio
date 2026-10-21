import Sketch from "./Sketch";
import { ChevronDown } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Mobile Engineer",
    company: "PT. Super Multi Bisnis Internasional",
    date: "Jun 2026 - Present",
    achievements: [
      "Developed and maintained production mobile applications using Flutter, with Riverpod for scalable state management and clear separation between UI, business logic, and application state.",
      "Implemented real-time application flows using WebSocket, including connection lifecycle handling, state synchronization, reconnection scenarios, and real-time event updates.",
      "Integrated Firebase Cloud Messaging (FCM) to support push notifications across Android and iOS, including foreground, background, and terminated application states.",
      "Implemented iOS incoming call functionality using PushKit and CallKit, enabling VoIP-style call notifications and native incoming call experiences while the application is running in the background.",
      "Handled mobile application lifecycle and background-state edge cases to maintain reliable behavior for notifications, real-time events, and incoming calls.",
      "Collaborated closely with backend engineers to define WebSocket events, API behavior, notification payloads, and mobile-specific integration requirements.",
      "Investigated and resolved production-level mobile issues involving application lifecycle, network connectivity, asynchronous state updates, and platform-specific iOS/Android behavior.",
      "Supported mobile release preparation, debugging, and deployment across development, testing, and production environments."
    ]
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Rotasi Galaksi Teknologi (Rogatekno)",
    date: "Apr 2023 - Present",
    achievements: [
      "Designed and delivered end-to-end mobile solutions from initial requirements through production release across multiple client projects.",
      "Built scalable mobile applications using React Native (TypeScript, Zustand, TanStack Query, Firebase) and Flutter with BLoC architecture, emphasizing clean separation of concerns and long-term maintainability.",
      "Implemented robust state management patterns to support complex user flows and evolving business requirements.",
      "Managed entire deployments, including versioning, release preparation, and App Store review coordination to ensure on-time delivery."
    ]
  },
  {
    role: "Frontend Engineer",
    company: "Orbit Tech Solutions",
    date: "Aug 2024 - Jul 2025",
    achievements: [
      "Led development of production web and mobile applications, translating product requirements into scalable, maintainable frontend architecture.",
      "Architected and implemented complex UI flows using Next.js, React, React Native, TypeScript, Zustand, and TanStack Query, ensuring performance and state consistency across platforms.",
      "Owned the entire mobile release lifecycle (build, signing, CI/CD, store submission, and release management).",
      "Acted as a key frontend counterpart to backend and product teams, proactively shaping API contracts and refining feature scope to meet business goals."
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="page-width experience-layout">
        <div className="experience-intro"><p className="eyebrow"><span className="section-index">02</span> EXPERIENCE</p><h2>Work experience.</h2><Sketch kind="brainstorm" /></div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <details key={exp.company} className="experience-item" open={index === 0}>
              <summary><div><span className="experience-date">{exp.date}</span><h3>{exp.role}</h3><p>{exp.company}</p></div><ChevronDown size={18} /></summary>
              <ul>{exp.achievements.map(item => <li key={item}>{item}</li>)}</ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
