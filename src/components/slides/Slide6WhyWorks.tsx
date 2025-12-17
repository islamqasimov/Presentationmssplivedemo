import { TrendingDown, Eye, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide6WhyWorks() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F3E8FF] to-transparent opacity-30" />

      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col px-32 py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl text-[#1A0B2E] tracking-tight">
            Engineering Logic of Live-Demo
          </h1>
        </motion.div>

        {/* Three Pillars */}
        <div className="flex-1 flex gap-8 items-stretch">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-[#F0FDF4] rounded-xl shadow-lg p-8 border-t-4 border-[#10B981]"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 bg-white rounded-lg w-fit mb-6">
                <TrendingDown className="w-12 h-12 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                1. Reducing Uncertainty
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-3 flex-1">
                <p>• Client sees system behavior during incident</p>
                <p>• Understanding of processes: detection → response → recovery</p>
                <p>• Fewer assumptions, more facts</p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-px bg-[#E9D5FF]" />

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-1 bg-[#F3E8FF] rounded-xl shadow-lg p-8 border-t-4 border-[#9333EA]"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 bg-white rounded-lg w-fit mb-6">
                <Eye className="w-12 h-12 text-[#9333EA]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                2. Observation Instead of Trust in Words
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-3 flex-1">
                <p>• Not "we can do it" but "here's how it happens"</p>
                <p>• Scenario verifiability</p>
                <p>• Transparency of SOC actions and automation</p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-px bg-[#E9D5FF]" />

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex-1 bg-[#EFF6FF] rounded-xl shadow-lg p-8 border-t-4 border-[#3B82F6]"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 bg-white rounded-lg w-fit mb-6">
                <ShieldCheck className="w-12 h-12 text-[#3B82F6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                3. Reducing Decision-Making Risk
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-3 flex-1">
                <p>• Risks identified before contract, not after implementation</p>
                <p>• Technical coordination simplified</p>
                <p>• Faster decision-making on client side</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8"
        >
          <div className="h-2 w-full bg-gradient-to-r from-[#10B981] via-[#9333EA] to-[#3B82F6] rounded-full opacity-20" />
        </motion.div>
      </div>

      {/* Geometric pattern */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 opacity-5">
        <svg className="w-full h-full">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <path d="M25,0 L50,14.43 L50,28.87 L25,43.3 L0,28.87 L0,14.43 Z" fill="none" stroke="#6B46C1" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
    </div>
  );
}
