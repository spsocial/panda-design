import Link from 'next/link'
import Image from 'next/image'
import { Palette } from 'lucide-react'
import { FloatingContactButton } from '@/components/FloatingContactButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingContactButton />

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/panda-logo.avif"
                alt="Panda Design Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
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
            <a href="https://lin.ee/PEF8E2P" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-500 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition-colors text-lg">
              ติดต่อสอบถาม / สมัครเรียน
            </a>
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
          <h2 className="text-3xl font-bold text-center mb-12">คอร์สเรียน</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI ADS MASTERY */}
            <div className="card hover:shadow-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">AI ADS MASTERY</h3>
              <div className="text-3xl font-bold text-pink-500 mb-4">
                ฿1,499
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">เทคนิคโฆษณาด้วย AI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">สร้างคอนเทนต์โฆษณา</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">วิเคราะห์ตลาด</span>
                </li>
              </ul>
              <a href="https://lin.ee/PEF8E2P" target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">เลือกคอร์สนี้</a>
            </div>

            {/* PREMIER PRO */}
            <div className="card hover:shadow-2xl">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-2">PREMIER PRO</h3>
              <p className="text-sm text-gray-600 mb-3">(ตัดต่อวิดีโอ)</p>
              <div className="text-3xl font-bold text-pink-500 mb-4">
                ฿1,499
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">ตัดต่อวิดีโอมืออาชีพ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Color Grading</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Motion Graphics</span>
                </li>
              </ul>
              <a href="https://lin.ee/PEF8E2P" target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">เลือกคอร์สนี้</a>
            </div>

            {/* GRAPHIC DESIGN 101 */}
            <div className="card hover:shadow-2xl border-pink-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                แนะนำ
              </div>
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">GRAPHIC DESIGN 101</h3>
              <div className="text-3xl font-bold text-pink-500 mb-4">
                ฿3,500
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Photoshop เต็มรูปแบบ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Illustrator มืออาชีพ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">หลักการออกแบบ</span>
                </li>
              </ul>
              <a href="https://lin.ee/PEF8E2P" target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">เลือกคอร์สนี้</a>
            </div>

            {/* PACKAGE DESIGN */}
            <div className="card hover:shadow-2xl">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">PACKAGE DESIGN</h3>
              <div className="text-3xl font-bold text-pink-500 mb-4">
                ฿4,500
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">ออกแบบบรรจุภัณฑ์</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">3D Mockup</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Print Production</span>
                </li>
              </ul>
              <a href="https://lin.ee/PEF8E2P" target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">เลือกคอร์สนี้</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/panda-logo.avif"
              alt="Panda Design Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold">PANDA DESIGN</span>
          </div>
          <p className="text-gray-400">
            © 2025 PANDA DESIGN. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
