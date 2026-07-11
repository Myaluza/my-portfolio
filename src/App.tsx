import Hero from "./components/Hero"
import Skills from "./components/Skills"

function App() {

  const testSkills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "NestJS", category: "Backend" },
];

  return (
    <>
      <Hero
      name="Thuthu"
      tagline="Arrive with a purpose, leave with a legacy"
      />
      <Skills
        skills={testSkills}
      />
    </>
  )
}

export default App