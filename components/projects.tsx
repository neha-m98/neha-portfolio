import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles, Zap, Brain, Code } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "JustiFi – AI-Powered Legal Analysis System",
      category: "GenAI/AI & ML",
      description:
        "Architected distributed legal analysis platform (Akka Cluster, LLM, vector DB) with 4 AI-assisted modes, reducing research time.",
      technologies: ["AI/ML", "LLM", "Vector DB", "Akka Cluster", "Distributed Systems"],
      color: "from-purple-500 to-pink-500",
      icon: Brain,
      image: "/ai-legal-analysis-dashboard-with-scales-of-justice.png",
      github: "https://github.com/neha-m98/justifiLegalBot",
      demo: "https://justifi-legal-bot.vercel.app",
    },
    {
      title: "Peter Lynch Bot – GenAI Trading Assistant",
      category: "Machine Learning, AI",
      description:
        "Developed an LLM-powered financial Q&A chatbot with real-time stock analysis using a custom Transformer architecture and RAG.",
      technologies: ["LLM", "Transformer", "RAG", "Financial APIs", "Real-time Data"],
      color: "from-green-500 to-emerald-500",
      icon: Zap,
      image: "/financial-trading-dashboard-with-stock-charts-and-.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Food Ordering Application",
      category: "Web Development",
      description:
        "Built a Firebase-powered food ordering system using React and MUI with real-time order tracking and a responsive UI, streamlining user flow and state management.",
      technologies: ["React", "Firebase", "Material-UI", "Real-time", "State Management"],
      color: "from-orange-500 to-red-500",
      icon: Code,
      image: "/italian-food-ordering-app-interface-with-pizza-and.png",
      github: "https://github.com/neha-m98/FoodApp-master",
      demo: "https://italian-food-application.netlify.app/",
    },
    {
      title: "Airbnb Clone",
      category: "Web Development",
      description:
        "Redesigned a responsive Airbnb clone using React, Redux, and CSS; integrated advanced search and recommendation algorithms, improving the relevance of results by 20%.",
      technologies: ["React", "Redux", "CSS3", "Search Algorithms", "Recommendations"],
      color: "from-red-500 to-pink-500",
      icon: Code,
      image: "/airbnb-style-property-listing-interface-with-moder.png",
      github: "https://github.com/neha-m98/airbnb-clone-master",
      demo: "https://airbnb-clone-using-react.netlify.app/",
    },
    {
      title: "Video Streaming Application",
      category: "Web Development",
      description:
        "Video Streaming App built with ReactJS featuring video playback, user authentication, and content management system.",
      technologies: ["React", "Video APIs", "Authentication", "Content Management"],
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      image: "/youtube-style-video-streaming-interface-with-video.png",
      github: "https://github.com/neha-m98/youtubeapp",
      demo: "https://video-streaming-application.netlify.app/",
    },
    {
      title: "BMC ChatBot",
      category: "AI & Automation",
      description:
        "BMC ChatBot built with ReactJS providing automated customer support and intelligent query handling.",
      technologies: ["React", "NLP", "Chatbot APIs", "Customer Support"],
      color: "from-indigo-500 to-purple-500",
      icon: Brain,
      image: "/customer-support-chatbot-interface-with-chat-bubbl.png",
      github: "https://github.com/neha-m98/chatbot",
      demo: "https://bmc-chatbot.netlify.app/",
    },
    {
      title: "Expense Tracker",
      category: "Web Development",
      description:
        "Expense Tracker built with ReactJS and hooks for personal finance management with data visualization and budget tracking.",
      technologies: ["React", "Hooks", "Chart.js", "Local Storage", "Budget Management"],
      color: "from-cyan-500 to-blue-500",
      icon: Code,
      image: "/expense-tracker-dashboard-with-charts-graphs-and-f.png",
      github: "https://github.com/neha-m98/ExpenseTracker",
      demo: "https://expensetracker-application.netlify.app/",
    },
    {
      title: "WhiteBoard",
      category: "Interactive Tools",
      description:
        "WhiteBoard built with ReactJS and Canvas for collaborative drawing and real-time collaboration features.",
      technologies: ["React", "Canvas API", "Real-time Collaboration", "Drawing Tools"],
      color: "from-pink-500 to-rose-500",
      icon: Sparkles,
      image: "/digital-whiteboard-with-drawing-tools-and-collabor.png",
      github: "https://github.com/neha-m98/whiteboard",
      demo: "https://whiteboard-using-canvas.netlify.app/",
    },
    {
      title: "ToDo Application",
      category: "Web Development",
      description:
        "ToDo Application built with modern web technologies featuring task management, priority settings, and progress tracking.",
      technologies: ["React", "State Management", "Local Storage", "Task Management"],
      color: "from-yellow-500 to-orange-500",
      icon: Code,
      image: "/modern-todo-list-interface-with-checkboxes-tasks-a.png",
      github: "https://github.com/neha-m98/TodoWithStyles-m",
      demo: "https://simplettodo-list.netlify.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-chart-1 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities across AI/ML and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group border-0 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundImage: `linear-gradient(135deg, var(--color-primary), var(--color-accent))` }}
                  ></div>
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-accent/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 glass hover:bg-primary/10 border-primary/30 group-hover:border-primary/50 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
