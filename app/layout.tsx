
import "./globals.css"
import { Nunito } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { Navigation } from "@/components/navigation/navigation"


const inter = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Mont Poupet Bike Park",
  description: "Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains.",
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
            <Navigation />
            <main>{children}</main>
          </div>
          <Analytics />
      </body>
    </html>
  )
}

