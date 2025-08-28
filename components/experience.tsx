import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Dassault Systemes",
      location: "Waltham, MA",
      period: "Jul 2024 – Jan 2025",
      achievements: [
        "Engineered and Developed a dual-view project management application using Java and React.js, increasing complex task throughput by 5x",
        "Implemented high-performance APIs for real-time CRUD operations, reducing initial data load time from 2 minutes to 15 seconds",
        "Refactored 1,000+ lines of legacy code using modular ES6 with design patterns to boost frontend & backend scalability, while adding Jest + Cypress tests that improved reliability by 25%",
      ],
    },
    {
      title: "Sr. Software Engineer",
      company: "Brillio Technologies",
      location: "Remote",
      period: "Apr 2022 – Jun 2023",
      achievements: [
        "Architected end-to-end shipment tracking features with React.js and PostgreSQL, improving data accuracy by 50%",
        "Optimized order page load time from 8s to 3s through caching, async processing, and SQL tuning, significantly reducing cart abandonment",
        "Designed and optimized RESTful APIs using Node.js and Express.js on AWS, handling 10K+ concurrent users under 150ms, leveraging JWT authentication, caching, and rate limiting to ensure 99.9% uptime and scalability",
        "Streamlined release cycles by 50% using Jenkins CI/CD and TDD, reducing post-release defects by 40%",
      ],
    },
    {
      title: "Application Development Associate",
      company: "Accenture",
      location: "Remote",
      period: "Dec 2020 – Mar 2022",
      achievements: [
        "Designed a secure full-stack in-app payment system with Spring Boot and MySQL, increasing transaction volume by 35%",
        "Delivered backend services with real-time sync and offline-first reliability, driving 1M+ app downloads on AWS",
        "Enhanced Java backend stability using JUnit and Kibana monitoring, improving performance by 15% and reducing resolution times",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">2.5+ years of building scalable applications and systems</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center w-fit">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
