import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="page-width nav-inner" aria-label="Main navigation">
        <Link href="/#home" className="wordmark"><Image src="/images/ramfaq.png" alt="" width={30} height={30} /> <span>Faqih<span className="wordmark-dot">.</span></span></Link>
        <div className="nav-links">
          <Link href="/#works">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#contact" className="nav-contact">Say hello <ArrowUpRight size={14} /></Link>
        </div>
      </nav>
    </header>
  );
}
