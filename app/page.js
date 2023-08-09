import styles from './page.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Hi, I'm Kostya!</h1>
    </main>
  )
}


 
// If loading a variable font, you don't need to specify the font weight

