"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import {
  FileText,
  PackageCheck,
  BadgeCheck,
  ClipboardList,
  ShieldCheck,
  Plane,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

/* ─── types ─── */
type CSSWithVars = CSSProperties & { [key: `--${string}`]: string };

/* ─── data ─── */
const countries = ["India", "UAE", "USA", "UK", "Singapore", "Australia", "Canada"];

const shipmentTypes = [
  "Personal Shipment",
  "Commercial Shipment",
  "Sample Shipment",
  "Pharmaceutical Shipment",
  "Manufacturing Cargo",
];

const documentRules: Record<string, string[]> = {
  "Personal Shipment": [
    "Packing List",
    "Government ID / Passport Copy",
    "Address Proof",
    "Receiver Details",
    "Declaration Letter",
  ],
  "Commercial Shipment": [
    "Commercial Invoice",
    "Packing List",
    "IEC Certificate",
    "Certificate of Origin",
    "KYC Documents",
    "Air Waybill",
  ],
  "Sample Shipment": [
    "Proforma Invoice",
    "Packing List",
    "Sample Declaration",
    "KYC Documents",
    "Air Waybill",
  ],
  "Pharmaceutical Shipment": [
    "Commercial Invoice",
    "Packing List",
    "Drug License",
    "Certificate of Analysis",
    "Product Registration Details",
    "Temperature Handling Instructions",
  ],
  "Manufacturing Cargo": [
    "Commercial Invoice",
    "Packing List",
    "HS Code Details",
    "Certificate of Origin",
    "IEC Certificate",
    "Export Declaration",
  ],
};

const commonDocuments = [
  {
    icon: FileText,
    title: "Commercial Invoice",
    desc: "Shows product value, seller, buyer, and shipment details. Required for customs valuation and duty calculation.",
    tag: "Universal",
  },
  {
    icon: PackageCheck,
    title: "Packing List",
    desc: "Lists package contents, quantity, weight, and dimensions. Used by customs for physical inspection.",
    tag: "Universal",
  },
  {
    icon: BadgeCheck,
    title: "Certificate of Origin",
    desc: "Confirms the country where goods were manufactured. Determines applicable trade duties.",
    tag: "Commercial",
  },
  {
    icon: ShieldCheck,
    title: "KYC Documents",
    desc: "Identity and business verification for customs. Required for regulatory compliance.",
    tag: "Compliance",
  },
  {
    icon: ClipboardList,
    title: "IEC Certificate",
    desc: "Import Export Code — required for most commercial exports from India.",
    tag: "India Export",
  },
  {
    icon: Plane,
    title: "Air Waybill",
    desc: "Non-negotiable transport document for air cargo. Serves as receipt and contract of carriage.",
    tag: "Air Freight",
  },
];

/* ─── component ─── */
export default function CheckDocumentsPage() {
  const [origin, setOrigin] = useState("India");
  const [destination, setDestination] = useState("UAE");
  const [shipmentType, setShipmentType] = useState("Commercial Shipment");
  const [checked, setChecked] = useState(false);
  const [activeDoc, setActiveDoc] = useState<number | null>(null);

  const requiredDocuments = useMemo(
    () => documentRules[shipmentType] || [],
    [shipmentType]
  );

  return (
    <main style={{ background: "#f5f6f8", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
   

        *, *::before, *::after { box-sizing: border-box; }

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url('https://images.unsplash.com/vector-1775377286350-d516b2b97560?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat;
          color: #fff;
          text-align: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,40,100,0.55), rgba(6,26,58,0.5) 40%, rgba(6,26,58,0.92));
        }
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 880px;
          padding: 0 1.5rem;
        }
        .hero-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          margin-bottom: 1.25rem;
        }
        .hero h1 {
        //   font-family: 'manrope', sans-serif;
          font-size:92px;
          font-weight: 500;
          line-height: 1.06;
          letter-spacing: -0.025em;
          margin: 0 0 1.25rem;
        }
        .hero p {
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.75;
          color: rgba(255,255,255,0.8);
          font-weight: 300;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── Shared layout ── */
        .page-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ── Form card ── */
        .form-wrap {
          position: relative;
          z-index: 20;
          max-width: 1100px;
          margin: -72px auto 0;
          padding: 0 1.5rem;
        }
        .form-card {
          background: #071a33;
          border-radius: 24px;
          overflow: hidden;
        //   box-shadow: 0 32px 80px rgba(7,26,51,0.35);
        }
        .form-card-top {
          padding: 2.5rem 2.5rem 0;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .form-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(200,16,46,0.15);
          border: 1px solid rgba(200,16,46,0.3);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #f87a8a;
          margin-bottom: 0.75rem;
        }
        .form-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c8102e;
        }
        .form-card-top h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
          flex: 1;
          min-width: 200px;
        }
        .form-card-top p {
          color: #6b8aaa;
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.6;
          max-width: 360px;
          margin: 0;
          padding-top: 0.4rem;
        }

        .form-body {
          padding: 2rem 2.5rem 2.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.25rem;
          align-items: end;
        }
        @media (max-width: 768px) {
          .form-body { grid-template-columns: 1fr; }
          .form-btn-col { grid-column: 1; }
        }

        .step-field {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.6rem;
        }
        .step-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c8102e;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .step-label span {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: white;
        }
        .step-select {
          height: 52px;
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 0 1rem;
          color: #fff;
          font-size: 0.95rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b8aaa' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }
        .step-select option { background: #071a33; color: #fff; }
        .step-select:focus {
          border-color: #c8102e;
          background-color: rgba(200,16,46,0.06);
        }
        .step-select:hover { border-color: rgba(255,255,255,0.2); }

        .form-btn {
          height: 52px;
          width: 100%;
          background: #c8102e;
          border: none;
          border-radius: 12px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        //   box-shadow: 0 4px 20px rgba(200,16,46,0.35);
        //   margin-top: 1.75rem;
        }
        .form-btn:hover {
          background: #a80d26;
          transform: translateY(-1px);
        //   box-shadow: 0 8px 28px rgba(200,16,46,0.4);
        }
        .form-btn:active { transform: translateY(0); }

        /* Route display inside form */
        .form-route {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 0.5rem 1rem;
          margin: 0 2.5rem 0;
          width: fit-content;
        }
        .route-city {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.04em;
        }
        .route-arrow {
          color: #c8102e;
          font-size: 0.9rem;
        }

        /* ── Results ── */
        .results-section {
          max-width: 1100px;
          margin: 2.5rem auto 0;
          padding: 0 1.5rem;
          animation: fadeUp 0.5s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .results-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e4e8ef;
        //   box-shadow: 0 8px 40px rgba(7,26,51,0.08);
        }
        .results-header {
          background: #071a33;
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .results-route {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .results-city {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.3rem, 2.5vw, 1.75rem);
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .results-arrow-icon {
          color: #c8102e;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
        .results-type-badge {
          background: rgba(200,16,46,0.12);
          border: 1px solid gray;
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          color: white;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .results-count {
          font-size: 0.8rem;
          color: #6b8aaa;
          font-weight: 400;
          padding-top: 0.25rem;
        }

        .results-body {
          padding: 2rem 2.5rem;
        }
        .doc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 0.85rem;
        }
        .doc-chip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #f7f9fc;
          border: 1px solid #e4e8ef;
          border-radius: 12px;
          padding: 1rem 1.1rem;
        //   transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .doc-chip:hover {
          border-color: #c8102e;
          background: #fff5f6;
          box-shadow: 0 4px 16px rgba(200,16,46,0.08);
        }
        .doc-chip-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #071a33;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .doc-chip-num {
          font-size: 12px;
          font-weight: 700;
          color: white;
          line-height: 1;
        }
        .doc-chip-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #071a33;
          line-height: 1.3;
        }

        .results-note {
          margin-top: 1.75rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: #f0f4ff;
          border: 1px solid #d0daee;
          border-left: 3px solid #071a33;
          border-radius: 12px;
          padding: 1rem 1.25rem;
        }
        .results-note p {
          font-size: 0.85rem;
          line-height: 1.65;
          color: #3d5273;
          margin: 0;
        }
        .results-note strong { color: #071a33; }

        /* ── Common docs ── */
        .docs-section {
          padding: 6rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .docs-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 640px) { .docs-header { grid-template-columns: 1fr; } }
        .docs-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c8102e;
          margin-bottom: 1rem;
        }
        .docs-eyebrow::before {
          content: '';
          display: block;
          width: 20px;
          height: 2px;
          background: #c8102e;
        }
        .docs-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 600;
          color: black;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin: 0;
        }
        .docs-sub {
          color: #6b7f96;
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.7;
          max-width: 320px;
          text-align: right;
        }
        @media (max-width: 640px) { .docs-sub { text-align: left; max-width: 100%; } }

        /* Staggered bento */
        .docs-bento {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto auto;
          gap: 1rem;
        }
        @media (max-width: 900px) { .docs-bento { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .docs-bento { grid-template-columns: 1fr; } }

        .doc-card {
          background: #fff;
          border: 1px solid #e4e8ef;
          border-radius: 18px;
          padding: 1.75rem;
          cursor: pointer;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .doc-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #c8102e;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .doc-card:hover { border-color: #c8102e; box-shadow: 0 8px 32px rgba(7,26,51,0.1); transform: translateY(-2px); }
        .doc-card:hover::before { transform: scaleX(1); }
        .doc-card.wide { grid-column: span 2; }
        @media (max-width: 560px) { .doc-card.wide { grid-column: span 1; } }

        .doc-card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #071a33;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: background 0.25s;
        }
        .doc-card:hover .doc-card-icon-wrap { background: #c8102e; }
        .doc-card-tag {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9aabbd;
          background: #f0f4f8;
          border-radius: 100px;
          padding: 3px 10px;
        }
        .doc-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #071a33;
          letter-spacing: -0.01em;
          margin: 0 0 0.6rem;
        }
        .doc-card p {
          font-size: 0.84rem;
          line-height: 1.65;
          color: #6b7f96;
          font-weight: 300;
          margin: 0;
        }

        /* Expanded doc panel */
        .doc-expanded {
          background: #071a33;
          border-radius: 18px;
          padding: 2rem;
          color: #fff;
          animation: fadeUp 0.3s ease;
          margin-top: 0;
        }
        .doc-expanded-tag {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #f87a8a;
          margin-bottom: 0.75rem;
        }
        .doc-expanded h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 0.75rem;
        }
        .doc-expanded p {
          font-size: 0.9rem;
          line-height: 1.75;
          color: #6b8aaa;
          font-weight: 300;
          margin: 0;
        }

        /* responsive util */
        @media (max-width: 600px) {
          .hero h1 {
            font-size: clamp(3rem, 14vw, 4.25rem);
            line-height: 1.08;
            letter-spacing: -0.02em;
          }
          .form-card-top, .form-body, .results-header, .results-body { padding-left: 1.25rem; padding-right: 1.25rem; }
          .form-route { margin-left: 1.25rem; }
        }
      `}</style>

      {/* ── HERO (kept as-is) ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Customs Documentation</span>
          <h1 className="font-[manrope]">Check Required Shipping Documents</h1>
          <p>
            Select your shipment details to instantly view the documents
            required for international shipping and customs clearance.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <div className="form-wrap">
        <div className="form-card">
          <div className="form-card-top">
            <div style={{ flex: "100%", marginBottom: "0.25rem" }}>
              <span className="form-badge">Document Checker</span>
            </div>
            <h2>What documents<br />do you need ?</h2>
            <p>
              Fill in your route and shipment type — we&apos;ll show the
              required paperwork in seconds.
            </p>
          </div>

          <div className="form-body">
            {/* Origin */}
            <div className="step-field">
              <div className="step-label">
                <span className="step-num">1</span>
                <span>Origin Country</span>
              </div>
              <select
                className="step-select"
                value={origin}
                onChange={(e) => { setOrigin(e.target.value); setChecked(false); }}
              >
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Destination */}
            <div className="step-field">
              <div className="step-label">
                <span className="step-num">2</span>
                <span>Destination Country</span>
              </div>
              <select
                className="step-select"
                value={destination}
                onChange={(e) => { setDestination(e.target.value); setChecked(false); }}
              >
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Shipment Type */}
            <div className="step-field">
              <div className="step-label">
                <span className="step-num">3</span>
                <span>Shipment Type</span>
              </div>
              <select
                className="step-select"
                value={shipmentType}
                onChange={(e) => { setShipmentType(e.target.value); setChecked(false); }}
              >
                {shipmentTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* CTA row */}
          <div style={{
            padding: "0 2.5rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}>
            {/* <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.78rem", color: "#4a6580", fontWeight: 500 }}>Route:</span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#fff" }}>{origin}</span>
              <ArrowRight size={14} color="#c8102e" />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#fff" }}>{destination}</span>
              <span style={{ fontSize: "0.78rem", color: "#4a6580", marginLeft: "0.5rem" }}>·</span>
              <span style={{ fontSize: "0.78rem", color: "#4a6580" }}>{shipmentType}</span>
            </div> */}
            <button className="form-btn" style={{ width: "auto", padding: "0 2rem" }} onClick={() => setChecked(true)}>
              Check Documents <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ── RESULTS ── */}
      {checked && (
        <div className="results-section">
          <div className="results-card">
            <div className="results-header">
              <div>
                <div className="results-route">
                  <span className="results-city">{origin}</span>
                  <ArrowRight className="results-arrow-icon" />
                  <span className="results-city">{destination}</span>
                </div>
                <p className="results-count">{requiredDocuments.length} documents required</p>
              </div>
              <span className="results-type-badge">{shipmentType}</span>
            </div>

            <div className="results-body">
              <div className="doc-grid">
                {requiredDocuments.map((doc, i) => (
                  <div className="doc-chip" key={doc}>
                    <div className="doc-chip-icon">
                      <span className="doc-chip-num">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="doc-chip-text">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="results-note">
                <CheckCircle2 size={16} color="#071a33" style={{ marginTop: 2, flexShrink: 0 }} />
                <p>
                  <strong>Note:</strong> Requirements vary by product category, shipment value, and destination
                  customs policy. Contact our logistics team for case-specific guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── COMMON DOCUMENTS ── */}
      <div className="docs-section">
        <div className="docs-header">
          <div>
            <div className="docs-eyebrow">Essential Documents</div>
            <h2>Documents Used in<br />International Shipping</h2>
          </div>
          {/* <p className="docs-sub">
            Click any document to learn more about its role in the shipping process.
          </p> */}
        </div>

        <div className="docs-bento">
          {commonDocuments.map((doc, i) => {
            const Icon = doc.icon;
            const isWide = i === 0 || i === 5;
            return (
              <div
                key={doc.title}
                className={`doc-card${isWide ? " wide" : ""}`}
                onClick={() => setActiveDoc(activeDoc === i ? null : i)}
                style={{
                  animationDelay: `${i * 60}ms`,
                  borderColor: activeDoc === i ? "#c8102e" : undefined,
                  boxShadow: activeDoc === i ? "0 8px 32px rgba(200,16,46,0.12)" : undefined,
                }}
              >
                <div className="doc-card-icon-wrap"
                  style={{ background: activeDoc === i ? "#c8102e" : undefined }}>
                  <Icon size={20} color="#fff" />
                </div>
                <span className="doc-card-tag">{doc.tag}</span>
                <h3>{doc.title}</h3>
                <p>{doc.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Expanded info panel
        {activeDoc !== null && (
          <div className="doc-expanded" style={{ marginTop: "1rem" }}>
            <div className="doc-expanded-tag">{commonDocuments[activeDoc].tag}</div>
            <h3>{commonDocuments[activeDoc].title}</h3>
            <p>{commonDocuments[activeDoc].desc}</p>
          </div>
        )} */}
      </div>
    </main>
  );
}
