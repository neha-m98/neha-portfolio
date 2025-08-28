import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, TestTube, Brain } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-blue-600",
      image: "/frontend-development-icons-with-react-javascript-h.png",
      skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Redux", "HTML5", "CSS3", "Material-UI", "Bootstrap"],
    },
    {
      title: "Backend & Cloud",
      icon: Cloud,
      color: "text-green-600",
      image: "/cloud-computing-and-backend-services-with-aws-dock.png",
      skills: ["Java", "Node.js", "Spring Boot", "Microservices", "AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
    },
    {
      title: "Databases & DevOps",
      icon: Database,
      color: "text-purple-600",
      image: "/database-icons-with-mysql-postgresql-mongodb-and-d.png",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL", "Ansible"],
    },
    {
      title: "Testing & Security",
      icon: TestTube,
      color: "text-orange-600",
      image: "/testing-and-security-tools-with-jest-cypress-and-s.png",
      skills: ["Jest", "Cypress", "JUnit", "Postman", "JWT authentication", "SonarQube"],
    },
    {
      title: "AI/ML & Tools",
      icon: Brain,
      color: "text-red-600",
      image: "/ai-machine-learning-neural-networks-with-tensorflo.png",
      skills: [
        "TensorFlow",
        "Scikit-learn",
        "Keras",
        "Generative AI",
        "VS Code",
        "Kibana",
        "Bitbucket",
        "Jira",
        "Agile Development",
      ],
    },
  ]

  const topSkills = [
    { name: "React.js", image: "/react-logo-blue-atom-symbol.png", level: 95 },
    { name: "JavaScript", image: "/placeholder.svg?height=60&width=60", level: 90 },
    { name: "Node.js", image: "/placeholder.svg?height=60&width=60", level: 85 },
    { name: "Python", image: "/placeholder.svg?height=60&width=60", level: 80 },
    { name: "AWS", image: "/placeholder.svg?height=60&width=60", level: 75 },
    { name: "TensorFlow", image: "/placeholder.svg?height=60&width=60", level: 70 },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Top Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{skill.name}</h4>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <IconComponent className={`w-5 h-5 mr-2 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
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
