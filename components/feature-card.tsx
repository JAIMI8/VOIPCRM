"use client"

import { motion } from "framer-motion"
import { CheckCircle, type LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  subFeatures: string[]
  delay?: number
}

export default function FeatureCard({ icon: Icon, title, description, subFeatures, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-sm border border-slate-100"
    >
      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-cyan-500" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {subFeatures.map((subFeature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-slate-600">{subFeature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

