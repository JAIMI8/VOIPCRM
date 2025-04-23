import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">VOIPCRMDIGITAL</h3>
            <p className="mb-4">
              Nous fournissons des solutions intégrées pour les communications d'entreprise et la gestion de la relation
              client afin d'aider les entreprises à se développer et à améliorer leur service client.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="hover:text-cyan-400 transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-cyan-400" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-cyan-400" />
                <span>contact@vocodata.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-cyan-400" />
                <span>Marrakech, Gueliz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} VocoCRM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/about" },
  { label: "Services", href: "/features" },
  { label: "Contact", href: "/contact" },
  { label: "Connexion", href: "https://vocodata.com/auth/login" },
]

const services = [
  { label: "Solutions VOIP", href: "/features" },
  { label: "Gestion de la Relation Client", href: "/features" },
  { label: "Intégration de Systèmes", href: "/features" },
  { label: "Support Technique", href: "/contact" },
  { label: "Consultation", href: "/contact" },
]

