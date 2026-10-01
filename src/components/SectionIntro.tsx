import { motion } from 'framer-motion'

export function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="section-intro"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </motion.div>
  )
}
