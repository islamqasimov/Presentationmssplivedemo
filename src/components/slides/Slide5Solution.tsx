import { Play, Lock, MessageSquare, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide5Solution() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#9333EA] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#6B46C1] rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col px-32 py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl text-[#1A0B2E] tracking-tight mb-4">
            Live-Demo Platform as Part of Sales Process
          </h1>
          <p className="text-2xl text-[#6B46C1]">
            Unified client journey: from interest → to trust
          </p>
        </motion.div>

        {/* Funnel Visualization */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto w-full">
          {/* Level 1 - Widest */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full bg-gradient-to-r from-[#E9D5FF] to-[#F3E8FF] rounded-xl shadow-lg p-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white rounded-lg shrink-0">
                <Play className="w-10 h-10 text-[#6B46C1]" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-xs tracking-widest text-[#6B46C1] mb-2">LEVEL 1: Open Demonstration (before contact)</div>
                <div className="text-lg text-[#2D1B69] space-y-1">
                  <p>• Short incident videos</p>
                  <p>• Show: detection → response → result</p>
                  <p>• Formation of initial trust</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ArrowDown className="w-8 h-8 text-[#6B46C1]" strokeWidth={2} />
          </motion.div>

          {/* Level 2 - Medium */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-[85%] bg-gradient-to-r from-[#9333EA] to-[#7C3AED] rounded-xl shadow-lg p-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/20 rounded-lg shrink-0">
                <Lock className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-xs tracking-widest text-white/90 mb-2">LEVEL 2: Managed Live-Demo (after contact)</div>
                <div className="text-lg text-white space-y-1">
                  <p>• Access by invitation</p>
                  <p>• Real incident scenarios</p>
                  <p>• Observable system operation in real-time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ArrowDown className="w-8 h-8 text-[#6B46C1]" strokeWidth={2} />
          </motion.div>

          {/* Level 3 - Narrowest */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-[70%] bg-gradient-to-r from-[#6B46C1] to-[#2D1B69] rounded-xl shadow-xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white/20 rounded-lg shrink-0">
                <MessageSquare className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-xs tracking-widest text-white/90 mb-2">LEVEL 3: Dialogue with Technical Specialist</div>
                <div className="text-lg text-white space-y-1">
                  <p>• Answers to architecture questions</p>
                  <p>• Scenario mapping to client infrastructure</p>
                  <p>• Transition to design phase</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Target at bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-4"
          >
            <div className="w-16 h-16 rounded-full bg-[#10B981] flex items-center justify-center shadow-lg">
              <span className="text-3xl">🎯</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative path lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <path
          d="M 960 200 Q 960 300, 960 400 Q 960 500, 960 600"
          stroke="#6B46C1"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8 4"
        />
      </svg>
    </div>
  );
}
