"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  delay?: number
}

export default function ServiceCard({ icon: Icon, title, description, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
    >
      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-cyan-500" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-slate-600">
            <span className="text-cyan-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/features" className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium">
        En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </motion.div>
  )
}

