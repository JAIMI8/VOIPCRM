"use client"

import { motion } from "framer-motion"

interface ValueCardProps {
  title: string
  description: string
  delay?: number
}

export default function ValueCard({ title, description, delay = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-slate-800 p-8 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  )
}

