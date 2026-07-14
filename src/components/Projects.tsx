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
            <div key={project.title} className="bg-navy rounded-lg p-6 flex flex-col gap-3 w-full md:w-80 md:min-h-80 hover:scale-105 hover:shadow-lg hover:shadow-teal/20 transition-transform duration-200">
                <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18s6-5.686 6-10A6 6 0 0 0 4 8c0 4.314 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-display text-2xl text-gold font-bold">{project.title}</h3>
                </div>
                <p className="font-body text-offwhite text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                        <span key={tech} className="bg-teal/20 text-teal text-xs px-3 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-teal font-medium text-sm hover:text-offwhite transition-colors">
                    View on Github →
                </a>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-teal font-medium text-sm hover:text-offwhite transition-colors">
                    Live Demo →
                    </a>
                )}
            </div>
        )
    })

    return (
        <section className="bg-offwhite px-6 py-16">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
                {projectsEl}
            </div>
            
        </section>
    )
}