import type { Metadata } from 'next'
import './index.css'
import Navigation from './components/navigation/Navigation'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
    title: 'ShopSavvy',
    description: 'ShopSavvy, an ecommerce website',

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