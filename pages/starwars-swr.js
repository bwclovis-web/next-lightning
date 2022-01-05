import CharacterCard from '../components/CharacterCard/CharacterCard';
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
const StarWarsPage = () =>  {

    const { data, error } = useSWR("https://swapi.dev/api/people",fetcher);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    
    return (
        <ul className="grid">
            {data.results?.map((item) => {
                return <CharacterCard key={item.created} data={item}/>
            })}
        </ul>
    )
}

export default StarWarsPage
