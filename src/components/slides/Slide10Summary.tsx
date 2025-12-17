import { Quote, Eye, Target, Star, Handshake, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide10Summary() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-white via-[#F3E8FF]/30 to-[#E9D5FF]/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B46C1] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9333EA] rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col px-32 py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl text-[#1A0B2E] tracking-tight">
            From Presentation — to Experience
          </h1>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12 relative"
        >
          <Quote className="w-12 h-12 text-[#E9D5FF] absolute -top-6 left-1/2 -translate-x-1/2" />
          <blockquote className="text-3xl bg-gradient-to-r from-[#6B46C1] to-[#9333EA] bg-clip-text text-transparent leading-relaxed max-w-5xl mx-auto">
            "Live-Demo platform transforms the sales process<br />
            from a set of slides<br />
            into an observable technical experience"
          </blockquote>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex gap-12 mb-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl text-[#6B46C1] mb-6">
              Briefly about the solution:
            </h3>
            <div className="space-y-4 text-lg text-[#2D1B69]">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">👁️</span>
                <p>Client <strong>sees</strong> how the system works during an incident</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🔍</span>
                <p>Technical value becomes observable before purchase</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🎯</span>
                <p>Pre-sales stops being explanation and becomes demonstration</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl text-[#9333EA] mb-6">
              Strategic effect:
            </h3>
            <div className="space-y-4 text-lg text-[#2D1B69]">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">⭐</span>
                <p>Differentiation among licensed providers</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🤝</span>
                <p>Growing trust from technical buyers</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">📈</span>
                <p>Foundation for scalable and mature sales process</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-[#6B46C1] via-[#9333EA] to-[#6B46C1] rounded-xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-center gap-4 text-white">
            <ArrowRight className="w-10 h-10" strokeWidth={2} />
            <p className="text-2xl">
              This is how CII security should be sold — through <strong>observable value</strong>, not promises
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute top-20 right-20 opacity-20"
        >
          <Star className="w-24 h-24 text-[#6B46C1]" strokeWidth={1} fill="#6B46C1" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-20 left-20 opacity-20"
        >
          <Target className="w-20 h-20 text-[#9333EA]" strokeWidth={1} />
        </motion.div>
      </div>
    </div>
  );
}
