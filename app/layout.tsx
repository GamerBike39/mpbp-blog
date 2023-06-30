import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { Navigation } from "@/components/navigation/navigation"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
          <div className="mx-auto">
            {/* <header className="fixed z-50 ">
              <div className="flex items-center justify-between">
           
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/blog">Blog</Link>
                </nav>
              </div>
            </header> */}
            <Navigation />
            <main>{children}</main>
          </div>
          <Analytics />
      </body>
    </html>
  )
}
