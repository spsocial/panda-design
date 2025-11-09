import Link from 'next/link'
import { Palette } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐼</span>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                PANDA DESIGN
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="btn-primary"
              >
                เข้าสู่ระบบ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            เรียนรู้ Design & Video Editing แบบมืออาชีพ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pink-50">
            เรียนโฟโต้ช็อป ตัดต่อวิดีโอ และออกแบบกราฟิก ทั้งหมดในที่เดียว
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="bg-white text-pink-500 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition-colors text-lg">
              ทดลองเรียนฟรี - เข้าสู่ระบบด้วย Google
            </Link>
          </div>
        </div>
      </section>

      {/* AI Tools Infinite Carousel */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">โปรแกรมที่สอนในคอร์ส</h2>
          <p className="text-center text-gray-600 mb-12">เรียนรู้เครื่องมือมืออาชีพสำหรับ Designer และ Video Editor</p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex gap-8 px-4">
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎨</span>
                <span className="font-bold text-gray-800">Photoshop</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">✏️</span>
                <span className="font-bold text-gray-800">Illustrator</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎬</span>
                <span className="font-bold text-gray-800">Premiere Pro</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">⚡</span>
                <span className="font-bold text-gray-800">After Effects</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎥</span>
                <span className="font-bold text-gray-800">DaVinci Resolve</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🖼️</span>
                <span className="font-bold text-gray-800">Canva</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎞️</span>
                <span className="font-bold text-gray-800">Final Cut Pro</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">📐</span>
                <span className="font-bold text-gray-800">InDesign</span>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 px-4">
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎨</span>
                <span className="font-bold text-gray-800">Photoshop</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">✏️</span>
                <span className="font-bold text-gray-800">Illustrator</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎬</span>
                <span className="font-bold text-gray-800">Premiere Pro</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">⚡</span>
                <span className="font-bold text-gray-800">After Effects</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎥</span>
                <span className="font-bold text-gray-800">DaVinci Resolve</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🖼️</span>
                <span className="font-bold text-gray-800">Canva</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">🎞️</span>
                <span className="font-bold text-gray-800">Final Cut Pro</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-md whitespace-nowrap">
                <span className="text-3xl">📐</span>
                <span className="font-bold text-gray-800">InDesign</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">แพ็คเกจเรียน</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="card hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold text-pink-500 mb-4">
                ฿499
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>พื้นฐาน Photoshop</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>พื้นฐาน Premiere Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>เทคนิคตัดต่อพื้นฐาน</span>
                </li>
              </ul>
              <Link href="/login" className="btn-primary w-full block text-center">เลือกแพ็คเกจนี้</Link>
            </div>

            {/* All-in-One Package */}
            <div className="card hover:shadow-2xl border-pink-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                แนะนำ
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold text-pink-500 mb-4">
                ฿999
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>ทุกอย่างในแพ็คเกจ Starter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Illustrator เต็มรูปแบบ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>After Effects และ Motion Graphics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>เทคนิคขั้นสูงและ Portfolio</span>
                </li>
              </ul>
              <Link href="/login" className="btn-primary w-full block text-center">เลือกแพ็คเกจนี้</Link>
            </div>

            {/* Pro Package */}
            <div className="card hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Expert</h3>
              <div className="text-3xl font-bold text-pink-500 mb-4">
                ฿1,499
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>ทุกอย่างใน Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>3D Design และ Cinema 4D</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Color Grading ขั้นสูง</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>ปรึกษางานส่วนตัว 1-on-1</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">เร็วๆ นี้</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🐼</span>
            <span className="text-xl font-bold">PANDA DESIGN</span>
          </div>
          <p className="text-gray-400">
            © 2025 PANDA DESIGN. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
