"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-md" : "bg-slate-900"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="text-xl font-bold text-cyan-400">
            VOIPCRMDIGITAL
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-slate-200 hover:text-cyan-400 transition-colors ${pathname === item.href ? "text-cyan-400" : ""}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Link href="https://vocodata.com/auth/login">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Connexion</Button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-800 py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-slate-200 hover:text-cyan-400 transition-colors py-2 ${pathname === item.href ? "text-cyan-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="https://vocodata.com/auth/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white w-full">Connexion</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/about" },
  { label: "Services", href: "/features" },
  { label: "Contact", href: "/contact" },
]

