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
            <div key={project.title} className="bg-navy rounded-lg p-6 flex flex-col gap-3 w-full md:w-80 mf:min-h-80">
                <h3 className="font-display text-2xl text-gold font-bold">{project.title}</h3>
                <p className="font-body text-offwhite text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                        <span key={tech} className="bg-teal/20 text-teal text-xs px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-teal font-medium text-sm">
                    View on Github →
                </a>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gold font-medium text-sm">
                    Live Demo →
                    </a>
                )}
            </div>
        )
    })

    return (
        <section className="bg-offwhite px-6 py-12">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
                {projectsEl}
            </div>
            
        </section>
    )
}