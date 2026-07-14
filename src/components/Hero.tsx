interface HeroProps {
    name: string
    tagline: string
}

export default function Hero({ name, tagline }: HeroProps) {
    return (
        <section id="hero" className="bg-navy text-offwhite px-6 pt-20 text-center">
            <h1 className="font-display text-4xl font-bold text-gold md:text-6xl">{name}</h1>
            <p className="font-body text-base text-slate mt-4 md:text-xl">{tagline}</p>
        </section>
        
    )
}