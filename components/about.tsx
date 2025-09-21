import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Full-Stack Software Engineer with 2.5+ years of experience building high-performance applications and
            scalable cloud-based systems. Focused on writing clean, modular code with architecture that supports
            long-term maintainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">M.S. in Software Engineering</h4>
                  <p className="text-sm text-muted-foreground">Northeastern University, Boston, MA</p>
                  <p className="text-sm text-muted-foreground">Aug 2025</p>
                </div>
                <div>
                  <h4 className="font-medium">B.Tech in Telecommunication Engineering</h4>
                  <p className="text-sm text-muted-foreground">BMS College of Engineering</p>
                  <p className="text-sm text-muted-foreground">2016 – 2020</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">United States</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">+1 (857)-693-3611</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">neham1998@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
