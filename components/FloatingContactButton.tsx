'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingContactButton() {
  const lineUrl = 'https://lin.ee/PEF8E2P';

  return (
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-400 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 group"
      style={{
        animation: 'gentle-bounce 3s ease-in-out infinite'
      }}
      title="ติดต่อ Admin"
    >
      <MessageCircle className="w-7 h-7" />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          ติดต่อ Admin เพื่อสมัครคอร์ส
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>

      {/* Pulse animation - เบาลง */}
      <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-10"></div>

      {/* Custom gentle bounce animation */}
      <style jsx>{`
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </a>
  );
}
