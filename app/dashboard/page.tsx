'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navbar } from '@/components/Navbar';
import { LockOverlay } from '@/components/LockOverlay';
import { PackageBadge } from '@/components/PackageBadge';
import { FloatingContactButton } from '@/components/FloatingContactButton';
import { useAuth } from '@/lib/hooks/useAuth';
import { useAITools } from '@/lib/hooks/useAITools';
import { canAccessContent } from '@/lib/utils/accessControl';
import { Clock, Video, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const { userData } = useAuth();
  const [photoError, setPhotoError] = useState(false);

  return (
    <ProtectedRoute requireActive={true}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <FloatingContactButton />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  ยินดีต้อนรับ, {userData?.displayName}! 👋
                </h1>
                <p className="text-xl text-pink-50">
                  เลือกคอร์สโปรแกรมที่คุณสนใจและเริ่มเรียนได้เลย
                </p>
              </div>
              {userData?.photoURL && !photoError ? (
                <img
                  src={userData.photoURL}
                  alt={userData.displayName}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-xl hidden md:block"
                  onError={() => {
                    console.warn('⚠️ Failed to load user photo in dashboard');
                    setPhotoError(true);
                  }}
                  referrerPolicy="no-referrer"
                />
              ) : userData && !userData.photoURL ? null : (
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl hidden md:flex items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-white text-3xl font-bold">
                  {userData?.displayName?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Package Info Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-pink-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-pink-50 p-3 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">แพ็คเกจปัจจุบัน</p>
                  <div className="flex items-center gap-2">
                    <PackageBadge packageId={userData?.package || null} size="lg" />
                    {userData?.packageExpiry && (
                      <span className="text-sm text-gray-500">
                        (หมดอายุ: {new Date(userData.packageExpiry).toLocaleDateString('th-TH')})
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-500">
                    {userData?.progress ? Object.keys(userData.progress).length : 0}
                  </p>
                  <p className="text-sm text-gray-600">คอร์สที่เรียน</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {userData?.progress
                      ? Object.values(userData.progress).reduce((acc, p: any) => acc + (p.watchedVideos?.length || 0), 0)
                      : 0}
                  </p>
                  <p className="text-sm text-gray-600">วิดีโอที่ดูแล้ว</p>
                </div>
              </div>

              {!userData?.package && (
                <Link
                  href="/profile"
                  className="btn-primary whitespace-nowrap"
                >
                  ติดต่อ Admin เพื่อเลือกแพ็คเกจ
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <AIToolsTab userPackage={userData?.package || null} />
        </div>
      </div>
    </ProtectedRoute>
  );
}

// AI Tools Tab Component
function AIToolsTab({ userPackage }: { userPackage: string | null }) {
  const { tools, loading } = useAITools();
  const { userData } = useAuth();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [filteredTools, setFilteredTools] = useState(tools);

  useEffect(() => {
    let filtered = [...tools];

    // Search filter from Navbar
    if (searchQuery) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTools(filtered);
  }, [tools, searchQuery]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="spinner h-12 w-12 mx-auto mb-4" />
        <p className="text-gray-600">กำลังโหลด...</p>
      </div>
    );
  }

  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">ยังไม่มีคอร์สโปรแกรม</p>
      </div>
    );
  }

  return (
    <>
      {/* Results count */}
      {searchQuery && (
        <div className="mb-4 text-sm text-gray-600">
          {filteredTools.length > 0 ? (
            <>แสดง {filteredTools.length} จาก {tools.length} โปรแกรม</>
          ) : (
            <div className="text-center py-12 card">
              <p className="text-gray-600">ไม่พบโปรแกรมที่ค้นหา "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}

      {/* Tools Grid */}
      {filteredTools.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const hasAccess = canAccessContent(userPackage, tool.requiredPackage);
            const sanitizedToolId = tool.id.replace(/\./g, '_');
            const toolProgress = userData?.progress?.[sanitizedToolId];

            const watchedCount = toolProgress?.watchedVideos?.length || 0;
            const totalVideos = tool.videos?.length || 0;
            const progress = totalVideos > 0 ? Math.round((watchedCount / totalVideos) * 100) : 0;

            return (
              <div key={tool.id} className="relative group">
                <Link
                  href={hasAccess ? `/tool/${tool.id}` : '#'}
                  className={`card h-full block ${!hasAccess ? 'cursor-not-allowed' : ''}`}
                >
                  {/* Icon/Image */}
                  {tool.imageUrl ? (
                    <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={tool.imageUrl}
                        alt={tool.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="text-5xl mb-4">{tool.icon}</div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">{tool.description}</p>

                  {/* Video Count Badge */}
                  {totalVideos === 0 ? (
                    <div className="mb-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-yellow-50 border border-yellow-300 rounded-md">
                        <Video className="w-4 h-4 text-yellow-600" />
                        <span className="text-xs font-medium text-yellow-700">รออัพเดตคลิป</span>
                      </div>
                    </div>
                  ) : totalVideos <= 3 ? (
                    <div className="flex items-center gap-1.5 text-sm mb-3 px-2.5 py-1.5 bg-blue-50 border border-blue-200 rounded-md">
                      <Video className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-blue-700">{totalVideos} คลิป</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-sm mb-3 px-2.5 py-1.5 bg-green-50 border border-green-200 rounded-md">
                      <Video className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-green-700">{totalVideos} คลิป</span>
                    </div>
                  )}

                  {/* Progress Bar */}
                  {hasAccess && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>ความคืบหน้า</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-400 to-pink-500 h-2 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Lock Overlay */}
                  {!hasAccess && <LockOverlay requiredPackage={tool.requiredPackage} />}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
