"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  value: string
  label: string
  delay?: number
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-cyan-400 mb-2">{value}</div>
      <div className="text-slate-300">{label}</div>
    </motion.div>
  )
}

