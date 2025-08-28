import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:neham1998@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    neham1998@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-green-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+18576933611" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (857)-693-3611
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-4 text-red-600" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">United States</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/nehaamanjunath/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/neha-m98" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your message..." rows={5} />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
