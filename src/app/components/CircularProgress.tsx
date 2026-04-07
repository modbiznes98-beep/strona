import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  label: string;
  delay?: number;
}

export function CircularProgress({ percentage, label, delay = 0 }: CircularProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  const circumference = 2 * Math.PI * 45; // promień = 45
  const progress = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(progress, percentage, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => {
            setDisplayValue(Math.round(latest));
          }
        });

        return () => controls.stop();
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, percentage, delay, progress]);

  const strokeDashoffset = useTransform(
    progress,
    [0, 100],
    [circumference, 0]
  );

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90 w-32 h-32">
          {/* Tło koła */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          {/* Animowane koło */}
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            className="text-blue-600"
          />
        </svg>
        {/* Procent w środku */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-blue-600">
            {displayValue}%
          </span>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-700 font-medium">{label}</div>
    </div>
  );
}
