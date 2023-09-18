import './globals.css'

export const metadata = {
  title: 'ToDoList',
  description: 'Developed by Ahmed Hamza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
