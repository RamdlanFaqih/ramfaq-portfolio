import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="page-width hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="small-square" /> MOBILE & WEB ENGINEER</p>
        <h1>Hi, I’m <span className="heading-mark">Faqih.</span></h1>
        <p className="hero-intro">I develop mobile and web apps—from the first screen to release.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#works">View my work <ArrowDown size={16} /></a>
          <a className="text-link" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <aside className="profile-note" aria-label="Ramdlan Faqih">
        <div className="note-top"><Code2 size={18} aria-hidden="true" /><span>Profile</span><span className="note-window-dots" aria-hidden="true"><i /><i /><i /></span></div>
        <div className="portrait-wrap"><Image src="/images/ramfaq.png" alt="Illustrated portrait of Faqih" width={260} height={265} preload /></div>
        <div className="note-bottom"><strong>Mobile & Web Engineer</strong></div>
      </aside>
    </section>
  );
}
