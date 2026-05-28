export interface Project {
  slug: string;
  title: string;
  tech: string[];
  description: string;
  type: "web-only" | "mobile-only" | "web-mobile";
  image?: string;
  mobileImage?: string;
  images?: string[];
  doubleMockup?: boolean;

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
    slug: "sancha-tea",
    title: "Sancha Tea App",
    tech: ["Flutter", "Dart", "BLoC", "Retrofit", "Hive DB"],
    description: "A premium e-commerce mobile application for tea lovers. Built with Flutter using BLoC state management, featuring custom product builders, localized tea pairing guides, and fast checkout.",
    type: "mobile-only",
    image: "/images/sancha-1.png",
    images: ["/images/sancha-1.png", "/images/sancha-2.png", "/images/sancha-3.png"],
    year: "2024",
    doubleMockup: true,
    role: "Mobile App Engineer",
    client: "Sancha Tea Co.",
    overview: "Sancha Tea App is a custom tea shop and wellness mobile commerce client. It provides users with interactive artisanal tea blends, personalized brewing recommendations, and custom subscription boxes.",
    keyFeatures: [
      "Artisanal blend customizer with real-time price updates.",
      "Interactive brewing timer, temperature advice, and water-ratio calculations.",
      "Offline shopping cart support using Hive database caching and standard BLoC patterns."
    ],
    challenges: [
      "Configuring and caching diverse, high-fidelity tea brewing countdown timers running concurrently.",
      "Syncing complex cart order lists and coupons offline with standard server REST APIs."
    ]
  },
  {
    slug: "temenin-id",
    title: "Temenin.Id",
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "Tailwind CSS", "Firebase"],
    description: "A social connection platform helping users find local companions for various activities. Integrated real-time chat, location-based matching, and secure verification flows.",
    type: "mobile-only",
    image: "",
    images: ["", "", ""],
    year: "2024",
    role: "Frontend Engineer",
    client: "Temenin.Id Team",
    overview: "Temenin.Id is a social networking and activity companion mobile app. It connects individuals wanting to hire companions for events, dining, or travel with verified companion guides in their vicinity.",
    keyFeatures: [
      "Real-time instant chat and push notifications powered by Firebase Cloud Messaging.",
      "Map integrations displaying nearby guides, service catalogs, and reviews.",
      "Automated KYC checks and a secure, anonymous peer-rating framework."
    ],
    challenges: [
      "Implementing low-latency push notification triggers on fast-closing app sessions.",
      "Protecting user privacy by bounding GPS coordination reports to generalized radius bubbles."
    ]
  },
  {
    slug: "fun-music-software",
    title: "Fun Music Software",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation"],
    description: "A cross-platform mobile music player and library manager built with React Native. Features smooth audio streaming, offline playback, and custom playlist creation.",
    type: "mobile-only",
    image: "/images/fun-music.webp",
    images: ["/images/fun-music.webp", "/images/fun-music2.webp", "/images/fun-music.webp"],
    doubleMockup: true,
    year: "2023 - 2024",
    role: "Mobile App Developer",
    client: "Fun Music Inc.",
    overview: "Fun Music Software is a cross-platform mobile application built to provide a modern, seamless audio playback experience. It integrates local file database management, smooth background audio play, and playlist curation.",
    keyFeatures: [
      "Local library synchronization and music player controls.",
      "Custom background audio streaming capability with OS-level integrations.",
      "Light/Dark interface layout customizer and local configuration caching."
    ],
    challenges: [
      "Ensuring persistent audio play across background transitions on diverse Android and iOS devices.",
      "Managing fast database search query caching for massive library files on low-end hardware."
    ]
  },
  {
    slug: "fairway",
    title: "Fairway (Web App)",
    tech: ["Next.js", "React", "Google 3D Maps API", "TypeScript", "Tailwind CSS"],
    description: "Built an MVP web application visualizing real-time golf ball tracking on an immersive 3D map. Integrated Google Photorealistic 3D Maps API (beta) to deliver high-fidelity, realistic course visualizations.",
    type: "web-only",
    image: "/images/fairway.png",
    images: ["/images/fairway.png", "/images/fairway.png", "/images/fairway.png"],
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
    images: ["", "", ""],
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
  {
    slug: "tpa-employee-hub",
    title: "TPA Employee Hub (Mobile)",
    tech: ["Flutter", "Dart", "BLoC", "AutoRoute", "Dio", "Freezed", "ScreenUtil"],
    description: "A Domain-Driven Design (DDD) mobile application for employee management. Developed using Flutter and BLoC state management, enabling employees to securely submit and manage document updates (KTP, KK, Bank, BPJS) with offline support.",
    type: "mobile-only",
    image: "",
    images: ["", "", ""],
    year: "2024 - 2025",
    role: "Mobile App Engineer",
    client: "TPA Employee Hub",
    overview: "TPA Employee Hub Mobile is a core mobile application designed to simplify and digitize the employee document updating process. By structuring the codebase using Domain-Driven Design (DDD) and BLoC, the app ensures robust, scalable, and responsive form entry and document submission flows for workforce updates.",
    keyFeatures: [
      "Secure multi-document upload and submission for KTP, Family Card (KK), Bank details, and BPJS.",
      "Domain-Driven Design (DDD) with clean separation of layers and dependency injection via GetIt.",
      "Responsive UI layouts across multiple device sizes using ScreenUtil and custom Theme systems.",
      "Multi-environment setup using Flutter flavors (dev, staging, prod) to streamline releases."
    ],
    challenges: [
      "Ensuring large image files and scanned documents are compressed and uploaded efficiently over unstable connections.",
      "Managing complex code-generated models using Freezed and AutoRoute transitions without performance degradation."
    ]
  },
  {
    slug: "dashboard-tpa-employee-hub",
    title: "TPA Employee Hub Dashboard",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Zod", "Axios"],
    description: "An administrative employee management portal built with Next.js and Tailwind CSS. Features include secure HTTPOnly cookie authentication, real-time bulk document processing, automated OCR data extraction progress queues, and unit-afdeling assignment controls.",
    type: "web-only",
    image: "",
    images: ["", "", ""],
    year: "2025",
    role: "Lead Frontend Engineer",
    client: "TPA Employee Hub",
    overview: "The Dashboard TPA Employee Hub is a premium web portal built using Next.js 16 and Tailwind CSS 4 to manage bulk employee submissions and verify extracted document data. It provides administrators with a centralized control room to track OCR parsing queues, resolve failed scans, and assign regional admins to specific organizational divisions (Afdelings).",
    keyFeatures: [
      "Real-time OCR progress monitoring and manual verification for parsed employee documents (KTP, KK, BPJS, Bank).",
      "Role-based access controls and assignment structures (1 Afdeling = 1 Admin; 1 Admin = Multiple Afdelings).",
      "Robust client state caching using Zustand with persistence and server synchronization using TanStack Query.",
      "Secured sessions using HTTPOnly JWT cookie authentication and automated refresh token rotation."
    ],
    challenges: [
      "Handling cross-origin cookie credentials safely across local development environments and production servers.",
      "Creating an intuitive side-by-side data verification view allowing admins to audit OCR fields against raw document scans efficiently."
    ]
  },
  {
    slug: "fastech-employee-app",
    title: "Fastech Internal Employee App",
    tech: ["Flutter", "Dart", "BLoC", "GPS Geolocation", "Firebase Cloud Messaging", "Dio"],
    description: "A mission-critical internal mobile application used by Fastech employees for daily operations. Features GPS-based geofenced attendance check-ins, multi-role paid/unpaid leave workflows, daily activity logging, and real-time supervisor approvals.",
    type: "mobile-only",
    image: "",
    images: ["", "", ""],
    year: "2023 - 2024",
    role: "Mobile App Developer",
    client: "Rotasi Galaksi Teknologi (Rogatekno)",
    overview: "The Fastech Internal Employee App is an enterprise utility application built using Flutter and BLoC. It handles daily field operations, tracks geofenced attendance logs, processes overtime/overshift requests, and streamlines communication between CSO staff, Team Leaders, and HO (Head Office) administrators.",
    keyFeatures: [
      "GPS-based geofenced check-in and check-out to verify employee locations and prevent attendance misuse.",
      "Multi-layered approval routing for overshift, paid leave, and unpaid leave requests.",
      "Role-based dashboards showing custom action panels for CSO, Team Leaders, Supervisors, and C-Level Executives.",
      "Real-time transactional push notifications for instant approvals using Firebase Cloud Messaging."
    ],
    challenges: [
      "Tracking high-accuracy GPS coordinates under heavy background battery optimizations on newer iOS and Android builds.",
      "Synchronizing multi-stage leave request states reliably when supervisors are operating offline or in poor connectivity zones."
    ]
  },
  {
    slug: "pokat-pln",
    title: "POKAT PLN",
    tech: ["Flutter", "Dart", "BLoC", "flutter_map", "google_maps_flutter", "Geolocator", "fl_chart", "Dio"],
    description: "A GIS mapping and asset tracking mobile application built for PT PLN (Persero). Integrates interactive offline-first maps to monitor medium-voltage cables, identify clearance hazards (peta pohon), view technical services, and map power outages.",
    type: "mobile-only",
    image: "",
    images: ["", "", ""],
    year: "2024",
    role: "Mobile App Engineer",
    client: "PT PLN (Persero)",
    overview: "POKAT PLN is a professional spatial GIS utility mobile app built using Flutter and Cubit/BLoC. Designed for PT PLN (Persero), it empowers field officers to map grid assets, conduct vegetation clearing (tree mapping) inspections near medium-voltage lines (SKTM), and coordinate technical services (Yantek) with real-time geospatial coordinate telemetry.",
    keyFeatures: [
      "GIS Mapping visualizations combining Google Maps and open-source flutter_map layers for offline terrain views.",
      "Tree hazard tracker (Peta Pohon) managing over 100,000 recorded tree locations for vegetation clearing management.",
      "Real-time coordinates plotting and navigation routing for technical maintenance dispatch (Peta Yantek) and outages (Peta Gangguan).",
      "Interactive analytical data charts tracking inspection rates and regional compliance using fl_chart."
    ],
    challenges: [
      "Rendering and cluster-caching hundreds of thousands of spatial nodes (such as individual tree coordinates and cable lines) fluidly on the mobile map.",
      "Maintaining low-latency coordinate updates in remote areas with minimal cellular signal through local database indexing."
    ]
  }
];
