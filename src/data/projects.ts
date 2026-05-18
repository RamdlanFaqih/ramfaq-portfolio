export interface Project {
  slug: string;
  title: string;
  tech: string[];
  description: string;
  type: "web-only" | "mobile-only" | "web-mobile";
  image?: string;
  mobileImage?: string;

  // Detail Page Extra Info
  year: string;
  role: string;
  client?: string;
  overview: string;
  keyFeatures: string[];
  challenges: string[];
}

export const projectsData: Project[] = [
  {
    slug: "fairway",
    title: "Fairway (Web App)",
    tech: ["Next.js", "React", "Google 3D Maps API", "TypeScript", "Tailwind CSS"],
    description: "Built an MVP web application visualizing real-time golf ball tracking on an immersive 3D map. Integrated Google Photorealistic 3D Maps API (beta) to deliver high-fidelity, realistic course visualizations.",
    type: "web-only",
    image: "",
    year: "2024 - 2025",
    role: "Frontend Engineer",
    client: "Orbit Tech Solutions",
    overview: "Fairway was designed as an innovative MVP web application for golfers, enabling them to visualize golf ball flight paths and trajectories in real-time. By leveraging cutting-edge web graphics and mapping, we built a fully interactive course view that bridges digital telemetry and physical gameplay.",
    keyFeatures: [
      "Real-time 3D golf ball trajectory tracking and visualization.",
      "Immersive course overview using the latest Google Photorealistic 3D Maps API.",
      "Custom viewport overlays and flight path camera controls."
    ],
    challenges: [
      "Integrating and rendering heavy 3D assets smoothly in standard web viewports.",
      "Syncing telemetry trajectory coordinate data into Google Maps' Photorealistic 3D camera pathing seamlessly.",
      "Maintaining fluid, 60fps render speeds on both desktop and high-end mobile browsers."
    ]
  },
  {
    slug: "karpous",
    title: "Karpous Mobile App",
    tech: ["React Native", "Zustand", "TanStack Query", "Ethers.js", "Shufti Pro KYC", "Firebase"],
    description: "Developed core mobile features for a Global RWA (Real-World Asset) Exchange. Implemented secure USDT deposit and withdrawal flows using Ethers.js, integrated instant KYC verification, Zoho digital signatures, and real-time push notifications.",
    type: "mobile-only",
    image: "",
    year: "2024 - 2025",
    role: "Frontend Engineer",
    client: "Orbit Tech Solutions",
    overview: "Karpous is a mobile client for a pioneering Global Real-World Asset (RWA) Exchange. The app enables retail and institutional investors to easily access, browse, trade, and invest in fractionalized real-world assets like premium real estate and commodities on-chain.",
    keyFeatures: [
      "Secure USDT crypto wallet deposit, transfer, and withdrawal flows using Ethers.js.",
      "Automated and frictionless KYC (Know Your Customer) OCR checkouts using Shufti Pro API.",
      "Embedded Zoho document signing portal for compliance and transaction contracts.",
      "Real-time transactional and account event push alerts powered by Firebase Cloud Messaging."
    ],
    challenges: [
      "Optimizing heavy state synchronization across high-frequency trade order books on mobile screens.",
      "Ensuring cryptographic security and safe private key/session handling in React Native.",
      "Creating robust and user-friendly KYC workflows that handle low-quality camera inputs and OCR errors gracefully."
    ]
  },
];
