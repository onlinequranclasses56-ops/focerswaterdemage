import { ImageResponse } from "next/og";

export const alt =
  "Force1 Restoration — 24/7 Water Damage, Mold, Storm & Fire Restoration in DeBary & Orange City, FL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#1B4E8C",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top row — trust badges */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#EA580C",
            color: "#fff",
            fontSize: "18px",
            fontWeight: 700,
            padding: "8px 20px",
            borderRadius: "6px",
          }}
        >
          IICRC Certified
        </div>
        <div
          style={{
            display: "flex",
            color: "#93b8e0",
            fontSize: "18px",
          }}
        >
          Fully Licensed &amp; Insured
        </div>
      </div>

      {/* Center — name and services */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Force1 Restoration
        </div>
        <div
          style={{
            display: "flex",
            color: "#93b8e0",
            fontSize: "30px",
            fontWeight: 500,
          }}
        >
          24/7 Water Damage · Mold · Storm · Fire Restoration
        </div>
        <div
          style={{
            display: "flex",
            color: "#c8ddf5",
            fontSize: "24px",
          }}
        >
          DeBary &amp; Orange City, FL — Volusia County
        </div>
      </div>

      {/* Bottom row — phone CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#EA580C",
            padding: "18px 36px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#fff",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            (864) 734-5702
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "4px",
          }}
        >
          <div style={{ display: "flex", color: "#93b8e0", fontSize: "20px" }}>
            Emergency response available
          </div>
          <div style={{ display: "flex", color: "#93b8e0", fontSize: "20px" }}>
            24 hours · 7 days · 365 days
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
