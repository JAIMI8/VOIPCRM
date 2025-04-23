"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle, Phone, MessageSquare, BarChart, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import StatCard from "@/components/stat-card"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from 'next/link';
import CountUp from "react-countup";
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import {  useRef } from "react"
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = [
    
    "/menu 1.png",
    "/menu 2.png",
    "/menu 3.png",
    "/hero-bg.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
   
   <section className="relative w-full h-[600px] overflow-hidden">
     
           <div className="absolute inset-0">
        {images.map((src, i) => (
          <Image
            key={i}
            src={`${src}?height=600&width=1200`}
            alt={`Slide ${i}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            
            priority={i === 0}
          />
        ))}
      </div>

     
      <div
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 text-white cursor-pointer bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
      >
        <ChevronLeft className="w-6 h-6" />
      </div>
      <div
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
        onClick={() => setIndex((index + 1) % images.length)}
      >
        <ChevronRight className="w-6 h-6" />
      </div>

      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
        >
          <motion.h1
            variants={fadeIn("up", 0.3)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Bienvenue chez <span className="text-cyan-400">VOIPCRMDIGITAL</span>
          </motion.h1>
          <motion.p variants={fadeIn("up", 0.4)} className="text-xl text-slate-200 max-w-3xl mb-8">
            La synergie parfaite entre VOIP et CRM pour une expérience client exceptionnelle
          </motion.p>
          <motion.div variants={fadeIn("up", 0.5)} className="flex flex-col sm:flex-row gap-4">
          <Link href="/login" passHref>
      <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
        Commencer maintenant
      </Button>
    </Link>
            
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}

<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comment S'inscrire</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
  Découvrez notre processus simple et rapide pour vous inscrire et bénéficier de nos services exclusifs. Suivez les étapes ci-dessous pour commencer.
</p>

    </motion.div>

    <div className="flex justify-center mb-16">
      <div className="relative w-full max-w-4xl border-4 border-gray-300 rounded-lg overflow-hidden">
        <video
          src="/video.mp4" 
          controls
          className="w-full h-auto"
        />
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          features={service.features}
          delay={index * 0.1}
        />
      ))}
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Intégration Transparente VOIP et CRM</h2>
              <p className="text-slate-600 mb-6">
                Notre système offre une intégration unique entre les solutions de communication vocale sur IP (VOIP) et
                la gestion de la relation client (CRM), permettant à votre équipe de :
              </p>
              <ul className="space-y-4">
                {integrationFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>     
              <Link href="/about" passHref>
      <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white mt-6">
      En savoir plus
      </Button>
    </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/imge.jpeg?height=400&width=600"
                alt="VOIP CRM Integration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
     
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nous sommes fiers de la confiance que nos clients nous accordent et des résultats que nous leur apportons
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
           <TestimonialCard
           key={index}
           quote={testimonial.quote}
           name={testimonial.name}
           position={testimonial.position}
           delay={index * 0.1}
         />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à améliorer vos communications d'entreprise ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises qui bénéficient de nos solutions intégrées
          </p>
          <Link href="/login" passHref>
      <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
      Commencer un essai gratuit
      </Button>
    </Link>
            
        </motion.div>
      </section>

      {/* Partners Section */}

<section className="py-16 bg-slate-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Nos partenaires & clients</h2>
      <p className="text-slate-600">Ils nous font confiance pour leurs communications et leur croissance digitale</p>
    </motion.div>

    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {['/go1.png', '/go2.png', '/go3.png', '/go4.png', '/go6.png'].map((imageSrc, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center"
        >
          <Image
            src={imageSrc}
            alt={`Partner ${index + 1}`}
            width={200}
            height={75}
            className="opacity-70 hover:opacity-100 transition-opacity transform hover:scale-110"  // إضافة تأثير التكبير عند hover
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </div>
  )
}

const services = [
  {
    title: "Solutions VOIP Intégrées",
    description: "Systèmes de communication avancés adaptés aux besoins de votre entreprise",
    icon: Phone,
    features: [
      "Appels vocaux de haute qualité",
      "Vidéoconférences multi-participants",
      "Transfert d'appels et files d'attente",
      "Enregistrement et archivage des appels",
    ],
  },
  {
    title: "Gestion de la Relation Client",
    description: "Plateforme CRM facile à utiliser pour suivre et gérer les interactions clients",
    icon: Users,
    features: [
      "Base de données clients intégrée",
      "Suivi des ventes et opportunités",
      "Gestion des campagnes marketing",
      "Rapports et analyses avancés",
    ],
  },
  {
    title: "Centre d'Appels Intégré",
    description: "Solution complète pour centres d'appels combinant VOIP et CRM",
    icon: MessageSquare,
    features: [
      "Distribution intelligente des appels",
      "Chat en direct multicanal",
      "Intégration avec les réseaux sociaux",
      "Analyses de performance des agents",
    ],
  },



]

const stats = [
  { value: "+500", label: "Clients satisfaits" },
  { value: "99.9%", label: "Temps de fonctionnement" },
  { value: "+50", label: "Pays" },
  { value: "+10", label: "Années d'expérience" },
]

const integrationFeatures = [
  "Accès instantané au dossier client lors de la réception d'un appel",
  "Enregistrement automatique de toutes les interactions client",
  "Création de tickets de support directement à partir des appels",
  "Suivi du statut des clients et de l'historique des interactions",
  "Analyse des modèles d'appels pour améliorer le service client",
  "Routage des appels vers l'employé approprié en fonction des données client",
]

const testimonials = [
  {
    quote: "Grâce à VocoCRM, nous avons pu automatiser notre processus commercial. Un vrai gain de temps !",
    name: "Youssef El Amrani",
    position: "Responsable Commercial, AtlasTech",
  },
  {
    quote: "Une plateforme intuitive qui nous a permis de mieux gérer nos clients et d'améliorer nos performances.",
    name: "Fatima Zahra Lahlou",
    position: "Directrice Marketing, MaroCom",
  },

  {
    quote: "Depuis qu’on a intégré VocoCRM, nos équipes sont plus organisées et productives.",
    name: "Khadija Bouziane",
    position: "Chargée de projet, InnovX",
  },


]


