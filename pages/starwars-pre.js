import React from 'react'
import CharacterCard from '../components/CharacterCard/CharacterCard';

export async function getStaticProps() {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json()
    const returnData = JSON.parse(JSON.stringify(data))

    return {
        props: {
            data: returnData
        }
    }
}

const StarWarsPage = ({data}) =>  {
    return (
        <ul className="grid">
            {data?.results?.map((item) => {
                return <CharacterCard key={item.created} data={item}/>
            })}
        </ul>
    )
}

export default StarWarsPage


