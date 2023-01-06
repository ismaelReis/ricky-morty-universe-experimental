
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head /> 
      <body>
        <header>hello</header>
        {children}</body>
    </html>
  )
}
