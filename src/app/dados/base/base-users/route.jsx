import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function POST(request,response){

    //recebendo arquivo json.
    const file = fs.readFile(process.cwd() + "/src/app/dados/base/db.json" , "utf8");


    //Converter o arquivo para pode realizar o trabalho
    const dados = await JSON.parse(file);

    //Capturar o request e os dados
    const dadosDoRequest = await request.json();

    console.log(dadosDoRequest)

    //Gerando uma resposta:response.
    return NextResponse.json({"status":true});



}

