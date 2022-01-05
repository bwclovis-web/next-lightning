import CharacterCard from '../components/CharacterCard/CharacterCard';
import useSWR from "swr";
import { useState } from 'react';
const fetcher = (url) => fetch(url).then((res) => res.json());

const StarWarsPage = () =>  {
    const [getData, setGetData] = useState(false)
    const { data, error } = useSWR(() => getData ? "https://swapi.dev/api/starships" : null ,fetcher, { refreshInterval: 1000 });

    if (error) return "An error has occurred.";
    
    return (
        <>
            <h1>Ships</h1>
            <ul className="grid">
                {data?.results?.map((item) => {
                    return <CharacterCard key={item.created} data={item}/>
                })}
            </ul>
            <button onClick={() =>setGetData(true)}>Get ships</button>
        </>
    )
}

export default StarWarsPage
