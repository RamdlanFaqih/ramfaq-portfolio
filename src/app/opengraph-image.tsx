import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const runtime = "nodejs";

export const alt = "Ramdlan Faqih — Mobile & Web Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadAvatar(): Promise<string | null> {
  try {
    const fullPath = path.join(process.cwd(), "public/images/ramfaq-rounded.png");
    const fileBuffer = await fs.readFile(fullPath);
    const pngBuffer = await sharp(fileBuffer)
      .resize({ width: 280, height: 280 })
      .png({ quality: 90 })
      .toBuffer();
    return `data:image/png;base64,${pngBuffer.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const avatarData = await loadAvatar();

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "50px 60px",
          boxSizing: "border-box",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 99,
                backgroundColor: "#171717",
              }}
            />
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#171717",
                letterSpacing: "-0.02em",
              }}
            >
              ramfaq.vercel.app
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#f5f5f5",
              border: "1px solid #e5e5e5",
              padding: "6px 14px",
              borderRadius: 999,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                backgroundColor: "#22c55e",
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#404040" }}>
              Open for collaboration
            </span>
          </div>
        </div>

        {/* Center Hero Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            backgroundColor: "#f5f5f7",
            borderRadius: 24,
            border: "1.5px solid #e5e5e7",
            padding: "36px 44px",
          }}
        >
          {avatarData && (
            <img
              src={avatarData}
              style={{
                width: 140,
                height: 140,
                borderRadius: 999,
                border: "3px solid #ffffff",
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
            />
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: "#171717",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Ramdlan Faqih
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 500,
                color: "#525252",
              }}
            >
              Mobile & Web Engineer · Your friendly co-worker 🤘🏻
            </span>
            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              {[
                "Flutter",
                "React Native",
                "Next.js",
                "TypeScript",
                "iOS & Android",
              ].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#525252",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e5e5",
                    padding: "4px 12px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: 15, color: "#737373" }}>
            Showcasing high-performance mobile & web engineering projects
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#a3a3a3",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Portfolio 2026
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
