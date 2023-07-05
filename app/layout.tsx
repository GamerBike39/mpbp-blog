
import "./globals.css"
import { Nunito } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/navigation/footer"


const inter = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Mont Poupet Bike Park",
  description: "Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains.",
  openGraph: {
    locale: "fr_FR",
    url: "https://www.mpbp-blog.vercel.app",
    title: "Mont Poupet Bike Park",
    description: "Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Mont Poupet Bike Park"
      }
    ]
  },
  
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
          <Footer />
      </body>
    </html>
  )
}

