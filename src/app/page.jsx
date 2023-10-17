import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>HOME PAGE</h1>

      <div>
        <Link href = "/produtos/tenis"> Tênis </Link> |
        <Link href = "/produtos/produto/tenis-preto"> Tênis Preto </Link> |
        <Link href = "/produtos/produto/camisa-xadrez"> Camisa </Link>
      </div>
    </>
  )
}
