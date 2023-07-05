
import "./globals.css"
import { Nunito } from "next/font/google"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/navigation/footer"


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
        className={`antialiased min-h-screen bg-white text-slate-900  ${inter.className}`}
      >
          <div className="mx-auto">
            <Navigation />
            <main>{children}</main>
          </div>
          <Footer />
      </body>
    </html>
  )
}

