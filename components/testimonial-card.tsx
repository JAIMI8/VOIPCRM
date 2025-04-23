"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  name: string
  position: string
  delay?: number
}

export default function TestimonialCard({ quote, name, position, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-sm border border-slate-100"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-600 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
        <div>
          <div className="font-medium text-slate-900">{name}</div>
          <div className="text-sm text-slate-500">{position}</div>
        </div>
      </div>
    </motion.div>
  )
}

