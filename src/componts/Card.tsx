import { CardContainer } from "@/styles/components/Card";
import Image from "next/image";
import Link from "next/link";


export const PokeCard =({pokemon}:any)=>{
    return(
        <CardContainer>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
            width={150}
            height={120}
            alt={pokemon.id}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </CardContainer>
    )
}