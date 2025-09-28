'use client'

import styles from './landing.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src="/logo.svg" alt="Logo" width={72} height={72} className={styles.logo} />
        <h1 className={styles.title}>Name of Your Product</h1>
        <p className={styles.subtitle}>
          Description of your Product
        </p>

        <div className={styles.actions}>
          <button className={styles.primary} onClick={() => router.push('/auth')}>
            Get Started
          </button>
        </div>

        <section className={styles.features}>
          <h2>What You Can Do</h2>
          <ul>
            <li>
              Feaure placeholder 1
            </li>
            <li>
              Feaure placeholder 2
            </li>
            <li>
              Feaure placeholder 3
            </li>
            <li>
              Secure login with Google or Email
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} App Name Here. All rights reserved.
        </footer>
      </main>
    </div>
  )
}
