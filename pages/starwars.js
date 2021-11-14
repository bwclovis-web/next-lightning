import { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard/CharacterCard';

const StarWarsPage = () =>  {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://swapi.dev/api/people')
            const data = await res.json()

            setCharacters(data.results)
        }
        fetchData()
    },[]);

    
    return (
        <ul className="grid">
            {characters?.map((item) => {
                return <CharacterCard key={item.created} data={item}/>
            })}
        </ul>
    )
}

export default StarWarsPage
