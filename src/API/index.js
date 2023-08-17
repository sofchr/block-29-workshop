import { useState, useEffect } from "react";

export default function fetchAllPuppies() {
    const [puppies, setPuppies] = useState([]);
    useEffect(() => {
        async function fetchAllPuppies() {
            try {
                const response = await fetch(
                    "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
                );
                const result = await response.json();
                setPuppies(result.data.players);
                console.log(result.data.players)
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllPuppies();
    }, []);
}