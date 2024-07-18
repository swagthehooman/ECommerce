import type { Metadata } from 'next'
import './index.css'
import Navigation from './components/navigation/Navigation'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
    title: 'ShopSavvy',
    description: 'ShopSavvy, an ecommerce website',
    icons: {
        icon: '/assets/images/brand.png',
        apple: '/assets/images/brand.png'
    }

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                <div id="root">{children}</div>
                <Footer />
            </body>
        </html>
    )
}