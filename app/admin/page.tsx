'use client';

import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navbar } from '@/components/Navbar';
import { useAuth } from '@/lib/hooks/useAuth';
import { Users, Wrench, Settings, BarChart } from 'lucide-react';

export default function AdminDashboardPage() {
  const { userData } = useAuth();

  // Check if user is admin
  if (!userData?.isAdmin) {
    return (
      <ProtectedRoute requireActive={true}>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ⛔ ไม่มีสิทธิ์เข้าถึง
              </h1>
              <p className="text-gray-600">
                หน้านี้สำหรับ Admin เท่านั้น
              </p>
              <Link href="/dashboard" className="text-pink-500 hover:underline mt-4 inline-block">
                กลับไปหน้าหลัก
              </Link>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requireActive={true}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              ⚙️ Admin Dashboard
            </h1>
            <p className="text-gray-600">
              ยินดีต้อนรับ, {userData?.displayName}! จัดการระบบได้ที่นี่
            </p>
          </div>

          {/* Admin Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Design Courses */}
            <Link
              href="/admin/ai-tools"
              className="card hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <Wrench className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    คอร์สโปรแกรม
                  </h3>
                  <p className="text-gray-600 text-sm">
                    จัดการคอร์ส Photoshop, Premiere ฯลฯ
                  </p>
                </div>
              </div>
            </Link>

            {/* Users */}
            <Link
              href="/admin/users"
              className="card hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ผู้ใช้งาน
                  </h3>
                  <p className="text-gray-600 text-sm">
                    จัดการผู้ใช้และแพ็คเกจ
                  </p>
                </div>
              </div>
            </Link>

            {/* Analytics */}
            <Link
              href="/admin/analytics"
              className="card hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <BarChart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    รายงานสถิติ
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ดูสถิติการเรียนและยอดขาย
                  </p>
                </div>
              </div>
            </Link>

            {/* Settings */}
            <Link
              href="/admin/settings"
              className="card hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <Settings className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ตั้งค่าระบบ
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ตั้งค่าทั่วไปของเว็บไซต์
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Back to Dashboard */}
          <div className="mt-8 text-center">
            <Link href="/dashboard" className="text-pink-500 hover:underline">
              ← กลับไปหน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
