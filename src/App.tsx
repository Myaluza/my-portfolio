import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {

  const testSkills = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "NestJS", category: "Backend" },
  ];
  const testProjects = [
    {
      title: "PeakDrive",
      description: "React Native app for Durban ride-hailing drivers showing surge zones based on local events.",
      techStack: ["React Native", "Expo", "NestJS", "Supabase"],
      github: "https://github.com/Myaluza/peakdrive",
    },
    {
      title: "Panic Button Safety App",
      description: "Free safety app for South Africans with SOS activation, shake-to-trigger, and GPS sharing.",
      techStack: ["React Native", "Expo", "TypeScript"],
      github: "https://github.com/Myaluza/panic-button",
    },
  ];


  return (
    <>
    <Nav />
      <Hero
      name="I am Thuthukani Ngubane"
      tagline="Arrive with a purpose, leave with a legacy"
      />
      <Skills
        skills={testSkills}
      />
      <Projects
        projects={testProjects}
      />
      <Contact />
      <Footer />
    </>
  )
}

export default App