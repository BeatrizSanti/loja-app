import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EletroView() {
    
    let items;

    try {
        const response = await fetch('http://localhost:3000/dados/eletronicos/0');
        items = await response.json();
        
        console.log(response)
        console.log(items)

    } catch (error) {
        console.log(error)
        redirect('/error')
    }
    
    return (
        <div>
            <h1>Eletrônicos</h1>

            <div>
                
            </div>
            <div className="card-eletro-view">
                <ul>
                    {
                        items.map((item)=>(
                            <Link href={`/consumo/eletro-view/${item.id}`}>
                                <li key={items.id}>
                                    <h2>{item.nome}</h2>
                                    <figure>
                                        <Image
                                            src={item.img}
                                            alt={item.descricao}
                                            width={300}
                                            height={200}
                                            /> 
                                        <figcaption>{item.descricao} - R$ <span>{item.preco}</span></figcaption>
                                    </figure>  
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}