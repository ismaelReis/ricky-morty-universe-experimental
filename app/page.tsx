import styles from './Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <div
      className={styles.wrapper}
    >
      <Link href={"/locations"}>
        <Image
          className={styles.portal}
          src="/portal.svg"
          alt="Portal"
          priority
          width={200}
          height={200}
        />
      </Link>
    </div>
  )
}
