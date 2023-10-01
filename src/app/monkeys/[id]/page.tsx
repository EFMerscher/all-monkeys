import Link from 'next/link'

interface MonkeysProps {
  params: {
    id: string
  }
}

export default function Monkeys ({ params }: MonkeysProps) {
  return (
    <div>
     <h1> Monkey: {params.id}</h1>
     <Link href="/">Home</Link>
    </div>
  )
}