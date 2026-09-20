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
    slug: "super-app",
    title: "Super App (Customer)",
    tech: ["Flutter", "Dart", "Riverpod", "WebRTC", "iOS CallKit", "PushKit (VoIP)", "Shorebird (OTA)", "Dio", "Sentry"],
    description: "A high-scale consumer on-demand super app ecosystem delivering food delivery, grocery, courier services, and digital utilities. Architected the PPOB & Raja Biller engine, real-time in-app WebRTC calling with iOS CallKit & PushKit VoIP integration, Shorebird OTA updates, and DNS-over-HTTPS fallback.",
    type: "mobile-only",
    image: "",
    images: ["", "", ""],
    year: "2024 - 2025",
    role: "Mobile App Engineer",
    client: "PT Super Multi Bisnis Internasional",
    overview: "Super App is an integrated consumer super application connecting users with multi-vertical on-demand services across Indonesia, including food delivery (SuperFood), grocery shopping (SuperMart), point-to-point package courier (SuperSend), and digital biller utilities. As part of the mobile engineering team, my core contributions centered on building the end-to-end PPOB biller infrastructure, engineering cross-platform WebRTC voice calling with native iOS CallKit & PushKit VoIP background handling, integrating Shorebird code push, and hardening network resilience.",
    keyFeatures: [
      "Real-Time WebRTC Calling & iOS CallKit Integration: Implemented driver/customer in-app voice calling with autoGainControl audio constraints, paired with native iOS CallKit UI and Apple PushKit (VoIP push) to wake terminated apps and present native lock-screen answering.",
      "PPOB & Raja Biller Payment Engine: Comprehensive utility biller payment flow for prepaid/postpaid cellular credit, PLN electricity tokens, PDAM water, Internet & streaming subscriptions, and MLBB gaming top-ups with server-ID verification.",
      "Zero-Downtime Over-The-Air (OTA) Updates: Integrated Shorebird code push pipeline enabling instant production bug fixes and patch deployments directly to client devices without app store review latency.",
      "Resilient Network Layer & DoH Fallback: Implemented DNS-over-HTTPS (DoH) fallback to bypass regional ISP DNS resolution failures, paired with strict SSL certificate validation and Sentry observability interceptors.",
      "SuperSend Courier Logistics & Fee Separation: Decoupled platform and insurance fee calculation modules, implemented interactive receiver location pin picking, and debounced shared cart notes.",
      "Ratings, Reviews & Driver Tipping: Built modular shop and item rating submissions with dynamic payload handling, tipping flows for drivers, and resolved native WebRTC audio call lifecycle bugs on iOS.",
      "Silent Background State Revalidation: Engineered smart order state refresh on tab switching to eliminate stale order states without triggering disruptive full-screen loading spinners."
    ],
    challenges: [
      "Complying with Apple's strict iOS PushKit requirement mandating immediate CallKit incoming call reporting upon VoIP push reception to avoid OS-level termination.",
      "Handling heterogeneous biller response schemas, varying transaction statuses (pending, processing, failed), and distinct receipt structures across numerous third-party payment gateways seamlessly.",
      "Guaranteeing network resilience and low-latency API communication in remote regions with unstable DNS routing via DNS-over-HTTPS and intelligent request retry layers."
    ]
  },
  {
    slug: "super-driver",
    title: "Super Driver",
    tech: ["Flutter", "Dart", "Riverpod", "WebRTC", "iOS CallKit", "PushKit (VoIP)", "Google Maps Flutter", "Dio", "Sentry"],
    description: "A mission-critical on-demand mobile application for driver partners. Engineered real-time WebRTC voice calling with native iOS CallKit & PushKit VoIP background notifications, native Android background order alarm, multi-step KYC onboarding, and transparent income breakdown sheets.",
    type: "mobile-only",
    image: "",
    images: ["", "", ""],
    year: "2024 - 2025",
    role: "Mobile App Engineer",
    client: "PT Super Multi Bisnis Internasional",
    overview: "Super Driver is the primary mobile tool for driver partners to accept rides, fulfill food & mart orders, coordinate parcel deliveries, and navigate turn-by-turn. Working on the driver app, I spearheaded the development of real-time in-app VoIP telecommunications via WebRTC with native iOS CallKit & PushKit background wake-ups, the native background order dispatch alarm, driver KYC onboarding, transparent financial breakdowns, and geospatial memory optimizations.",
    keyFeatures: [
      "Driver-to-Customer WebRTC Voice Calls & iOS CallKit: Integrated low-latency VoIP voice calling using flutter_webrtc, fully connected to native iOS CallKit and PushKit background VoIP notifications so drivers receive calls on lock-screen even with app killed.",
      "Native Android Background Order Alarm: Architected a reliable background wake-lock and notification ringer system with duplicate suppression, ensuring drivers never miss incoming dispatch alerts even in deep device sleep (Doze mode).",
      "Revamped Multi-Step Driver Onboarding: Built a responsive registration workflow featuring RegisterProgressBar, OCR-based document verification (KTP, SIM, STNK, BPKB, optional SKCK), custom date pickers, and re-upload tracking for rejected submissions.",
      "Transparent Earnings & Financial Breakdown: Re-architected TransactionDetailSheet to distinctly segregate driver deposit balances, net earnings, platform commission fees, insurance items, and customer tips.",
      "Deferred Deep Linking & Attribution: Configured deferred deep link routing through the splash screen to reliably attribute driver referral codes and Google Ads installation campaigns.",
      "Map Rendering & Memory Optimization: Eliminated critical memory leaks in the transport marker factory by properly disposing native image codecs and byte buffers during high-frequency GPS coordinate updates."
    ],
    challenges: [
      "Synchronizing WebRTC signaling state transitions, ICE candidate exchanges, and audio session categories across background-to-foreground transitions triggered by CallKit.",
      "Bypassing aggressive Android OS battery optimization and device-specific background killers to guarantee instant dispatch alarm delivery.",
      "Rendering dense real-time map markers and polylines at 60 FPS without memory bloat or garbage collection stutter on budget Android devices."
    ]
  },
  {
    slug: "super-merchant",
    title: "Super Merchant",
    tech: ["Flutter", "Dart", "Riverpod", "WebRTC", "iOS CallKit", "PushKit (VoIP)", "Chatwoot SDK", "Dio", "Sentry"],
    description: "A merchant store and kitchen management application empowering restaurant and mart partners to process incoming orders in real-time. Engineered merchant-to-customer WebRTC VoIP calling with iOS CallKit & PushKit, persistent Android foreground service order alarm with auto-accept timers, and resilient token refresh rotation.",
    type: "mobile-only",
    image: "",
    images: ["", "", ""],
    year: "2024 - 2025",
    role: "Mobile App Engineer",
    client: "PT Super Multi Bisnis Internasional",
    overview: "Super Merchant is the operational hub for merchant partners, enabling restaurant kitchens and retail grocery stores to receive on-demand orders, coordinate preparations, communicate with customers, calibrate menus, and track daily revenue. Within the team, my focus was on architecting direct WebRTC VoIP customer communications integrated with iOS CallKit & PushKit, persistent foreground order alerting, live CS support integrations, multi-flavor environments, and resilient auth session handling.",
    keyFeatures: [
      "Merchant-to-Customer In-App VoIP Calling & iOS CallKit: Built crystal-clear voice calling using flutter_webrtc integrated with native iOS CallKit and PushKit VoIP triggers, allowing store operators to answer calls directly from lock-screens while safeguarding WebSocket connections during active calls.",
      "Persistent Foreground Service & Alarm: Implemented an uninterrupted Android foreground service order alarm with high-volume acoustic alerts, vibration loops, customer details propagation, and an auto-accept visual countdown timer banner.",
      "SuperChat & Chatwoot Live Support Integration: Embedded SuperChat SDK via WebView with seamless identity resolution, alongside Chatwoot customer service tooling for expedited order resolution and dynamic message templates.",
      "Resilient Auth Token Refresh Architecture: Hardened JWT refresh token rotation logic to handle server-side session revocations and concurrent token refreshes gracefully without kicking merchants out during active shifts.",
      "Multi-Environment Flavor Pipeline: Engineered distinct Flutter flavor configurations for Staging and Production with isolated bundle IDs, intent filters, and Google Services manifests.",
      "Store Financials & Operational Controls: Overhauled revenue summaries ('Total Pemasukan'), consolidated platform and insurance fee line items, enforced restaurant tax input validation, and streamlined operational store hours."
    ],
    challenges: [
      "Ensuring incoming order alarms and CallKit VoIP notifications cut through loud kitchen environments continuously without getting terminated by OS background task limiters.",
      "Preventing WebSocket disconnections and token expiration failures mid-call during merchant-customer voice communications.",
      "Managing audio hardware session categorization (switching between loudspeaker, earpiece, and Bluetooth headsets) seamlessly during WebRTC active calls."
    ]
  },
  {
    slug: "sancha-tea",
    title: "Sancha Tea App",
    tech: ["Flutter", "Dart", "GetX", "Dio", "GetStorage", "Firebase Cloud Messaging", "flutter_map"],
    description: "A premium mobile ordering and loyalty application built for Sancha Tea. Powered by GetX and Dio, featuring a secure WhatsApp OTP login with Universal Link routing, a geospatial branch finder, and a highly customizable UI theme system.",
    type: "mobile-only",
    image: "/images/sancha-1.png",
    images: ["/images/sancha-1.png", "/images/sancha-2.png", "/images/sancha-3.png"],
    year: "2026",
    doubleMockup: true,
    role: "Mobile App Engineer",
    client: "Sancha Tea",
    overview: "Sancha Tea App is a cross-border F&B mobile ordering and loyalty application integrated with ESB systems (ESO QS & ESB Loop). It provides users with a seamless checkout flow to buy premium tea products, check nearby outlet details, track points history, and redeem tiered membership rewards/vouchers across Indonesia and Malaysia.",
    keyFeatures: [
      "WhatsApp OTP-based Authentication: Secure and low-friction login leveraging Loop APIs and automated Universal Link/App Link redirects.",
      "Dynamic Cross-Border Multi-Currency Support: Custom locale-based layout formatting supporting both IDR (Rp) and MYR (RM) depending on the active branch.",
      "ESB Loop Loyalty & Rewards Integration: Dynamic membership dashboard showing tiered benefits, points accumulation, and personalized 'Best Deals'.",
      "Robust Cart & Voucher Policy Validation: Pure-function validation layers on the frontend restricting coupon and free-item usage rules before checkout."
    ],
    challenges: [
      "Securing app deep-link routing and state synchronization to guarantee reliable login redirection from external WhatsApp chat sessions.",
      "Orchestrating concurrent API requests and state management across dual-backend engines (ESO QS and ESB Loop) within a single ordering transaction.",
      "Ensuring performance efficiency when handling custom theme extensions (fonts, custom surfaces, shadows) and rendering map layers dynamically."
    ]
  },
  {
    slug: "temenin-id",
    title: "Temenin.Id",
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "Tailwind CSS", "Firebase"],
    description: "A social connection platform helping users find local companions for various activities. Integrated real-time chat, location-based matching, and secure verification flows.",
    type: "mobile-only",
    image: "/images/temenin.png",
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
  // {
  //   slug: "karpous",
  //   title: "Karpous Mobile App",
  //   tech: ["React Native", "Zustand", "TanStack Query", "Ethers.js", "Shufti Pro KYC", "Firebase"],
  //   description: "Developed core mobile features for a Global RWA (Real-World Asset) Exchange. Implemented secure USDT deposit and withdrawal flows using Ethers.js, integrated instant KYC verification, Zoho digital signatures, and real-time push notifications.",
  //   type: "mobile-only",
  //   image: "",
  //   images: ["", "", ""],
  //   year: "2024 - 2025",
  //   role: "Frontend Engineer",
  //   client: "Orbit Tech Solutions",
  //   overview: "Karpous is a mobile client for a pioneering Global Real-World Asset (RWA) Exchange. The app enables retail and institutional investors to easily access, browse, trade, and invest in fractionalized real-world assets like premium real estate and commodities on-chain.",
  //   keyFeatures: [
  //     "Secure USDT crypto wallet deposit, transfer, and withdrawal flows using Ethers.js.",
  //     "Automated and frictionless KYC (Know Your Customer) OCR checkouts using Shufti Pro API.",
  //     "Embedded Zoho document signing portal for compliance and transaction contracts.",
  //     "Real-time transactional and account event push alerts powered by Firebase Cloud Messaging."
  //   ],
  //   challenges: [
  //     "Optimizing heavy state synchronization across high-frequency trade order books on mobile screens.",
  //     "Ensuring cryptographic security and safe private key/session handling in React Native.",
  //     "Creating robust and user-friendly KYC workflows that handle low-quality camera inputs and OCR errors gracefully."
  //   ]
  // },
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
