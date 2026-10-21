import { ArrowUpRight, Mail } from "lucide-react";
import ContactOptions from "./ContactOptions";

export default function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="page-width">
        <p className="eyebrow"><span className="section-index">03</span> CONTACT</p>
        <div className="contact-main"><div className="contact-heading"><span className="mail-sticker" aria-hidden="true"><Mail size={30} strokeWidth={1.6} /></span><h2>Say hello<span className="wordmark-dot">.</span></h2></div><ContactOptions /></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Ramdlan Faqih</p><div><a href="https://github.com/ramdlanfaqih" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/ramdlanfaqih" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="#home">Back to top ↑</a></div></div>
      </div>
    </footer>
  );
}
