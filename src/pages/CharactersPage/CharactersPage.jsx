import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery/Gallery";
export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);
     useEffect(() => {
    const getCharacters = async () => {
        const res = await axios("https://rickandmortyapi.com/api/character");
        setCharacters(res.data.results)
    }
         getCharacters(); 
}, [])   

    return <div>
     <Gallery list={characters}/>
       </div>
}
