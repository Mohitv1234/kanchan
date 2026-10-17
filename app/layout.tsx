import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
export const metadata: Metadata = { title: 'Kanchan Mehndi Artist | Beautiful Mehndi for Special Moments', description: 'Bridal, Arabic, simple and custom mehndi designs by Kanchan.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>; }
