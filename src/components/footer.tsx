export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Dr. Iago Augusto Carvalho. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.unifal-mg.edu.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              UNIFAL-MG
            </a>
            <a
              href="https://www.unifal-mg.edu.br/dcc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Department of Computer Science
            </a>
            <a
              href="https://www.unifal-mg.edu.br/ppgeab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Post-graduate Program in Statistics
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
