'use client';

import { motion } from 'framer-motion';
import { textVariant } from '@/app/utils/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      variants={textVariant(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {text}
    </motion.div>
  );
} 