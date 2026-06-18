export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-medium tracking-wide text-muted-foreground">SJDM</span>
            <span className="font-semibold">Diversity & Inclusion Committee</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="https://sjdm.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              SJDM Main Site
            </a>
            <a 
              href="https://sjdm.org/join.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Join SJDM
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Society for Judgment and Decision Making. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
