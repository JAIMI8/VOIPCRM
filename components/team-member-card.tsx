"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  position: string
  delay?: number
}

export default function TeamMemberCard({ name, position, delay = 0 }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="w-40 h-40 mx-auto bg-slate-200 rounded-full overflow-hidden mb-4">
        <Image
          src="/placeholder.svg?height=160&width=160"
          alt={name}
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
      <p className="text-slate-600">{position}</p>
    </motion.div>
  )
}

