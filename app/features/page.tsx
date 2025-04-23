"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, MessageSquare, Users, BarChart, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center bg-no-repeat py-32 text-white"
  style={{ backgroundImage: 'url("/menu 2.png")' }} 
>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative container mx-auto px-4 text-center z-10"
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
    <p className="text-xl text-slate-200 max-w-3xl mx-auto">
      Découvrez comment notre solution intégrée de VoIP et de CRM offre le meilleur rapport qualité-prix
      pour la gestion de vos communications et de vos relations client. Nous avons soigneusement sélectionné
      ces deux technologies pour vous offrir une solution complète, alliant performance et rentabilité.
    </p>
  </motion.div>
</section>


      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Solutions Intégrées pour la Réussite de Votre Entreprise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nous proposons un ensemble complet de fonctionnalités conçues pour améliorer vos communications
              d'entreprise et renforcer vos relations avec les clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                subFeatures={feature.subFeatures}
                delay={index * 0.1}
              />
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
              <Link href="https://vocodata.com/auth/login">
                <Button className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white">Accéder à la plateforme</Button>
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
                src="/voic.png?height=400&width=600"
                alt="VOIP CRM Integration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
  


      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Comparaison des Forfaits</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Choisissez le forfait qui convient aux besoins de votre entreprise
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <Card className="p-6 bg-white shadow-lg rounded-xl flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-700">VOIP & TRUNK SIP</h2>
          </div>
          <div className="space-y-3 mb-6">
            <p className="text-gray-600">France FIXE 0.006€</p>
            <p className="text-gray-600">France GSM 0.027€</p>
            <p className="text-gray-600">Belgique FIXE et GSM 0.026€</p>
          </div>
          <div className="flex items-baseline mb-6">
            <span className="text-[#00B0FF] text-3xl font-bold">€</span>
            <span className="text-gray-500 ml-1">/ min</span>
          </div>
        </div>
        <Link href="/offers/voip">
          <Button className="w-full bg-[#00B0FF] hover:bg-[#0091CC] text-white px-4 py-1 rounded-md text-sm">
            Voir l’offre
          </Button>
        </Link>
      </Card>

      {/* Card 2 */}
      <Card className="p-6 bg-white shadow-lg rounded-xl flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">APP gestion PROD</h2>
          <div className="flex items-baseline mb-6">
            <span className="text-[#00B0FF] text-4xl font-bold">€59</span>
            <span className="text-gray-500 ml-1">/ month</span>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li className="line-through text-gray-400">Massa ultricies mi</li>
          </ul>
        </div>
        <Link href="/offers/voip">
          <Button className="mt-4 w-full bg-[#00B0FF] hover:bg-[#0091CC] text-white px-4 py-1 rounded-md text-sm">
            Voir l’offre
          </Button>
        </Link>
      </Card>

      {/* Card 3 */}
      <Card className="p-6 bg-white shadow-lg rounded-xl flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">CRM basic</h2>
          <div className="flex items-baseline mb-6">
            <span className="text-[#00B0FF] text-4xl font-bold">€49</span>
            <span className="text-gray-500 ml-1">/ month</span>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>Goautodial/vicibox</li>
            <li>80 GO/ssd</li>
            <li>4GO/RAM</li>
            <li>1C</li>
            <li>jusqu'à 10 agents</li>
          </ul>
        </div>
        <Link href="/offers/voip">
          <Button className="mt-4 w-full bg-[#00B0FF] hover:bg-[#0091CC] text-white px-4 py-1 rounded-md text-sm">
            Voir l’offre
          </Button>
        </Link>
      </Card>

      {/* Card 4 */}
      <Card className="relative p-6 bg-white shadow-lg rounded-xl flex flex-col h-full overflow-hidden">
        <Badge className="absolute top-0 right-0 transform translate-x-[30%] -translate-y-[30%] rotate-45 bg-[#00B0FF] text-white px-8 py-1">
          Advanced
        </Badge>
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">CRM PREMIUM</h2>
          <div className="flex items-baseline mb-6">
            <span className="text-[#00B0FF] text-4xl font-bold">€79</span>
            <span className="text-gray-500 ml-1">/ month</span>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>Goautodial/vicibox</li>
            <li>150 GO/ssd</li>
            <li>8GO/RAM</li>
            <li>4C</li>
            <li>jusqu'à 25 agents</li>
          </ul>
        </div>
        <Link href="/offers/voip">
          <Button className="mt-4 w-full bg-[#00B0FF] hover:bg-[#0091CC] text-white px-4 py-1 rounded-md text-sm">
            Voir l’offre
          </Button>
        </Link>
      </Card>

    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="my-20 py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à essayer nos fonctionnalités ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Commencez un essai gratuit de 14 jours et découvrez comment nos solutions peuvent améliorer votre entreprise
          </p>
          <Link href="https://vocodata.com/auth/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Commencer l'essai gratuit
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

const mainFeatures = [
  {
    title: "Solutions VOIP Intégrées",
    description: "Systèmes de communication avancés adaptés aux besoins de votre entreprise",
    icon: Phone,
    subFeatures: [
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
    subFeatures: [
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
    subFeatures: [
      "Distribution intelligente des appels",
      "Chat en direct multicanal",
      "Intégration avec les réseaux sociaux",
      "Analyses de performance des agents",
    ],
  },
  {
    title: "Analyses Avancées",
    description: "Insights précieux sur les performances de vos équipes commerciales et support",
    icon: BarChart,
    subFeatures: [
      "Tableaux de bord personnalisables",
      "Rapports de performance en temps réel",
      "Analyse des tendances de vente",
      "Mesure de la satisfaction client",
    ],
  },
  {
    title: "Sécurité Avancée",
    description:
      "Protection des données de votre entreprise et de vos clients avec les technologies de sécurité les plus récentes",
    icon: Shield,
    subFeatures: [
      "Chiffrement de bout en bout",
      "Authentification multi-facteurs",
      "Sauvegarde automatique",
      "Conformité totale aux réglementations",
    ],
  },
  {
    title: "Intégration Facile",
    description: "Intégration transparente avec d'autres systèmes et applications",
    icon: Zap,
    subFeatures: [
      "API ouverte",
      "Intégration avec les systèmes ERP",
      "Connexion avec les plateformes e-commerce",
      "Intégration avec les outils marketing",
    ],
  },
]

const integrationFeatures = [
  "Accès instantané au dossier client lors de la réception d'un appel",
  "Enregistrement automatique de toutes les interactions client",
  "Création de tickets de support directement à partir des appels",
  "Suivi du statut des clients et de l'historique des interactions",
  "Analyse des modèles d'appels pour améliorer le service client",
  "Routage des appels vers l'employé approprié en fonction des données client",
]

const featureComparison = [
  {
    name: "Nombre d'utilisateurs",
    basic: "Jusqu'à 5",
    pro: "Jusqu'à 20",
    business: "Illimité",
  },
  {
    name: "Appels VOIP",
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    name: "Vidéoconférences",
    basic: "Jusqu'à 5 participants",
    pro: "Jusqu'à 20 participants",
    business: "Jusqu'à 100 participants",
  },
  {
    name: "Enregistrement d'appels",
    basic: "✓",
    pro: "✓",
    business: "✓",
  },
  {
    name: "Base de données clients",
    basic: "Basique",
    pro: "Avancée",
    business: "Avancée avec personnalisation complète",
  },
  {
    name: "Analyses et rapports",
    basic: "Basique",
    pro: "Avancé",
    business: "Avancé avec personnalisation complète",
  },
  {
    name: "Support technique",
    basic: "Email",
    pro: "Email + Chat",
    business: "24/7 avec gestionnaire de compte dédié",
  },
]

