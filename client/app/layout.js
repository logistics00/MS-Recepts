import './globals.css'

export const metadata = {
  title: 'Recepten',
  description: 'Your first NextJS app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
