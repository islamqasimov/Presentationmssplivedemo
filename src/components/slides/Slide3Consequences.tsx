import { Swords, Equal, Users, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide3Consequences() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-white via-[#F3E8FF]/20 to-[#E9D5FF]/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EF4444] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl" />
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
            What We Lose If We Don't Change
          </h1>
        </motion.div>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-[#FEF2F2] rounded-lg w-fit mb-4">
                <Swords className="w-10 h-10 text-[#EF4444]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                1. We Compete Where We Have No Advantage
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Price and timelines instead of expertise</p>
                <p>• Technical maturity doesn't convert to sales</p>
              </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-gray-100 rounded-lg w-fit mb-4">
                <Equal className="w-10 h-10 text-gray-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                2. Complex Solutions Perceived as 'Identical'
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Difference between providers is not observable</p>
                <p>• Quality ≠ argument for choice</p>
              </div>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-[#FEF3C7] rounded-lg w-fit mb-4">
                <Users className="w-10 h-10 text-[#F59E0B]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1A0B2E] mb-4">
                3. Pre-sales Doesn't Scale
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Dependency on specific people</p>
                <p>• Impossible to reproduce best experience for all clients</p>
              </div>
            </div>
          </motion.div>

          {/* Block 4 - Emphasized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all border-2 border-[#EF4444]"
          >
            <div className="flex flex-col h-full">
              <div className="p-3 bg-white/20 rounded-lg w-fit mb-4">
                <TrendingDown className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-white mb-4">
                4. Loss of Strategic Positioning
              </h3>
              <div className="text-lg text-white/95 space-y-2">
                <p>• We are 'just another licensed provider'</p>
                <p>• Instead of role as technological partner for CII</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#EF4444]/20 rounded-lg rotate-12" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-[#F59E0B]/20 rounded-full" />
    </div>
  );
}
