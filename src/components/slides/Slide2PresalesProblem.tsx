import { Scale, PresentationIcon, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide2PresalesProblem() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-white to-[#F3E8FF]/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#9333EA] rounded-full blur-3xl" />
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
            Why Standard Pre-sales Stopped Working
          </h1>
        </motion.div>

        {/* Three Problem Sections */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F3E8FF] rounded-xl shadow-md p-8 flex items-start gap-6 hover:shadow-lg transition-shadow border-l-4 border-[#6B46C1]"
          >
            <div className="p-4 bg-white rounded-lg shrink-0">
              <Scale className="w-10 h-10 text-[#6B46C1]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#1A0B2E] mb-3">
                1. Formal Compliance ≠ Real Trust
              </h3>
              <ul className="space-y-2 text-lg text-[#2D1B69]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>Everyone has a license</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>Everyone has 'best practices' on slides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>Differences are not observable</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#F3E8FF] rounded-xl shadow-md p-8 flex items-start gap-6 hover:shadow-lg transition-shadow border-l-4 border-[#6B46C1]"
          >
            <div className="p-4 bg-white rounded-lg shrink-0">
              <PresentationIcon className="w-10 h-10 text-[#6B46C1]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#1A0B2E] mb-3">
                2. Presentations Don't Show System Behavior
              </h3>
              <ul className="space-y-2 text-lg text-[#2D1B69]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>No demonstration of detection, response, fault tolerance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>No understanding of <em>what exactly happens during an incident</em></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>Critical requirements remain 'on paper'</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-[#F3E8FF] rounded-xl shadow-md p-8 flex items-start gap-6 hover:shadow-lg transition-shadow border-l-4 border-[#6B46C1]"
          >
            <div className="p-4 bg-white rounded-lg shrink-0">
              <DollarSign className="w-10 h-10 text-[#6B46C1]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#1A0B2E] mb-3">
                3. As a Result — Decision Based on Price, Not Quality
              </h3>
              <ul className="space-y-2 text-lg text-[#2D1B69]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>Comparison by price</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>Comparison by promises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">•</span>
                  <span>Increased skepticism from technical buyers</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}