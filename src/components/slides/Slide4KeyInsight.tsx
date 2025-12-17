import { Quote, Shield, FileText, X, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide4KeyInsight() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6B46C1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col px-32 py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl text-[#1A0B2E] tracking-tight">
            The Root Problem of Pre-sales
          </h1>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <blockquote className="text-3xl text-[#6B46C1] leading-relaxed max-w-5xl mx-auto">
            "We sell systems that must work in crisis situations,<br />
            through static slides and promises"
          </blockquote>
        </motion.div>

        {/* Split Screen Comparison */}
        <div className="flex-1 flex gap-6 relative">
          {/* Left Side - What's Really Important */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 bg-[#F3E8FF] rounded-xl p-10 shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#10B981] rounded-lg">
                  <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-[#1A0B2E]">
                  What's Really Important for CII
                </h3>
              </div>
              <div className="space-y-4 text-lg text-[#2D1B69]">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-[#6B46C1]">•</span>
                  <span>Incident detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-[#6B46C1]">•</span>
                  <span>Response time</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-[#6B46C1]">•</span>
                  <span>System behavior under load</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-[#6B46C1]">•</span>
                  <span>Transparency of SOC actions</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - The Gap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative">
              <X className="w-20 h-20 text-[#EF4444]" strokeWidth={3} />
              <div className="absolute -inset-4 border-4 border-[#EF4444] rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Right Side - What Pre-sales Shows */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 bg-gray-100 rounded-xl p-10 shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-400 rounded-lg">
                  <FileText className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-[#1A0B2E]">
                  What Pre-sales Shows
                </h3>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-gray-400">•</span>
                  <span>Architectural diagrams</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-gray-400">•</span>
                  <span>Feature lists</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-gray-400">•</span>
                  <span>Compliance requirements</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Broken connection lines */}
          <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <line x1="48%" y1="50%" x2="52%" y2="50%" stroke="#EF4444" strokeWidth="3" strokeDasharray="8 8" />
          </svg>
        </div>

        {/* Bottom Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 bg-gradient-to-r from-[#6B46C1] to-[#9333EA] rounded-xl p-6 shadow-xl"
        >
          <div className="flex items-center justify-center gap-4 text-white">
            <Eye className="w-8 h-8" strokeWidth={1.5} />
            <p className="text-2xl">
              System value is <strong>not observable before purchase</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}