'use client';

import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { GoogleSignInButton } from '@/components/GoogleSignInButton';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-6">
          <span className="text-4xl">🐼</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            PANDA DESIGN
          </span>
        </Link>

        <h2 className="text-center text-3xl font-bold text-gray-900">
          เข้าสู่ระบบ
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          เข้าสู่ระบบด้วย Google Account ของคุณ
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-12 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
          {/* Information Box */}
          <div className="mb-8 p-4 bg-pink-50 border border-pink-200 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-pink-900 font-medium mb-1">
                  ระบบเข้าสู่ระบบด้วย Google
                </p>
                <p className="text-xs text-pink-700">
                  เพื่อความปลอดภัยและสะดวกรวดเร็ว เราใช้ระบบ Google OAuth ในการเข้าสู่ระบบ ไม่จำเป็นต้องจดจำรหัสผ่าน
                </p>
              </div>
            </div>
          </div>

          {/* Google Sign-In Button */}
          <GoogleSignInButton />

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              การเข้าสู่ระบบหมายถึงคุณยอมรับ{' '}
              <Link href="/terms" className="text-pink-500 hover:text-pink-600">
                ข้อกำหนดการใช้งาน
              </Link>
              {' '}และ{' '}
              <Link href="/privacy" className="text-pink-500 hover:text-pink-600">
                นโยบายความเป็นส่วนตัว
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
