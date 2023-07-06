
import "./globals.css"
import { Nunito } from "next/font/google"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/navigation/footer"
import Head from "next/head"


const inter = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Mont Poupet Bike Park",
  description: "Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains.", 
  twitter: {
    card: 'summary_large_image',
    title: 'Mont Poupet Bike Park',
    description: 'Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains.',
    creator: '@GamerBike39',
    images: ['/metaimg.jpg'],
  },
  openGraph: {
    type: 'website',
    url: 'https://mpbp-blog.vercel.app/',
    title: 'Mont Poupet Bike Park',
    description: 'Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains.',
    images: [
      {
        url: '/metaimg.jpg',
        width: 800,
        height: 600,
        alt: 'Mont Poupet Bike Park',
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="fr">
       <Head>
       {/* <!-- Primary Meta Tags --> */}
<title>Mont Poupet Bike Park</title>
<meta name="title" content="Mont Poupet Bike Park" />
<meta name="description" content="Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains." />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mpbp-blog.vercel.app/" />
<meta property="og:title" content="Mont Poupet Bike Park" />
<meta property="og:description" content="Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains." />
<meta property="og:image" content="/img/pistes/wazaa.webp" />

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://mpbp-blog.vercel.app/" />
<meta property="twitter:title" content="Mont Poupet Bike Park" />
<meta property="twitter:description" content="Venez découvrir le Mont Poupet Bike Park, un bike park enduro situé dans le Jura, à Salins-les-Bains." />
<meta property="twitter:image" content="/img/pistes/wazaa.webp" />

      </Head>
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

