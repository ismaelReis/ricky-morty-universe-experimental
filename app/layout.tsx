import './globals.css'
import styles from './Header.module.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={styles.root}>
        <header className={styles.header}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/locations">Locations</a>
            </li>
          </ul>

        </header>
        <div className={styles.main}>
        {children}
        </div>
        <div>
          <footer>
            <p>Footer</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
