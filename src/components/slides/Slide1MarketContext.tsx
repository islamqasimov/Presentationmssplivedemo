import { Shield, Building2, Network, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide1MarketContext() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B46C1] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9333EA] rounded-full blur-3xl" />
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
            A New Market with Strict Rules and High Competition
          </h1>
        </motion.div>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#6B46C1] hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#F3E8FF] rounded-lg">
                  <Shield className="w-8 h-8 text-[#6B46C1]" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-widest text-[#9333EA]">FACT 1</span>
              </div>
              <p className="text-lg text-[#2D1B69] leading-relaxed">
                Since July 17, 2023, Resolution CM AR №229 is in effect → Critical Information Infrastructure security became <strong>mandatory</strong>, not optional
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#6B46C1] hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#F3E8FF] rounded-lg">
                  <Building2 className="w-8 h-8 text-[#6B46C1]" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-widest text-[#9333EA]">FACT 2</span>
              </div>
              <p className="text-lg text-[#2D1B69] leading-relaxed">
                CII objects = government agencies, finance, energy, transport, telecom, healthcare, etc. → <strong>high cost of error and high provider responsibility</strong>
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#6B46C1] hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#F3E8FF] rounded-lg">
                  <Network className="w-8 h-8 text-[#6B46C1]" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-widest text-[#9333EA]">FACT 3</span>
              </div>
              <p className="text-lg text-[#2D1B69] leading-relaxed">
                Only <strong>4 licensed providers</strong> in the market (Company A, B, C, and us)
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Emphasized Conclusion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-br from-[#6B46C1] to-[#9333EA] rounded-xl shadow-xl p-8 border-2 border-[#9333EA] hover:shadow-2xl transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Trophy className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-widest text-white/90">CONCLUSION</span>
              </div>
              <p className="text-lg text-white leading-relaxed">
                Competition is <strong>not about having a license</strong>, but about <strong>trust, provability, and solution maturity</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: 1 }}>
        <line x1="50%" y1="40%" x2="50%" y2="60%" stroke="#9333EA" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="40%" y1="50%" x2="60%" y2="50%" stroke="#9333EA" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
