import type {Metadata} from 'next';
import {Inter,Playfair_Display} from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/animation/CustomCursor';
import ScrollProgress from '@/components/animation/ScrollProgress';
const inter=Inter({subsets:['latin'],variable:'--font-inter'}); const playfair=Playfair_Display({subsets:['latin'],variable:'--font-playfair'});
export const metadata:Metadata={title:"Tula's International School | The Modern Gurukul",description:"A modern homepage redesign for Tula's International School, Dehradun."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}><ScrollProgress/><CustomCursor/>{children}</body></html>}
