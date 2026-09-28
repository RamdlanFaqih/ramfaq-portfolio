import { ImageResponse } from "next/og";
import { projectsData, Project } from "@/data/projects";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const runtime = "nodejs";

export const alt = "Project Case Study — Ramdlan Faqih";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Helper to load and optimize image to base64 PNG data URL
async function loadBase64Image(imagePath?: string): Promise<string | null> {
  if (!imagePath || !imagePath.startsWith("/")) return null;
  try {
    const fullPath = path.join(process.cwd(), "public", imagePath);
    const fileBuffer = await fs.readFile(fullPath);
    const pngBuffer = await sharp(fileBuffer)
      .resize({ width: 700, height: 700, fit: "inside" })
      .png({ quality: 85 })
      .toBuffer();
    return `data:image/png;base64,${pngBuffer.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  const img1Path = project.images?.[0] || project.image;
  const img2Path = project.images?.[1] || project.image || project.images?.[0];
  const img3Path = project.images?.[2] || project.images?.[0] || project.image;

  const [img1, img2, img3] = await Promise.all([
    loadBase64Image(img1Path),
    loadBase64Image(img2Path),
    loadBase64Image(img3Path),
  ]);

  const isMobile = project.type === "mobile-only";
  const isWebMobile = project.type === "web-mobile";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "26px 36px 30px 36px",
          boxSizing: "border-box",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 99,
                backgroundColor: "#171717",
              }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#171717",
                letterSpacing: "-0.02em",
              }}
            >
              Ramdlan Faqih
            </span>
            <span style={{ fontSize: 15, color: "#737373", marginLeft: 4 }}>
              / Case Study
            </span>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {project.tech.slice(0, 4).map((techName, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#525252",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #e5e5e5",
                  padding: "4px 12px",
                  borderRadius: 999,
                }}
              >
                {techName}
              </span>
            ))}
          </div>
        </div>

        {/* Central Visual Showcase Box ("Kotak") */}
        <div
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
            backgroundColor: "#f5f5f7",
            borderRadius: 22,
            border: "1.5px solid #e5e5e7",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {isMobile ? (
            /* 3 Phones Display (Side-by-side with prominent center) */
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Left Phone */}
              <div
                style={{
                  width: 170,
                  height: 350,
                  backgroundColor: "#171717",
                  borderRadius: 28,
                  border: "3.5px solid #262626",
                  display: "flex",
                  overflow: "hidden",
                  marginRight: 32,
                  opacity: 0.85,
                  transform: "scale(0.92)",
                }}
              >
                {img1 ? (
                  <img
                    src={img1}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "#e5e5e5" }} />
                )}
              </div>

              {/* Center Phone */}
              <div
                style={{
                  width: 188,
                  height: 382,
                  backgroundColor: "#171717",
                  borderRadius: 30,
                  border: "3.5px solid #262626",
                  display: "flex",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.28)",
                }}
              >
                {img2 ? (
                  <img
                    src={img2}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "#e5e5e5" }} />
                )}
              </div>

              {/* Right Phone */}
              <div
                style={{
                  width: 170,
                  height: 350,
                  backgroundColor: "#171717",
                  borderRadius: 28,
                  border: "3.5px solid #262626",
                  display: "flex",
                  overflow: "hidden",
                  marginLeft: 32,
                  opacity: 0.85,
                  transform: "scale(0.92)",
                }}
              >
                {img3 ? (
                  <img
                    src={img3}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "#e5e5e5" }} />
                )}
              </div>
            </div>
          ) : isWebMobile ? (
            /* Web + Mobile Hybrid Layout */
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              {/* Background Browser */}
              <div
                style={{
                  width: 620,
                  height: 350,
                  backgroundColor: "#ffffff",
                  borderRadius: 14,
                  border: "1px solid #d4d4d8",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "7px 12px",
                    backgroundColor: "#f4f4f5",
                    borderBottom: "1px solid #e4e4e7",
                  }}
                >
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#f87171" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#fbbf24" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#4ade80" }} />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 12,
                      backgroundColor: "#ffffff",
                      borderRadius: 4,
                      padding: "2px 14px",
                      fontSize: 9,
                      color: "#a1a1aa",
                      border: "1px solid #e4e4e7",
                    }}
                  >
                    {project.title.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>
                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                  {img1 && (
                    <img
                      src={img1}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>

              {/* Overlapping Phone Frame */}
              <div
                style={{
                  position: "absolute",
                  right: 140,
                  bottom: 12,
                  width: 148,
                  height: 300,
                  backgroundColor: "#171717",
                  borderRadius: 24,
                  border: "3px solid #262626",
                  display: "flex",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
                }}
              >
                {img2 ? (
                  <img
                    src={img2}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "#e5e5e5" }} />
                )}
              </div>
            </div>
          ) : (
            /* 3 Web Browsers Display (Left, Right, Center) */
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              {/* Left Browser */}
              <div
                style={{
                  position: "absolute",
                  left: 90,
                  width: 440,
                  height: 275,
                  backgroundColor: "#ffffff",
                  borderRadius: 12,
                  border: "1px solid #d4d4d8",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  opacity: 0.65,
                  boxShadow: "0 10px 20px -5px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "6px 10px",
                    backgroundColor: "#f4f4f5",
                    borderBottom: "1px solid #e4e4e7",
                  }}
                >
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#f87171" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#fbbf24" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#4ade80" }} />
                </div>
                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                  {img1 && (
                    <img
                      src={img1}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>

              {/* Right Browser */}
              <div
                style={{
                  position: "absolute",
                  right: 90,
                  width: 440,
                  height: 275,
                  backgroundColor: "#ffffff",
                  borderRadius: 12,
                  border: "1px solid #d4d4d8",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  opacity: 0.65,
                  boxShadow: "0 10px 20px -5px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "6px 10px",
                    backgroundColor: "#f4f4f5",
                    borderBottom: "1px solid #e4e4e7",
                  }}
                >
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#f87171" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#fbbf24" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#4ade80" }} />
                </div>
                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                  {img3 && (
                    <img
                      src={img3}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>

              {/* Center Browser (Rendered last in DOM to stay on top) */}
              <div
                style={{
                  width: 560,
                  height: 350,
                  backgroundColor: "#ffffff",
                  borderRadius: 12,
                  border: "1px solid #d4d4d8",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.22)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "6px 10px",
                    backgroundColor: "#f4f4f5",
                    borderBottom: "1px solid #e4e4e7",
                  }}
                >
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#f87171" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#fbbf24" }} />
                  <div style={{ width: 7, height: 7, borderRadius: 99, backgroundColor: "#4ade80" }} />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 12,
                      backgroundColor: "#ffffff",
                      borderRadius: 4,
                      padding: "2px 14px",
                      fontSize: 9,
                      color: "#a1a1aa",
                      border: "1px solid #e4e4e7",
                    }}
                  >
                    {project.title.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>
                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                  {img2 && (
                    <img
                      src={img2}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Title Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#171717",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </span>
            <span style={{ fontSize: 14, color: "#737373", maxWidth: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {project.overview.split(".")[0]}
            </span>
          </div>

          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#a3a3a3",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {project.role} · {project.year}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
