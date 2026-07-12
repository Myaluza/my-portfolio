interface Skill {
    name: string
    category: string
}

interface SkillsProps {
    skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
    const skillsEl = skills.map(skill => {
        return (
            <div key={skill.name} className="bg-navy/40 border border-teal/30 rounded-lg px-16 py-4 text-center">
                <p className="font-display text-offwhite font-medium">{skill.name}</p>
                <p className="font-body text-sm text-slate">{skill.category}</p>
            </div>
        )
    })
    return (
        <section className="bg-navy px-6 py-4">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                {skillsEl}
            </div>
        </section>
    )
}