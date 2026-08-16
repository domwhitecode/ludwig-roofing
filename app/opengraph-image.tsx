import { ImageResponse } from "next/og";

export const alt =
  "Ludwig's Roofing & Exteriors — Philadelphia's trusted roofing contractor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#ffffff",
          backgroundColor: "#1d4ed8",
          backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#bfdbfe",
          }}
        >
          Philadelphia, PA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            Ludwig&apos;s Roofing &amp; Exteriors
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#dbeafe" }}>
            Roofing · Siding · Exterior Painting · Custom Metal · Gutters
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 30,
            color: "#eff6ff",
          }}
        >
          <div style={{ display: "flex" }}>
            Licensed &amp; Insured · Free Estimates
          </div>
          <div style={{ display: "flex", fontWeight: 700 }}>267-328-0819</div>
        </div>
      </div>
    ),
    size,
  );
}
