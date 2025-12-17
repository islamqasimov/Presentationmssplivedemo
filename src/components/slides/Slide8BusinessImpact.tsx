import { TrendingUp, Clock, Handshake, Network } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide8BusinessImpact() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#6B46C1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

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
            How Live-Demo Affects Sales
          </h1>
        </motion.div>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F0FDF4] rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white rounded-lg w-fit mb-4">
                <TrendingUp className="w-10 h-10 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                1. Conversion Growth Without Dumping
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Solution chosen by quality, not price</p>
                <p>• Easier to justify premium positioning</p>
              </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#EFF6FF] rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white rounded-lg w-fit mb-4">
                <Clock className="w-10 h-10 text-[#3B82F6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                2. Deal Cycle Reduction
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Fewer explanation rounds</p>
                <p>• Faster technical coordination</p>
                <p>• Fewer returns to "think about it" stage</p>
              </div>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#F3E8FF] rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white rounded-lg w-fit mb-4">
                <Handshake className="w-10 h-10 text-[#9333EA]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                3. Increased Trust from Technical Buyers
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Process transparency</p>
                <p>• Risk understanding before contract</p>
                <p>• Fewer surprises during implementation</p>
              </div>
            </div>
          </motion.div>

          {/* Block 4 - Emphasized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-br from-[#6B46C1] to-[#9333EA] rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white/20 rounded-lg w-fit mb-4">
                <Network className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-white mb-4">
                4. Scalable Pre-sales
              </h3>
              <div className="text-lg text-white/95 space-y-2">
                <p>• Best experience is reproducible</p>
                <p>• Less dependency on specific specialists</p>
                <p>• Unified demonstration standard for all clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connecting lines between blocks */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: 0 }}>
          <line x1="50%" y1="35%" x2="50%" y2="65%" stroke="#6B46C1" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="35%" y1="50%" x2="65%" y2="50%" stroke="#6B46C1" strokeWidth="2" strokeDasharray="6 4" />
        </svg>
      </div>
    </div>
  );
}
