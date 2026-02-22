import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react'; // Assuming icons from lucide-react

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay, ease: "easeOut" }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 flex flex-col gap-4 group hover:border-white/20 transition-colors duration-300"
    >
      <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-neutral-100">{title}</h3>
      <p className="text-neutral-400 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
}

