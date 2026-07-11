interface Project {
    title: string
    description: string
    techStack: string[]
    liveUrl?: string
    github: string
}

interface ProjectsProps {
    projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
    const projectsEl = projects.map(project => {
        return (
            <div key={project.title}>
                <p>{project.title}</p>
                <p>{project.description}</p>
                <p>{project.techStack.join(", ")}</p>
                <p>{project.github}</p>
                {project.liveUrl && <p>{project.liveUrl}</p>}
            </div>
        )
    })

    return (
        <>
            {projectsEl}
        </>
    )
}