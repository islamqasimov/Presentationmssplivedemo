import { CheckCircle, Globe, Shield, Target, QrCode } from 'lucide-react';
import { motion } from 'motion/react';

export function Slide7AlreadyStarted() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#10B981] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6B46C1] rounded-full blur-3xl" />
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
            Hypothesis Testing in Practice
          </h1>
        </motion.div>

        {/* Top Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <blockquote className="text-2xl text-[#6B46C1] italic max-w-4xl mx-auto">
            "To avoid discussing the idea abstractly,<br />
            I began forming a working demonstration concept"
          </blockquote>
        </motion.div>

        {/* Main Content - Left and Right */}
        <div className="flex-1 flex gap-12">
          {/* Left Side - What's Done (60%) */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#10B981]"
            >
              <div className="p-3 bg-[#F0FDF4] rounded-lg shrink-0">
                <CheckCircle className="w-8 h-8 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-[#2D1B69] pt-3">
                Formed <strong>unified user scenario</strong> for pre-sales demo
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#10B981]"
            >
              <div className="p-3 bg-[#F0FDF4] rounded-lg shrink-0">
                <Globe className="w-8 h-8 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-[#2D1B69] pt-3">
                Implemented <strong>platform prototype</strong> to demonstrate approach
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 border-l-4 border-[#10B981]"
            >
              <div className="p-3 bg-[#F0FDF4] rounded-lg shrink-0">
                <Shield className="w-8 h-8 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-[#2D1B69] pt-3">
                Defined <strong>incident types and display logic</strong>
              </p>
            </motion.div>

            {/* Bottom Text Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-[#F3E8FF] rounded-xl p-6 flex items-start gap-4 mt-4"
            >
              <div className="p-3 bg-white rounded-lg shrink-0">
                <Target className="w-8 h-8 text-[#6B46C1]" strokeWidth={1.5} />
              </div>
              <div className="text-lg text-[#2D1B69]">
                <p className="mb-2"><strong>Goal of this stage:</strong></p>
                <p>👉 Test the format and reaction</p>
                <p>👉 Before investing in full implementation</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - QR Code Section (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-[40%] flex flex-col items-center justify-center"
          >
            <div className="bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF] rounded-xl shadow-xl p-10 border-4 border-[#6B46C1]">
              {/* QR Code Placeholder - Easily Replaceable */}
              <div className="bg-white rounded-lg p-6 mb-6 aspect-square flex items-center justify-center">
                <QrCode className="w-48 h-48 text-[#6B46C1]" strokeWidth={1} />
              </div>
              
              {/* Label */}
              <div className="text-center">
                <p className="text-xl text-[#2D1B69] mb-2">
                  Scan to view prototype
                </p>
                <p className="text-sm text-[#6B46C1] bg-white px-4 py-2 rounded-lg inline-block">
                  [your-url-here]
                </p>
              </div>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-500 italic mt-4 text-center max-w-xs">
              Note: QR code is a replaceable component
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
