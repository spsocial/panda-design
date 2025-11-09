import { UserData } from '@/lib/hooks/useAuth';

/**
 * Check if user can access content based on packages array
 * Supports both old single package and new multiple packages
 */
export function canAccessContent(
  userPackages: string[] | string | null,
  requiredPackage: string
): boolean {
  // Convert to array if it's a single package (backward compatibility)
  const packages = Array.isArray(userPackages)
    ? userPackages
    : userPackages
    ? [userPackages]
    : [];

  if (packages.length === 0) return false;

  // Check if user has the required package in their packages array
  return packages.includes(requiredPackage);
}

/**
 * Check if user can access the platform (is authenticated and active)
 */
export function canUserAccess(userData: UserData | null): boolean {
  // Must have user data
  if (!userData) return false;

  // Must be active (approved by admin)
  if (!userData.isActive) return false;

  // Must have at least one package assigned (check both old and new format)
  const hasPackage = (userData.packages && userData.packages.length > 0) || userData.package;
  if (!hasPackage) return false;

  // Check if package is expired
  if (userData.packageExpiry && userData.packageExpiry < new Date()) {
    return false;
  }

  return true;
}

/**
 * Check if user is admin
 */
export function isAdmin(userData: UserData | null): boolean {
  return userData?.isAdmin === true;
}

/**
 * Get package display name (single package)
 */
export function getPackageName(packageId: string | null): string {
  const packageNames: Record<string, string> = {
    'ai-ads-mastery': 'AI ADS MASTERY',
    'premier-pro': 'PREMIER PRO',
    'graphic-design-101': 'GRAPHIC DESIGN 101',
    'package-design': 'PACKAGE DESIGN',
  };

  return packageId ? packageNames[packageId] || 'ไม่มีคอร์ส' : 'ไม่มีคอร์ส';
}

/**
 * Get packages display names (multiple packages)
 */
export function getPackagesNames(packages: string[] | null): string[] {
  if (!packages || packages.length === 0) return [];

  const packageNames: Record<string, string> = {
    'ai-ads-mastery': 'AI ADS MASTERY',
    'premier-pro': 'PREMIER PRO',
    'graphic-design-101': 'GRAPHIC DESIGN 101',
    'package-design': 'PACKAGE DESIGN',
  };

  return packages.map(pkg => packageNames[pkg] || pkg);
}

/**
 * Get provider display name
 */
export function getProviderName(provider: 'email' | 'google'): string {
  return provider === 'google' ? 'Google' : 'Email/Password';
}

/**
 * Get provider icon
 */
export function getProviderIcon(provider: 'email' | 'google'): string {
  return provider === 'google' ? '🌐' : '🔒';
}
