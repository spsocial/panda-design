import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PANDA DESIGN - เว็บสอนโฟโต้ช็อป สอนตัดต่อวีดีโอ สอนอีลาส',
  description: 'แพลตฟอร์มเรียนรู้ออนไลน์สำหรับผู้ที่ต้องการพัฒนาทักษะด้าน Graphic Design, Video Editing และ Illustration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
