import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/locations">
            Locations
          </Link>
        </li>
        <li>
          <Link href="/character/5">
            Character
          </Link>
        </li>
      </ul>
      
    </div>
  )
}
