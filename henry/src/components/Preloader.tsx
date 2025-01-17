import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Server, Cpu, Wifi } from 'lucide-react';

const SmartPreloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        if (next >= 100) clearInterval(timer);
        return next > 100 ? 100 : next;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const iconSet = [Code, Database, Cloud, Server, Cpu, Wifi];

  const hexagonPoints = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i * Math.PI) / 3 - Math.PI / 2;
    const radius = 60;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-slate-900/95 z-50"
    >
      <div className="relative w-96 h-96">
        {/* Animated background gradients */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0) 70%)',
              'radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(168,85,247,0) 70%)',
              'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0) 70%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 blur-2xl"
        />

        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.circle
            cx="192"
            cy="192"
            r="150"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-indigo-500/20"
          />
          <motion.circle
            cx="192"
            cy="192"
            r="150"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            transition={{ duration: 5, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Hexagon with icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          {hexagonPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: point.x,
                y: point.y,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative"
              >
                {React.createElement(iconSet[index], {
                  className: "w-8 h-8 text-indigo-400",
                  strokeWidth: 1.5,
                })}
                <motion.div
                  className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Status text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 bottom-10 mt-12 text-center"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-indigo-300 text-sm font-medium"
          >
            {progress < 30
              ? "Initializing..."
              : progress < 60
              ? "Loading Resources..."
              : progress < 90
              ? "Preparing Data..."
              : "Almost Ready..."}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SmartPreloader;