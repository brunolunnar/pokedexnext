
import Image from 'next/image'

export const getStaticPaths = async () => {
  const maxPokemons = 251
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  const paths = data.results.map((pokemon:any, index:any) => {
    return {
      params: { pokemonId: index.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context:any) => {
  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }
}

export default function Pokemon({ pokemon }:any) {
  console.log(pokemon)
  return (
    <div >
      <h1>{pokemon.name}</h1>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
            width={150}
            height={120}
            alt={pokemon.id}
            />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div>
          {pokemon.types.map((item:any, index:any) => (
            <span
              key={index}
             
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}