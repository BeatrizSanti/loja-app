import Link from "next/link";


export default function Cabecalho() {
    return (
        <div>
            <header className="bg-teal-900 text-white h-16 ">
                <nav className="flex flex-row justify-around justify-items-center">
                    <Link className="link-cabecalho" href="/consumo/eletro-view">Eletrônicos</Link>
                    <Link className="link-cabecalho" href="/produtos/produto/estaticas/tenis">Tenis</Link>
                    <Link className="link-cabecalho" href="/produtos/produto/dinamicas/estranho/tenis-preto">Tenis Preto</Link>
                    <Link className="link-cabecalho" href="/produtos/produto/dinamicas/vestuario/camisa-xadrez">Camisa-x</Link>
                    <Link className="link-cabecalho" href="/consumo/user-view">Usuários</Link>
                </nav>
            </header>
        </div>
    )
}