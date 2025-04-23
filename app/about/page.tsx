"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/animations"
import TeamMemberCard from "@/components/team-member-card"
import ValueCard from "@/components/value-card"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center bg-no-repeat text-white py-32"
  style={{ backgroundImage: "url('/menu 3.png')" }}
>
  <div className="absolute inset-0 bg-black/60"></div> 
  
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    className="relative container mx-auto px-4 text-center z-10"
  >
    <motion.h1 variants={fadeIn("up", 0.3)} className="text-4xl md:text-5xl font-bold mb-6">
      À Propos de Nous
    </motion.h1>
    <motion.p variants={fadeIn("up", 0.4)} className="text-xl text-white max-w-3xl mx-auto">
      Nous sommes une entreprise leader dans la fourniture de solutions intégrées pour les communications
      d'entreprise et la gestion de la relation client
    </motion.p>
  </motion.div>
</section>



      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre Histoire</h2>
              <p className="text-slate-600 mb-4">
                Notre entreprise a été fondée en 2010 avec l'objectif de fournir des solutions de communication avancées
                aux petites et moyennes entreprises. Nous avons commencé avec une petite équipe d'experts passionnés par
                la technologie VOIP et ses possibilités.
              </p>
              <p className="text-slate-600 mb-4">
                Au fil des années, nos services se sont étendus pour inclure des solutions de gestion de la relation
                client, et nous sommes devenus une plateforme intégrée combinant communications et gestion client en une
                seule solution.
              </p>
              <p className="text-slate-600">
                Aujourd'hui, nous sommes fiers de servir plus de 500 clients dans plus de 50 pays, et nous continuons
                d'innover et de développer nos solutions pour répondre aux besoins changeants de nos clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image src="/menu 3.png?height=400&width=600" alt="Notre Histoire" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre Mission et Vision</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nous sommes une société spécialisée dans l'ingénierie des centres d'appels, offrant des solutions complètes et innovantes. Nous concevons et optimisons les infrastructures technologiques, les systèmes de téléphonie, les logiciels et les flux de travail pour maximiser l'efficacité opérationnelle des centres d'appels. Notre équipe d'experts apporte une expertise approfondie dans la gestion des appels, la distribution des appels, la gestion des files d'attente et les solutions de CRM intégrées.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Notre Mission</h3>
              <p className="text-slate-600 mb-6">
                Permettre aux entreprises d'améliorer leurs communications et leurs relations avec les clients en
                fournissant des solutions technologiques avancées, faciles à utiliser et à des prix compétitifs.
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                    <span className="text-slate-600">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Notre Vision</h3>
              <p className="text-slate-600 mb-6">
                Devenir le partenaire privilégié des entreprises dans le domaine des solutions de communication et de
                gestion de la relation client à l'échelle mondiale, grâce à l'innovation continue et à un service client
                exceptionnel.
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                    <span className="text-slate-600">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre Équipe</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Nous sommes fiers de notre équipe exceptionnelle d'experts spécialisés dans les domaines des
        communications, de la technologie de l'information et du service client.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-md p-6 text-center"
        >
          {/* الصورة */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src={member.image} 
              alt={member.name}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          

          <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
          <p className="text-slate-500">{member.position}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Values */}
      <section className="py-20 mb-16 bg-gradient-to-r from-slate-800 to-blue-800 text-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto">
        Nos valeurs fondamentales définissent comment nous travaillons et interagissons avec nos clients et
        partenaires
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <ValueCard key={index} title={value.title} description={value.description} delay={index * 0.1} />
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

const missionPoints = [
  "Fournir des solutions de communication avancées et fiables",
  "Simplifier la gestion de la relation client pour les entreprises de toutes tailles",
  "Offrir un support technique exceptionnel 24/7",
  "Contribuer au succès de nos clients en améliorant l'efficacité de leurs opérations",
]

const visionPoints = [
  "Leadership dans l'intégration des solutions VOIP et CRM",
  "Expansion mondiale et service aux clients dans le monde entier",
  "Innovation continue et développement de nouvelles solutions répondant aux besoins du marché",
  "Établissement de partenariats stratégiques avec des fournisseurs de technologie leaders",
]

const values = [
  {
    title: "Innovation",
    description:
      "Nous recherchons constamment l'innovation et développons de nouvelles solutions qui répondent aux besoins changeants de nos clients et suivent les évolutions technologiques.",
  },
  {
    title: "Qualité",
    description:
      "Nous nous engageons à fournir des produits et services de haute qualité qui dépassent les attentes de nos clients et garantissent leur satisfaction.",
  },
  {
    title: "Transparence",
    description:
      "Nous croyons en l'importance de la transparence dans toutes nos interactions avec les clients, les partenaires et les employés.",
  },
]

const teamMembers = [
  { name: "Fatima Zahra El Amrani", position: "PDG", image: "/person 1.png" },
  { name: "Rachid El Khalfi", position: "Directeur Technologie", image: "/person 2.png" }, 
  { name: "Khadija Benslimane", position: "Directrice Commerciale", image: "/person 3.png" }, 
  { name: "Omar Benjelloun", position: "Directeur Service Client", image: "/person 4.png" },
];

