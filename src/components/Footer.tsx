export default function Footer() {
    return (
        <section className="bg-navy px-6 py-8 text-center">
            <div className="flex justify-center gap-6">
                <a
                    href="/Thuthukani_Ngubane_CV.pdf"
                    download
                    className="text-gold font-medium hover:text-teal transition-colors"
                >
                    Download Resume
                </a>
                <a
                    href="https://github.com/Myaluza"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold font-medium hover:text-teal transition-colors"
                >
                    GitHub
                </a>
            </div>
            
            <p className="text-slate text-sm mt-4">© 2026 Thuthukani Ngubane</p>
        </section>
    )
}