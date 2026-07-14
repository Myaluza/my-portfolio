export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/95 backdrop-blur px-6 py-4 flex justify-center gap-6 z-50">
      <a href="#skills" className="text-offwhite hover:text-gold transition-colors text-sm font-medium">Skills</a>
      <a href="#projects" className="text-offwhite hover:text-gold transition-colors text-sm font-medium">Projects</a>
      <a href="#contact" className="text-offwhite hover:text-gold transition-colors text-sm font-medium">Contact</a>
    </nav>
  )
}