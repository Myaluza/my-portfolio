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
            <div key={skill.name}>
                <p>{skill.name}</p>
                <p>{skill.category}</p>
            </div>
        )
    })
    return (
        <>
            {skillsEl}
        </>
    )
}