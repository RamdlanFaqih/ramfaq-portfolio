import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import SelectedWorks from "@/components/SelectedWorks";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content"><Hero /><SkillsMarquee /><SelectedWorks /><Experience /></main>
      <Footer />
    </>
  );
}
