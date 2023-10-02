import Link from 'next/link'
import { Header } from '@/components/header'

interface MonkeysProps {
  params: {
    id: string
  }
}

export default function Monkeys ({ params }: MonkeysProps) {
  return (
    <div>
      <Header />
     <h1> Monkey: {params.id}</h1>
     <Link href="/">Home</Link>
    </div>
  )
}