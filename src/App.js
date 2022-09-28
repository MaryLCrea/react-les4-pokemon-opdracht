import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    const [joke, setJoke] = useState ([]);
    const [pica, setPica] = useState ([]);
    const [api, setApi] = useState ('https://pokeapi.co/api/v2/pokemon');

    useEffect(() => {
        async function fetchJoke() {
            try {
                const response = await axios.get(api);
                const response2 = await axios.get(response.data.next);
                console.log(response.data);
                setJoke(response.data.results[0].name);
                setPica(response.data.results[1].name);
                console.log(response.data.next);

            } catch(e) {
                console.error(e);
            }
        }
        fetchJoke();
    }, []);

    return (
        <div>
            <h1> Pokemon opdracht : </h1>
            <p>{joke}</p>
            <p>{pica}</p>
            <button type="button" onClick={() => {

            }}>Next</button>
        </div>
    );
}
export default App;



export default App;
