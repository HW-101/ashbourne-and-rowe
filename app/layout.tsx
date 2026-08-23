import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600'] })
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600'] })

export const metadata: Metadata = { title: 'Ashbourne & Rowe | London & Country Property Specialists', description: 'Independent property specialists representing remarkable homes across London and the English countryside.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f1eb', userScalable: false }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${serif.variable} ${sans.variable} bg-background`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
