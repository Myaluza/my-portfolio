interface HeroProps {
    name: string
    tagline: string
}

export default function Hero({ name, tagline }: HeroProps) {
    return (
        <>
            <h1>{name}</h1>
            <p>{tagline}</p>
        </>
        
    )
}