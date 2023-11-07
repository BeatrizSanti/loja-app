import Link from "next/link";


export default function NotFound() {
  return (
    <div>

        <h1>OOPS‼️‼️ ERROR 404‼️</h1>

        <p>Sorry, the page you are looking for does not exist</p>
        <br/>
        <Link href="/">Voltar...</Link>
    </div>
  )
}