export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
          Society for Judgment and Decision Making
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-balance leading-[1.1] mb-8">
          Diversity & Inclusion Committee
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Fostering a welcoming, inclusive, and equitable community for all researchers 
          in judgment and decision making.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#initiatives"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Explore Our Work
          </a>
          <a
            href="#members"
            className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-full font-medium text-sm hover:bg-muted transition-colors"
          >
            Meet the Committee
          </a>
        </div>
      </div>
    </section>
  )
}
