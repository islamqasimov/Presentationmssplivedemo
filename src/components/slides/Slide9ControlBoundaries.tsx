import { LayoutGrid, CheckSquare, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide9ControlBoundaries() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6B46C1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col px-32 py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl text-[#1A0B2E] tracking-tight">
            How We Manage Risks and Avoid 'Endless Project'
          </h1>
        </motion.div>

        {/* Three Sections */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F3E8FF] rounded-xl shadow-lg p-8 flex items-start gap-6 border-l-4 border-[#6B46C1]"
          >
            <div className="p-4 bg-white rounded-lg shrink-0">
              <LayoutGrid className="w-10 h-10 text-[#6B46C1]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#6B46C1] mb-3">
                Clear Initiative Framework
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Limited scenario volume</p>
                <p>• Limited access (pre-sales only)</p>
                <p>• Use in real negotiations, not in production</p>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#EFF6FF] rounded-xl shadow-lg p-8 flex items-start gap-6 border-l-4 border-[#3B82F6]"
          >
            <div className="p-4 bg-white rounded-lg shrink-0">
              <CheckSquare className="w-10 h-10 text-[#3B82F6]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#3B82F6] mb-3">
                Clear Continuation Criteria
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-2">
                <p>• Is demo being used in deals?</p>
                <p>• Does it help accelerate technical coordination?</p>
                <p>• Is there client interest?</p>
              </div>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-[#F0FDF4] via-[#FEF3C7] to-[#FEF2F2] rounded-xl shadow-lg p-8 flex items-start gap-6 border-l-4 border-[#10B981]"
          >
            <div className="p-4 bg-white rounded-lg shrink-0">
              <GitBranch className="w-10 h-10 text-[#10B981]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#10B981] mb-3">
                Decision Points
              </h3>
              <div className="text-lg text-[#2D1B69] space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-[#10B981]">•</span>
                  <span>Continue and develop</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-[#F59E0B]">•</span>
                  <span>Adjust format</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 text-[#EF4444]">•</span>
                  <span>Stop without losses</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative safety elements */}
      <div className="absolute top-32 right-32 opacity-10">
        <div className="w-24 h-24 border-4 border-[#6B46C1] rounded-lg rotate-12" />
      </div>
      <div className="absolute bottom-32 left-32 opacity-10">
        <div className="w-32 h-32 border-4 border-[#10B981] rounded-full" />
      </div>
    </div>
  );
}