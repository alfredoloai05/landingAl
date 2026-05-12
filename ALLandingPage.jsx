// AL Soluciones Tecnológicas - Landing Page
// Full React component - compatible with React/Vite or Next.js
// Uses: Tailwind CSS, lucide-react, framer-motion (optional inline CSS animations)

import React, { useState, useEffect, useRef } from "react";
import {
  Globe, Code2, Zap, Plug, Layout, LifeBuoy,
  ArrowRight, MessageCircle, Github, Linkedin, Instagram,
  ChevronRight, CheckCircle, Menu, X
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre AL", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

// ─── CSS-in-JS keyframes injected once ───────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #06111F;
    --deep:     #062B5F;
    --blue:     #0A84FF;
    --cyan:     #18D6FF;
    --white:    #F5F9FF;
    --gray:     #6B7A90;
    --card-bg:  rgba(255,255,255,0.04);
    --card-bd:  rgba(255,255,255,0.08);
  }

  html { scroll-behavior: smooth; }
  section { scroll-margin-top: 86px; }

  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(24,214,255,0.55) rgba(6,17,31,0.95);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(6,17,31,0.96);
    border-left: 1px solid rgba(255,255,255,0.04);
  }

  ::-webkit-scrollbar-thumb {
    background:
      linear-gradient(180deg, rgba(10,132,255,0.95), rgba(24,214,255,0.82));
    border: 2px solid rgba(6,17,31,0.96);
    border-radius: 999px;
    box-shadow: 0 0 16px rgba(24,214,255,0.32);
  }

  ::-webkit-scrollbar-thumb:hover {
    background:
      linear-gradient(180deg, rgba(24,214,255,1), rgba(10,132,255,0.95));
  }

  body {
    background: var(--bg);
    color: var(--white);
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Sora', sans-serif;
  }

  /* ── Particles canvas background ── */
  #particles-canvas {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.35;
  }

  /* ── Navbar ── */
  .navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 clamp(1.5rem, 5vw, 5rem);
    height: 68px;
    background: rgba(6,17,31,0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--card-bd);
    transition: background 0.3s;
  }

  .logo-mark {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 42px;
    height: 34px;
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: 1.45rem;
    color: #fff;
    background: none;
    border: 0;
    box-shadow: none;
    letter-spacing: 0;
    user-select: none;
    overflow: visible;
    text-decoration: none;
  }

  .logo-mark::before {
    content: '';
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 0;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--blue), var(--cyan));
    box-shadow: 0 0 12px rgba(24,214,255,0.5);
  }

  .logo-mark::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--cyan);
    box-shadow: 0 0 10px var(--cyan);
  }

  .logo-mark span {
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #ffffff 20%, var(--cyan) 92%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 18px rgba(24,214,255,0.22);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 34px;
    color: var(--gray);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.2s, background 0.2s;
    letter-spacing: 0;
    padding: 0 0.15rem;
  }

  .nav-links a:hover { color: var(--white); }

  .nav-links a::after,
  .mobile-menu a::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--blue), var(--cyan));
    opacity: 0;
    transform: scaleX(0.5);
    transition: opacity 0.2s, transform 0.2s;
  }

  .nav-links a.active,
  .mobile-menu a.active {
    color: var(--white);
  }

  .nav-links a.active::after,
  .mobile-menu a.active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.55rem 1.3rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-family: 'Sora', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: box-shadow 0.25s, transform 0.2s, background 0.2s;
    white-space: nowrap;
  }

  .btn-primary svg,
  .btn-secondary svg {
    transition: transform 0.2s;
  }

  .btn-primary.nav-cta {
    background: linear-gradient(135deg, var(--blue), #0db7ff);
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 10px 24px rgba(10,132,255,0.18);
  }

  .btn-primary:hover {
    background: #1a8fff;
    box-shadow: 0 0 20px rgba(10,132,255,0.5), 0 0 40px rgba(24,214,255,0.15);
    transform: translateY(-1px);
  }

  .btn-primary:hover svg,
  .btn-secondary:hover svg {
    transform: translateX(3px);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.55rem 1.3rem;
    background: transparent;
    color: var(--white);
    border: 1px solid var(--card-bd);
    border-radius: 8px;
    font-family: 'Sora', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
    white-space: nowrap;
  }

  .btn-secondary:hover {
    border-color: rgba(24,214,255,0.5);
    box-shadow: 0 0 16px rgba(24,214,255,0.1);
    transform: translateY(-1px);
  }

  /* ── Sections ── */
  section { position: relative; z-index: 1; }

  /* ── Hero ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 100px clamp(1.5rem, 5vw, 5rem) 60px;
    overflow: hidden;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: var(--cyan);
    text-transform: uppercase;
    margin-bottom: 1.25rem;
  }

  .hero-eyebrow::before {
    content: '';
    width: 20px;
    height: 1px;
    background: var(--cyan);
    flex-shrink: 0;
  }

  .hero-title {
    font-size: clamp(2.4rem, 5vw, 3.75rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  .gradient-text {
    background: linear-gradient(90deg, var(--blue), var(--cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    color: var(--gray);
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 2.5rem;
  }

  .hero-btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 3.5rem;
  }

  .tech-strip {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .tech-label {
    font-size: 0.7rem;
    color: var(--gray);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    white-space: nowrap;
  }

  .tech-tag {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--gray);
    padding: 0.3rem 0.75rem;
    border: 1px solid var(--card-bd);
    border-radius: 6px;
    background: var(--card-bg);
    transition: color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .tech-tag:hover {
    color: var(--cyan);
    border-color: rgba(24,214,255,0.3);
    box-shadow: 0 0 16px rgba(24,214,255,0.12);
    transform: translateY(-2px);
  }

  /* ── Hero Visual ── */
  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 480px;
  }

  .logo-3d-wrap {
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
  }

  .logo-glow-ring {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    border: 1px solid rgba(10,132,255,0.2);
    animation: pulse-ring 3s ease-in-out infinite;
  }

  .logo-glow-ring-2 {
    position: absolute;
    inset: -50px;
    border-radius: 50%;
    border: 1px solid rgba(24,214,255,0.1);
    animation: pulse-ring 3s ease-in-out infinite 1s;
  }

  .logo-glow-ring-3 {
    position: absolute;
    inset: -90px;
    border-radius: 50%;
    border: 1px solid rgba(10,132,255,0.06);
    animation: pulse-ring 3s ease-in-out infinite 2s;
  }

  @keyframes pulse-ring {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.03); }
  }

  .logo-core {
    position: relative;
    z-index: 2;
    width: 160px;
    height: 160px;
    border-radius: 28px;
    background: linear-gradient(145deg, rgba(10,132,255,0.15), rgba(24,214,255,0.08));
    border: 1px solid rgba(10,132,255,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      0 0 60px rgba(10,132,255,0.25),
      0 0 120px rgba(24,214,255,0.08),
      inset 0 1px 0 rgba(255,255,255,0.1);
    animation: float 4s ease-in-out infinite;
    transform-style: preserve-3d;
    isolation: isolate;
  }

  .logo-core::before {
    content: '';
    position: absolute;
    inset: 12px;
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,0.12);
    background:
      linear-gradient(90deg, transparent 48%, rgba(24,214,255,0.16) 49%, transparent 51%),
      linear-gradient(0deg, transparent 48%, rgba(10,132,255,0.14) 49%, transparent 51%);
    z-index: 0;
  }

  .logo-core::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 30px;
    background: linear-gradient(135deg, rgba(255,255,255,0.16), transparent 38%, rgba(24,214,255,0.18));
    pointer-events: none;
    mix-blend-mode: screen;
    z-index: 1;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .logo-text-3d {
    position: relative;
    z-index: 3;
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: 4.35rem;
    line-height: 1;
    color: #f7fbff;
    -webkit-text-fill-color: #f7fbff;
    letter-spacing: -0.05em;
    filter: drop-shadow(0 12px 20px rgba(0,0,0,0.62)) drop-shadow(0 0 26px rgba(24,214,255,0.9));
    transform: perspective(260px) rotateX(8deg) rotateY(-10deg);
    text-shadow:
      0 0 4px rgba(255,255,255,0.8),
      0 0 24px rgba(24,214,255,0.85),
      0 2px 0 rgba(10,132,255,0.55);
  }

  .platform-base {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    height: 12px;
    background: linear-gradient(90deg, transparent, rgba(10,132,255,0.6), rgba(24,214,255,0.8), rgba(10,132,255,0.6), transparent);
    border-radius: 50%;
    filter: blur(6px);
    animation: glow-line 2s ease-in-out infinite alternate;
  }

  @keyframes glow-line {
    from { opacity: 0.6; width: 200px; }
    to   { opacity: 1;   width: 260px; }
  }

  .orbit-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--cyan);
    box-shadow: 0 0 10px var(--cyan);
  }

  .orbit-path {
    position: absolute;
    border-radius: 50%;
    border: 1px dashed rgba(24,214,255,0.15);
  }

  .orbit-1 { width: 220px; height: 220px; animation: orbit-spin 6s linear infinite; }
  .orbit-2 { width: 320px; height: 320px; animation: orbit-spin 10s linear infinite reverse; }

  @keyframes orbit-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .orbit-dot-1 {
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--blue);
    box-shadow: 0 0 10px var(--blue);
  }

  .orbit-dot-2 {
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--cyan);
    box-shadow: 0 0 10px var(--cyan);
    width: 4px;
    height: 4px;
  }

  .corner-tag {
    position: absolute;
    background: rgba(6,17,31,0.8);
    border: 1px solid var(--card-bd);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--white);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    white-space: nowrap;
    min-width: 190px;
    justify-content: center;
    box-shadow: 0 12px 30px rgba(0,0,0,0.24);
    opacity: 0;
    transform: translateY(8px) scale(0.95);
    transition: opacity 0.35s, transform 0.35s, border-color 0.35s, box-shadow 0.35s;
    pointer-events: none;
  }

  .corner-tag.active {
    opacity: 1;
    transform: translateY(0) scale(1);
    animation: tag-pop 2.8s ease-in-out infinite;
  }

  .tag-slot-1 { top: 7%; right: -4%; }
  .tag-slot-2 { top: 32%; left: -8%; }
  .tag-slot-3 { bottom: 20%; left: 0; }
  .tag-slot-4 { bottom: 7%; right: 4%; }
  .tag-slot-5 { top: 54%; right: -12%; }

  .tag-slot-2.active,
  .tag-slot-4.active {
    animation-delay: 0.7s;
  }

  @keyframes tag-pop {
    0%, 100% { transform: translateY(0) scale(1); border-color: var(--card-bd); }
    45% { transform: translateY(-4px) scale(1.02); border-color: rgba(24,214,255,0.36); box-shadow: 0 16px 34px rgba(10,132,255,0.18); }
  }

  .corner-tag .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 6px #22c55e;
    animation: blink 2s ease-in-out infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* ── Section common ── */
  .section-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 5vw, 5rem);
  }

  .section-eyebrow {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: var(--cyan);
    text-transform: uppercase;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .section-eyebrow::before {
    content: '';
    width: 16px;
    height: 1px;
    background: var(--cyan);
  }

  .section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 1rem;
    color: var(--white);
  }

  .section-sub {
    color: var(--gray);
    font-size: 1rem;
    line-height: 1.7;
    max-width: 540px;
    margin-bottom: 3.5rem;
  }

  /* ── Services ── */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.25rem;
  }

  .service-card {
    position: relative;
    overflow: hidden;
    background: var(--card-bg);
    border: 1px solid var(--card-bd);
    border-radius: 16px;
    padding: 2rem;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    cursor: default;
  }

  .service-card::before,
  .project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 0%, rgba(24,214,255,0.13), transparent 34%),
      linear-gradient(120deg, transparent 28%, rgba(255,255,255,0.07), transparent 46%);
    opacity: 0;
    transform: translateX(-18%);
    transition: opacity 0.35s, transform 0.55s;
    pointer-events: none;
  }

  .service-card:hover {
    transform: translateY(-6px);
    border-color: rgba(10,132,255,0.3);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(10,132,255,0.08);
  }

  .service-card:hover::before,
  .project-card:hover::before {
    opacity: 1;
    transform: translateX(0);
  }

  .service-card:hover .service-icon-wrap {
    transform: translateY(-2px) rotate(-3deg);
    box-shadow: 0 0 24px rgba(24,214,255,0.18);
  }

  .service-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(10,132,255,0.15), rgba(24,214,255,0.08));
    border: 1px solid rgba(10,132,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    color: var(--cyan);
    transition: transform 0.25s, box-shadow 0.25s;
  }

  .service-title {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    color: var(--white);
  }

  .service-desc {
    font-size: 0.875rem;
    color: var(--gray);
    line-height: 1.65;
  }

  /* ── Projects ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    position: relative;
    background: var(--card-bg);
    border: 1px solid var(--card-bd);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: default;
  }

  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 0 40px rgba(10,132,255,0.08);
  }

  .project-mockup {
    height: 200px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.35s;
  }

  .project-card:hover .project-mockup {
    transform: scale(1.025);
  }

  .project-body {
    position: relative;
    z-index: 1;
    padding: 1.5rem;
  }

  .project-cat {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--cyan);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .project-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--white);
  }

  .project-desc {
    font-size: 0.85rem;
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .project-result {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--cyan);
    background: rgba(24,214,255,0.08);
    border: 1px solid rgba(24,214,255,0.15);
    border-radius: 20px;
    padding: 0.3rem 0.75rem;
  }

  /* ── Process ── */
  .process-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    position: relative;
  }

  .process-track {
    position: absolute;
    top: 28px;
    left: calc(12.5% + 58px);
    right: calc(12.5% + 58px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 118px;
    height: 2px;
    z-index: 1;
    pointer-events: none;
  }

  .process-segment {
    position: relative;
    height: 2px;
    border-radius: 999px;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(10,132,255,0.18), rgba(24,214,255,0.28));
  }

  .process-segment::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(24,214,255,0.28), transparent);
    opacity: 0.45;
  }

  .process-fill {
    position: absolute;
    inset: 0;
    transform-origin: left center;
    transform: scaleX(0);
    border-radius: inherit;
    background: linear-gradient(90deg, var(--blue), var(--cyan), #ffffff);
    box-shadow: 0 0 18px rgba(24,214,255,0.8), 0 0 34px rgba(10,132,255,0.36);
    animation: process-segment-fill 8.4s ease-in-out infinite;
    animation-delay: var(--segment-delay);
  }

  .process-step {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0 1rem;
  }

  .process-num-wrap {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(10,132,255,0.2), rgba(24,214,255,0.1));
    border: 1px solid rgba(10,132,255,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--cyan);
    box-shadow: 0 0 20px rgba(10,132,255,0.15);
    animation: process-step-glow 8.4s ease-in-out infinite;
    animation-delay: var(--step-delay);
    position: relative;
    z-index: 3;
  }

  .process-step-num {
    font-family: 'Sora', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--blue);
    letter-spacing: 0.08em;
    margin-bottom: 0.35rem;
    text-transform: uppercase;
    animation: process-text-glow 8.4s ease-in-out infinite;
    animation-delay: var(--step-delay);
  }

  .process-step-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
    animation: process-title-glow 8.4s ease-in-out infinite;
    animation-delay: var(--step-delay);
  }

  @keyframes process-step-glow {
    0%, 27%, 100% {
      transform: translateY(0) scale(1);
      background: linear-gradient(135deg, rgba(10,132,255,0.2), rgba(24,214,255,0.1));
      border-color: rgba(10,132,255,0.3);
      box-shadow: 0 0 20px rgba(10,132,255,0.15);
      color: var(--cyan);
    }
    14% {
      transform: translateY(-5px) scale(1.09);
      background: linear-gradient(135deg, rgba(10,132,255,0.55), rgba(24,214,255,0.32));
      border-color: rgba(24,214,255,0.88);
      box-shadow: 0 0 26px rgba(24,214,255,0.72), 0 0 60px rgba(10,132,255,0.28);
      color: #fff;
    }
  }

  @keyframes process-text-glow {
    0%, 27%, 100% { color: var(--blue); text-shadow: none; }
    14% { color: var(--cyan); text-shadow: 0 0 14px rgba(24,214,255,0.8); }
  }

  @keyframes process-title-glow {
    0%, 27%, 100% { color: var(--white); text-shadow: none; }
    14% { color: #fff; text-shadow: 0 0 16px rgba(24,214,255,0.55); }
  }

  @keyframes process-segment-fill {
    0%, 5% { transform: scaleX(0); opacity: 0; }
    10% { opacity: 1; }
    28%, 42% { transform: scaleX(1); opacity: 1; }
    54%, 100% { transform: scaleX(1); opacity: 0.14; }
  }

  .process-step-desc {
    font-size: 0.825rem;
    color: var(--gray);
    line-height: 1.6;
  }

  /* ── About ── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .about-points {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    margin-top: 2rem;
  }

  .about-points li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: var(--gray);
  }

  .about-points li svg {
    color: var(--cyan);
    flex-shrink: 0;
  }

  .about-visual {
    position: relative;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wave-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }

  /* ── CTA ── */
  .cta-section {
    padding: 120px 0;
    position: relative;
    overflow: hidden;
  }

  .cta-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(10,132,255,0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  .cta-inner {
    text-align: center;
    position: relative;
    z-index: 1;
    max-width: 720px;
    margin: 0 auto;
  }

  .cta-title {
    font-size: clamp(2rem, 4.5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 1rem;
    color: var(--white);
  }

  .cta-sub {
    color: var(--gray);
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 500px;
    margin: 0 auto 2.5rem;
  }

  .cta-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    flex-wrap: wrap;
  }

  .cta-divider {
    color: var(--gray);
    font-size: 0.85rem;
  }

  /* ── Footer ── */
  .footer {
    border-top: 1px solid var(--card-bd);
    padding: 2.5rem clamp(1.5rem, 5vw, 5rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .footer-left {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .footer-tagline {
    font-size: 0.75rem;
    color: var(--gray);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .footer-links {
    display: flex;
    gap: 1.75rem;
    list-style: none;
    flex-wrap: wrap;
  }

  .footer-links a {
    color: var(--gray);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.2s;
  }

  .footer-links a:hover { color: var(--white); }

  .footer-social {
    display: flex;
    gap: 1rem;
  }

  .footer-social a {
    color: var(--gray);
    transition: color 0.2s;
    display: flex;
  }

  .footer-social a:hover { color: var(--cyan); }

  .footer-copy {
    font-size: 0.75rem;
    color: var(--gray);
  }

  /* ── Divider ── */
  .section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--card-bd), transparent);
    margin: 0 clamp(1.5rem, 5vw, 5rem);
  }

  /* ── Mobile menu ── */
  .mobile-menu {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 68px; left: 0; right: 0;
    background: rgba(6,17,31,0.97);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--card-bd);
    padding: 1.5rem clamp(1.5rem, 5vw, 3rem);
    gap: 1.25rem;
    z-index: 99;
  }

  .mobile-menu.open { display: flex; }

  .mobile-menu a {
    position: relative;
    color: var(--gray);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--card-bd);
  }

  .mobile-menu a:last-child { border-bottom: none; }

  /* ── Fade-in animations ── */
  .fade-up {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-visual { height: 340px; }
    .about-grid { grid-template-columns: 1fr; }
    .about-visual { height: 280px; }
    .process-row { grid-template-columns: 1fr 1fr; }
    .process-track { display: none; }
    .nav-links, .navbar > .btn-primary { display: none; }
    .mobile-toggle { display: flex; }
    .footer { flex-direction: column; align-items: flex-start; }
    .tag-slot-1 { top: 5%; right: 4%; }
    .tag-slot-2 { top: 25%; left: 2%; }
    .tag-slot-3 { bottom: 22%; left: 2%; }
    .tag-slot-4 { bottom: 8%; right: 7%; }
    .tag-slot-5 { top: 48%; right: 1%; }
  }

  @media (min-width: 900px) {
    .mobile-toggle { display: none !important; }
  }

  @media (max-width: 600px) {
    .services-grid { grid-template-columns: 1fr; }
    .projects-grid { grid-template-columns: 1fr; }
    .process-row { grid-template-columns: 1fr; }
    .hero-btns { flex-direction: column; }
  }
`;

// ─── Particle Canvas ──────────────────────────────────────────────────────────
function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      bit: Math.random() > 0.5 ? "1" : "0",
      size: Math.random() * 5 + 8,
      alpha: Math.random() * 0.32 + 0.12,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        if (Math.random() < 0.003) p.bit = p.bit === "1" ? "0" : "1";
        ctx.font = `${p.size}px "Sora", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `rgba(24,214,255,${p.alpha})`;
        ctx.fillText(p.bit, p.x, p.y);
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      // grid overlay
      ctx.strokeStyle = "rgba(10,132,255,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas id="particles-canvas" ref={canvasRef} />;
}

// ─── Fade-up hook ─────────────────────────────────────────────────────────────
function useFadeUp(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

function useActiveSection(items) {
  const [active, setActive] = useState(items[0].href);

  useEffect(() => {
    const sections = items
      .map(item => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -56% 0px", threshold: [0.08, 0.2, 0.45] }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return active;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS);

  return (
    <>
      <nav className="navbar">
        <a className="logo-mark" href="#inicio" aria-label="AL Soluciones Tecnológicas">
          <span>AL</span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a className={active === item.href ? "active" : ""} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn-primary nav-cta" style={{ display: "flex" }}>
          Cotizar proyecto <ChevronRight size={14} />
        </a>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(o => !o)}
          style={{ background: "none", border: "none", color: "var(--white)", cursor: "pointer" }}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            className={active === item.href ? "active" : ""}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#contacto" className="btn-primary nav-cta" onClick={() => setOpen(false)}>
          Cotizar proyecto
        </a>
      </div>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useFadeUp(0.05);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const techs = ["Next.js", "React", "TypeScript", "Node.js", "APIs", "PostgreSQL"];
  const heroTags = [
    { icon: <div className="dot" />, text: "Disponible para proyectos" },
    { icon: <Plug size={12} style={{ color: "var(--cyan)" }} />, text: "APIs e integraciones" },
    { icon: <Zap size={12} style={{ color: "var(--cyan)" }} />, text: "Automatizaciones reales" },
    { icon: <Globe size={12} style={{ color: "var(--cyan)" }} />, text: "Web apps completas" },
    { icon: <Code2 size={12} style={{ color: "var(--cyan)" }} />, text: "Código limpio y escalable" },
    { icon: <Layout size={12} style={{ color: "var(--cyan)" }} />, text: "Frontend cuidado" },
    { icon: <LifeBuoy size={12} style={{ color: "var(--cyan)" }} />, text: "Backend mantenible" },
    { icon: <CheckCircle size={12} style={{ color: "var(--cyan)" }} />, text: "Full stack de punta a punta" },
  ];
  const visiblePatterns = [
    [0, 2, 4],
    [1, 3],
    [0],
    [2, 3, 4],
    [1, 4],
    [0, 1, 3],
  ];
  const visibleSlots = visiblePatterns[highlightIndex % visiblePatterns.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHighlightIndex(index => index + 1);
    }, 1700);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-grid">
        {/* Left */}
        <div ref={ref} className="fade-up">
          <span className="hero-eyebrow">Soluciones Tecnológicas</span>
          <h1 className="hero-title">
            Tecnología que convierte ideas en{" "}
            <span className="gradient-text">soluciones reales.</span>
          </h1>
          <p className="hero-sub">
            Somos desarrolladores full stack: convertimos ideas, procesos y herramientas en productos digitales sólidos, medibles y listos para crecer.
          </p>
          <div className="hero-btns">
            <a href="#contacto" className="btn-primary">Cotizar mi proyecto <ArrowRight size={15} /></a>
            <a href="#proyectos" className="btn-secondary">Ver proyectos</a>
          </div>
          <div className="tech-strip">
            <span className="tech-label">Stack</span>
            {techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>
        </div>

        {/* Right — Logo visual */}
        <div className="hero-visual">
          <div className="logo-3d-wrap">
            <div className="logo-glow-ring-3" />
            <div className="logo-glow-ring-2" />
            <div className="logo-glow-ring" />

            {/* Orbits */}
            <div className="orbit-path orbit-1" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <div className="orbit-dot orbit-dot-1" />
            </div>
            <div className="orbit-path orbit-2" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <div className="orbit-dot orbit-dot-2" />
            </div>

            <div className="logo-core">
              <span className="logo-text-3d">AL</span>
            </div>
          </div>

          <div className="platform-base" />

          {/* Floating tags */}
          {[0, 1, 2, 3, 4].map(slot => {
            const tag = heroTags[(highlightIndex + slot) % heroTags.length];
            const active = visibleSlots.includes(slot);
            return (
              <div key={slot} className={`corner-tag tag-slot-${slot + 1} ${active ? "active" : ""}`}>
                {tag.icon}
                {tag.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function Services() {
  const ref = useFadeUp();
  const items = [
    { icon: <Globe size={22} />, title: "Desarrollo Web", desc: "Sitios web modernos, rápidos, responsivos y optimizados para convertir." },
    { icon: <Code2 size={22} />, title: "Aplicaciones a Medida", desc: "Software personalizado para resolver necesidades específicas de tu negocio." },
    { icon: <Zap size={22} />, title: "Automatizaciones", desc: "Flujos inteligentes que ahorran tiempo y reducen tareas repetitivas." },
    { icon: <Plug size={22} />, title: "Integraciones", desc: "Conexión entre herramientas, APIs, sistemas internos y plataformas digitales." },
    { icon: <Layout size={22} />, title: "UI/UX & Prototipos", desc: "Diseños claros, funcionales y centrados en la experiencia del usuario." },
    { icon: <LifeBuoy size={22} />, title: "Soporte y Escalabilidad", desc: "Mejoras, mantenimiento y evolución continua de tus soluciones digitales." },
  ];

  return (
    <section id="servicios" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">Soluciones completas<br />para tu negocio</h2>
          <p className="section-sub">Desde la idea hasta la implementación, te acompañamos en cada etapa del proceso.</p>
        </div>
        <div className="services-grid">
          {items.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, delay }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up service-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="service-icon-wrap">{icon}</div>
      <div className="service-title">{title}</div>
      <p className="service-desc">{desc}</p>
    </div>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────
function Projects() {
  const ref = useFadeUp();
  const projects = [
    {
      cat: "Dashboard & Analytics",
      title: "Panel Administrativo Empresarial",
      desc: "Sistema centralizado de gestión con visualización de métricas, reportes en tiempo real y control de operaciones.",
      result: "+60% eficiencia operativa",
      colors: ["#0A84FF", "#062B5F", "#18D6FF"],
      icon: "dashboard",
    },
    {
      cat: "Marketing Digital",
      title: "Landing Page de Alta Conversión",
      desc: "Página de captación optimizada para SEO, velocidad de carga y experiencia de usuario orientada a resultados.",
      result: "+40% más consultas",
      colors: ["#18D6FF", "#0A84FF", "#06111F"],
      icon: "landing",
    },
    {
      cat: "Gestión Interna",
      title: "Sistema de Reservas y Gestión",
      desc: "Plataforma personalizada para gestión de citas, inventario y seguimiento de clientes con notificaciones automáticas.",
      result: "Procesos 3x más rápidos",
      colors: ["#062B5F", "#0A84FF", "#18D6FF"],
      icon: "system",
    },
  ];

  return (
    <section id="proyectos" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Proyectos</span>
          <h2 className="section-title">Resultados que<br />hablan por sí solos</h2>
          <p className="section-sub">Casos de uso que demuestran el impacto de soluciones bien construidas.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} {...p} delay={i * 80} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ cat, title, desc, result, colors, icon, delay }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up project-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="project-mockup">
        <ProjectMockup colors={colors} icon={icon} />
      </div>
      <div className="project-body">
        <div className="project-cat">{cat}</div>
        <div className="project-title">{title}</div>
        <p className="project-desc">{desc}</p>
        <span className="project-result">
          <CheckCircle size={11} /> {result}
        </span>
      </div>
    </div>
  );
}

function ProjectMockup({ colors, icon }) {
  if (icon === "dashboard") {
    return (
      <svg viewBox="0 0 380 200" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id="dbg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors[1]} />
            <stop offset="100%" stopColor={colors[0]} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="380" height="200" fill="url(#dbg)" />
        {/* Bar chart */}
        {[40,70,55,90,65,80,45].map((h, i) => (
          <rect key={i} x={28 + i * 40} y={160 - h} width={22} height={h}
            fill={i === 3 ? colors[2] : colors[0]} rx="3" opacity="0.8" />
        ))}
        {/* Line */}
        <polyline points="20,120 80,90 140,100 200,70 260,80 320,50 360,60"
          fill="none" stroke={colors[2]} strokeWidth="2" opacity="0.7" />
        {/* Dots */}
        {[[20,120],[80,90],[200,70],[320,50]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="4" fill={colors[2]} opacity="0.9" />
        ))}
        {/* Cards */}
        {[0,1,2].map(i => (
          <rect key={i} x={20 + i * 110} y="8" width="95" height="28" rx="6"
            fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}
        <rect x="0" y="0" width="380" height="200" fill="rgba(6,17,31,0.2)" />
      </svg>
    );
  }
  if (icon === "landing") {
    return (
      <svg viewBox="0 0 380 200" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id="lbg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors[1]} />
            <stop offset="100%" stopColor={colors[0]} stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="lglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="380" height="200" fill="url(#lbg)" />
        <ellipse cx="190" cy="100" rx="140" ry="80" fill="url(#lglow)" />
        <rect x="100" y="60" width="180" height="12" rx="4" fill="rgba(255,255,255,0.7)" />
        <rect x="130" y="82" width="120" height="8" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="140" y="98" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="148" y="118" width="84" height="26" rx="8" fill={colors[0]} opacity="0.9" />
        <rect x="0" y="0" width="380" height="200" fill="rgba(6,17,31,0.15)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 380 200" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="380" height="200" fill="url(#sbg)" />
      {/* Table rows */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="20" y={30 + i * 30} width="340" height="22" rx="4"
          fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {/* Side nav */}
      <rect x="20" y="12" width="60" height="160" rx="8" fill="rgba(0,0,0,0.2)" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="28" y={22 + i * 28} width="44" height="12" rx="4"
          fill={i === 1 ? colors[2] : "rgba(255,255,255,0.1)"} opacity="0.8" />
      ))}
      <rect x="0" y="0" width="380" height="200" fill="rgba(6,17,31,0.2)" />
    </svg>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
function Process() {
  const ref = useFadeUp();
  const steps = [
    { n: "01", icon: <Globe size={22} />, title: "Descubrimiento", desc: "Entendemos tu negocio, objetivos y necesidades." },
    { n: "02", icon: <Layout size={22} />, title: "Planificación", desc: "Definimos estrategia, funcionalidades y estructura." },
    { n: "03", icon: <Code2 size={22} />, title: "Desarrollo", desc: "Creamos una solución moderna, eficiente y escalable." },
    { n: "04", icon: <LifeBuoy size={22} />, title: "Entrega y Soporte", desc: "Lanzamos, medimos y seguimos mejorando." },
  ];

  return (
    <section id="proceso" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Proceso</span>
          <h2 className="section-title">Un proceso claro.<br />Resultados excepcionales.</h2>
        </div>
        <div className="process-row">
          <div className="process-track" aria-hidden="true">
            {[0, 1, 2].map(i => (
              <span key={i} className="process-segment">
                <span className="process-fill" style={{ "--segment-delay": `${0.75 + i * 2.1}s` }} />
              </span>
            ))}
          </div>
          {steps.map((s, i) => (
            <ProcessStep
              key={s.title}
              {...s}
              delay={i * 100}
              stepDelay={i * 2.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ n, icon, title, desc, delay, stepDelay }) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className="fade-up process-step"
      style={{ transitionDelay: `${delay}ms`, "--step-delay": `${stepDelay}s` }}
    >
      <div className="process-num-wrap">{icon}</div>
      <div className="process-step-num">{n}</div>
      <div className="process-step-title">{title}</div>
      <p className="process-step-desc">{desc}</p>
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  const ref = useFadeUp();
  const points = [
    "Desarrollo moderno y escalable",
    "Comunicación clara durante todo el proceso",
    "Enfoque en resultados de negocio",
    "Diseño responsive y experiencia de usuario",
    "Código limpio y mantenible",
  ];

  return (
    <section id="sobre" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div className="about-grid">
          <div ref={ref} className="fade-up">
            <span className="section-eyebrow">Sobre AL</span>
            <h2 className="section-title">Desarrolladores full stack enfocados en construir soluciones que se sostienen</h2>
            <p style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.75, marginTop: "1rem", maxWidth: "480px" }}>
              Combinamos estrategia, diseño limpio y código de calidad para construir productos digitales que generan impacto real. Nuestro enfoque está en crear soluciones funcionales, escalables y fáciles de usar.
            </p>
            <ul className="about-points">
              {points.map(p => (
                <li key={p}><CheckCircle size={16} />{p}</li>
              ))}
            </ul>
          </div>
          <div className="about-visual">
            <WaveVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function WaveVisual() {
  return (
    <svg viewBox="0 0 440 380" className="wave-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="220" cy="190" rx="200" ry="160" fill="url(#wglow)" />
      {/* Wave lines */}
      {[0,1,2,3,4,5].map(i => (
        <path key={i}
          d={`M ${30 + i*5} ${80 + i*10} Q ${110 + i*8} ${20 + i*6} ${220} ${100 + i*12} T ${410 - i*5} ${90 + i*10}`}
          fill="none"
          stroke={i % 2 === 0 ? "#0A84FF" : "#18D6FF"}
          strokeWidth={i === 2 ? "2" : "1"}
          opacity={0.15 + i * 0.06}
        />
      ))}
      {/* Dot grid */}
      {Array.from({ length: 8 * 7 }, (_, k) => {
        const col = k % 8, row = Math.floor(k / 8);
        const x = 60 + col * 48, y = 60 + row * 44;
        return <circle key={k} cx={x} cy={y} r="1.5" fill="#18D6FF" opacity={Math.random() * 0.4 + 0.1} />;
      })}
      {/* Central glow circle */}
      <circle cx="220" cy="190" r="70" fill="none" stroke="#0A84FF" strokeWidth="1" opacity="0.2" />
      <circle cx="220" cy="190" r="110" fill="none" stroke="#18D6FF" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.15" />
      <circle cx="220" cy="190" r="20" fill="rgba(10,132,255,0.15)" />
      <text x="220" y="196" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="14" fontWeight="800"
        fill="url(#grad1)">AL</text>
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A84FF" />
          <stop offset="100%" stopColor="#18D6FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA() {
  const ref = useFadeUp();
  return (
    <section id="contacto" className="cta-section">
      <div className="cta-bg" />
      {/* Subtle decorative lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}
        viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        {[0,1,2].map(i => (
          <line key={i} x1={200 + i*300} y1="0" x2={200 + i*300} y2="400"
            stroke="#18D6FF" strokeWidth="1" />
        ))}
        <ellipse cx="600" cy="200" rx="400" ry="180" fill="none" stroke="#0A84FF" strokeWidth="1" />
      </svg>

      <div className="section-inner">
        <div ref={ref} className="fade-up cta-inner">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="cta-title">
            Cuéntanos tu idea y hagámosla <span className="gradient-text">realidad</span>
          </h2>
          <p className="cta-sub">
            Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel.
          </p>
          <div className="cta-btns">
            <a
              href="https://wa.me/593000000000"
              className="btn-primary"
              style={{ fontSize: "0.95rem", padding: "0.75rem 1.75rem" }}
            >
              <MessageCircle size={16} /> Enviar idea por WhatsApp
            </a>
            <span className="cta-divider">o</span>
            <a
              href="mailto:contacto@alsoluciones.dev"
              className="btn-secondary"
              style={{ fontSize: "0.95rem", padding: "0.75rem 1.75rem" }}
            >
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--card-bd)" }}>
      <div className="footer">
        <div className="footer-left">
          <span className="logo-mark"><span>AL</span></span>
          <span className="footer-tagline">Soluciones Tecnológicas</span>
        </div>
        <ul className="footer-links">
          {["Inicio","Servicios","Proyectos","Contacto"].map((l, i) => (
            <li key={l}>
              <a href={["#inicio","#servicios","#proyectos","#contacto"][i]}>{l}</a>
            </li>
          ))}
        </ul>
        <div className="footer-social">
          <a href="#" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        </div>
        <span className="footer-copy">© 2025 AL Soluciones Tecnológicas. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function ALLandingPage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_STYLES;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <ParticlesCanvas />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
