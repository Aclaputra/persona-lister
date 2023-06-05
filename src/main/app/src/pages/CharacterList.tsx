import {useEffect, useState} from "react";
// @ts-ignore
import axios, {AxiosResponse} from 'axios';

export function CharacterList() {
    interface Characters {
        id : number;
        name : string;
        location : string;
        image : string;
    }

    const [characters, setCharacters] = useState<Characters[]>([]);

    const loadCharacters = async (): Promise<any> => {
        await axios({
            url: "http://localhost:8081/api/v1/character/list?page=0&size=2",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "token"
            },
        })
            .then(data => {
                // console.log(data.data.data.content[0])
                setCharacters(data.data.data.content)
            })
            .catch(error => console.log(error))
    }

    useEffect((): void => {
        loadCharacters().catch(e => console.log(e));
    }, []);

    return (
        <div className="characterlist">
            <h1>Character Lists on Persona 3 FES</h1>
            <div>
            {characters.map(item => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.location}</p>
                    <img src={item.image} alt="img"/>
                </div>
            ))}
            </div>
        </div>
    )
}