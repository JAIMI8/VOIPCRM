"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Demande générale",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Demande générale",
        message: "",
      })
    }, 1500)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 text-center"
        >
          <motion.h1 variants={fadeIn("up", 0.3)} className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </motion.h1>
          <motion.p variants={fadeIn("up", 0.4)} className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous aider à choisir la solution adaptée aux besoins de
            votre entreprise
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nous Contacter</h2>
              <p className="text-slate-600 mb-8">
                Nous sommes ravis de répondre à vos questions et de vous fournir de l'aide. Vous pouvez nous contacter
                via le formulaire ou en utilisant les informations de contact ci-dessous.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-500 mr-4 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Appelez-nous</h3>
                    <p className="text-slate-600">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-500 mr-4 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">contact@vocodata.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-500 mr-4 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Adresse</h3>
                    <p className="text-slate-600">123 Avenue de Paris, 75000 Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Heures d'ouverture</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Lundi - Vendredi:</span>
                    <span className="text-slate-900">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Samedi:</span>
                    <span className="text-slate-900">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Dimanche:</span>
                    <span className="text-slate-900">Fermé</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm border border-slate-100"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Merci de nous avoir contactés !</h3>
                  <p className="text-slate-600">
                    Votre message a été reçu avec succès. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <Button
                    className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                      </div>

                      <div className="grid gap-2">
                        <Label>Sujet</Label>
                        <RadioGroup value={formData.subject} onValueChange={handleRadioChange}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Demande générale" id="general" />
                            <Label htmlFor="general">Demande générale</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Support technique" id="support" />
                            <Label htmlFor="support">Support technique</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Ventes" id="sales" />
                            <Label htmlFor="sales">Ventes</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Envoyer le message
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
  <section className="py-12 bg-slate-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-200 h-[400px] rounded-lg flex items-center justify-center" >
      <MapContainer center={[31.6295, -8.0038]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[31.6295, -8.0038]}>
          <Popup>Marrakech, Gueliz</Popup>
        </Marker>
      </MapContainer>
      <div className="text-center absolute top-4 left-0 right-0">
        <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
        {/* <p className="text-slate-600">Carte de localisation</p> */}
      </div>
    </motion.div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Réponses aux questions les plus courantes</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-100"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "Quelle est la durée de l'essai gratuit ?",
    answer:
      "Nous proposons un essai gratuit de 14 jours pour tous nos forfaits, pendant lequel vous pouvez explorer toutes les fonctionnalités.",
  },
  {
    question: "Puis-je mettre à niveau mon forfait à tout moment ?",
    answer:
      "Oui, vous pouvez mettre à niveau votre forfait à tout moment. La différence de prix sera calculée au prorata.",
  },
  {
    question: "Offrez-vous un support technique ?",
    answer:
      "Oui, nous offrons un support technique 24/7 pour les clients du forfait Entreprise, et un support pendant les heures de bureau pour les autres forfaits.",
  },
  {
    question: "Puis-je transférer mes données depuis un autre système ?",
    answer:
      "Oui, nous proposons des services de migration de données depuis d'autres systèmes vers notre plateforme, facilement et en toute sécurité.",
  },
]

