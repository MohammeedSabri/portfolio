import { getDictionary } from "../i18n";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Certifications from "../../components/Certifications";
import Contact from "../../components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr' | 'de' }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col min-h-screen text-[var(--foreground)] font-[family-name:var(--font-sans)]">
      {/* HERO SECTION */}
      <Hero dict={dict} />

      {/* ABOUT SECTION */}
      <About dict={dict} />

      {/* PROJECTS SECTION */}
      <Projects dict={dict} />

      {/* SKILLS SECTION */}
      <Skills dict={dict} />

      {/* CERTIFICATIONS SECTION */}
      <Certifications />

      {/* CONTACT SECTION */}
      <Contact />
    </div>
  );
}
