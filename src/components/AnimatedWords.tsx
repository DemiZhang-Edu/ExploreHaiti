import React from 'react';
import { motion } from 'motion/react';

interface AnimatedWordsProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  wordClassName?: string;
  animationKey?: string | number;
}

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  text,
  className = '',
  staggerDelay = 0.06,
  wordClassName = '',
  animationKey = 0
}) => {
  // Split text into words while keeping punctuation
  const words = text.split(/(\s+)/);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: 'blur(4px)',
      scale: 0.96
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 140
      }
    }
  };

  return (
    <motion.span
      key={animationKey}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {words.map((chunk, index) => {
        // If it's pure whitespace, preserve spacing
        if (/^\s+$/.test(chunk)) {
          return <span key={`space-${index}`}>{chunk}</span>;
        }

        return (
          <motion.span
            key={`word-${index}-${chunk}`}
            variants={wordVariants}
            className={`inline-block ${wordClassName}`}
          >
            {chunk}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
