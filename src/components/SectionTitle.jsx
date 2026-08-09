import { motion } from "framer-motion";

export default function SectionTitle({ number, title, text }) {
  return (
    <motion.div className="section-title" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span>{number} /</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}