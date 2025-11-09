'use client';

import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navbar } from '@/components/Navbar';
import { useAuth } from '@/lib/hooks/useAuth';
import { Settings, Database, Users, Wrench, Info } from 'lucide-react';

export default function AdminSettingsPage() {
  const { userData } = useAuth();

  if (!userData?.isAdmin) {
    return (
      <ProtectedRoute requireActive={true}>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">⛔ ไม่มีสิทธิ์เข้าถึง</h1>
              <Link href="/dashboard" className="text-pink-500 hover:underline">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              ⚙️ ข้อมูลระบบและการตั้งค่า
            </h1>
            <p className="text-gray-600">ดูข้อมูลระบบและจัดการเว็บไซต์</p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Link href="/admin/users" className="card hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <Users className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">จัดการผู้ใช้</p>
                  <p className="text-xs text-gray-600">อนุมัติและจัดการแพ็คเกจ</p>
                </div>
              </div>
            </Link>

            <Link href="/admin/ai-tools" className="card hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <Wrench className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">คอร์สโปรแกรม</p>
                  <p className="text-xs text-gray-600">จัดการคอร์ส Design/Video</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Database Info */}
          <div className="card mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-50 rounded-lg">
                <Database className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">ข้อมูลระบบ</h2>
                <p className="text-sm text-gray-600">สถานะและข้อมูลทางเทคนิค</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Database:</span>
                <span className="text-sm font-medium text-gray-900">Firebase Firestore</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Authentication:</span>
                <span className="text-sm font-medium text-gray-900">Google OAuth</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">เวอร์ชัน:</span>
                <span className="text-sm font-medium text-gray-900">2.0.0 (PANDA DESIGN)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-600">สถานะระบบ:</span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  ออนไลน์
                </span>
              </div>
            </div>
          </div>

          {/* Admin Info */}
          <div className="card mb-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6" />
              <h2 className="text-xl font-bold">ข้อมูล Admin</h2>
            </div>
            <div className="space-y-2">
              <p>
                <strong>ชื่อ:</strong> {userData?.displayName}
              </p>
              <p>
                <strong>อีเมล:</strong> {userData?.email}
              </p>
              <p>
                <strong>UID:</strong> {userData?.uid}
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-50 rounded-lg">
                <Info className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">ข้อมูลเว็บไซต์</h2>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">ชื่อเว็บไซต์:</span>
                <span className="text-sm font-medium text-gray-900">PANDA DESIGN</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">คำอธิบาย:</span>
                <span className="text-sm font-medium text-gray-900">เว็บสอนโฟโต้ช็อป สอนตัดต่อวีดีโอ</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">ช่องทางติดต่อ:</span>
                <span className="text-sm font-medium text-gray-900">Facebook Messenger</span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link href="/admin" className="text-pink-500 hover:underline inline-flex items-center gap-2">
              ← กลับไปหน้า Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
