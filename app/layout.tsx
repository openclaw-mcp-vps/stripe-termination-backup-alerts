import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Termination Backup Alerts — Early Warning for Payment Risk',
  description: 'Monitor payment patterns and flag potential Stripe account termination risks before they happen. Protect your revenue with real-time alerts.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7c821f26-ae96-46f2-ac5e-d8e44cfe1522"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
