import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-chart-1/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full glass animate-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-chart-1 opacity-80"></div>
            <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
              <span className="text-primary text-5xl font-bold">NM</span>
            </div>
            <Sparkles className="absolute top-2 right-2 w-6 h-6 text-accent animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <p className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Full-Stack Software Engineer
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-chart-1 bg-clip-text text-transparent">
              Neha Manjunath
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
            Crafting scalable backend systems and dynamic user interfaces with{" "}
            <span className="text-primary font-semibold">3+ years</span> of experience in{" "}
            <span className="text-primary font-semibold">React.js</span>,{" "}
            <span className="text-accent font-semibold">Node.js</span>, and{" "}
            <span className="text-chart-1 font-semibold">Java</span> while exploring{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
              Generative AI
            </span>{" "}
            integrations.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">
                <Sparkles className="w-5 h-5 mr-2" />
                Hire Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass hover:bg-primary/10 border-primary/30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/in/nehaamanjunath/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass hover:bg-accent/10 border-accent/30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              asChild
            >
              <a href="https://github.com/neha-m98" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-bounce">
          <div className="w-12 h-12 mx-auto rounded-full glass flex items-center justify-center animate-glow">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
