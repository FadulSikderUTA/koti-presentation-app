/**
 * Image path utility for handling basePath in Next.js
 * Automatically applies basePath prefix for production deployment
 */

const BASE_PATH = '/presentation-app';

/**
 * Get the correct image path with basePath applied when needed
 * @param imagePath - The image path relative to public folder (e.g., '/data-flow.png', '/team/tony.jpg')
 * @returns The complete image path with basePath applied for production
 */
export function getImagePath(imagePath: string): string {
  // Ensure the path starts with /
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // In production, prefix with basePath
  // In development, use the path as-is
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on the basePath domain
    const isBasePath = window.location.pathname.startsWith(BASE_PATH);
    return isBasePath ? `${BASE_PATH}${normalizedPath}` : normalizedPath;
  } else {
    // Server-side: use environment detection
    const isProduction = process.env.NODE_ENV === 'production';
    return isProduction ? `${BASE_PATH}${normalizedPath}` : normalizedPath;
  }
}

/**
 * Get the base path for the application
 * @returns The basePath string or empty string for development
 */
export function getBasePath(): string {
  if (typeof window !== 'undefined') {
    const isBasePath = window.location.pathname.startsWith(BASE_PATH);
    return isBasePath ? BASE_PATH : '';
  } else {
    const isProduction = process.env.NODE_ENV === 'production';
    return isProduction ? BASE_PATH : '';
  }
}