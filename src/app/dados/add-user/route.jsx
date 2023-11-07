import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function POST(request){
    const {name, email, phone} = await request.json;
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json','utf8');
    const dados = JSON.parse(file);

    const novoUser = {
        id:dados.usuarios[dados.usuarios.length-1].id+1,
        name,
        email,
        phone
    };

    dados.usuarios.push(novoUser);

    await fs.writeFile(process.cwd() + '/src/app/dados/db.json', JSON.stringify(dados));
    return NextResponse.json({ message: ` ${novoUser.name} adicionado com sucesso!`})
}