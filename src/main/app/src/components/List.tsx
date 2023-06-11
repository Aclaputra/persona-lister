import {useEffect, useState} from "react";
import axios from "axios";

export function List(props: any) {
    interface Characters {
        id : number;
        name : string;
        location : string;
        image : string;
    }

    /**
     * NOTE : Send characters use state to List.tsx
     */
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

    const getFilteredItems = (query: string, items: any[]) => {
        return items.filter((character: { name: string | any[]; }) =>
            Object.values(character).join('').toLowerCase().includes(query.toLowerCase()))
    }

    const filteredItems = getFilteredItems(props.input, characters)
    const hello = 1
    useEffect((): void => {
        loadCharacters().catch(e => console.log(e));
    }, []);

    return (
        <div className="">
            {/*<h1>searched data</h1>*/}
            <hr/>
            <div className="d-flex justify-content-around flex-wrap">
                {filteredItems.length >= 0 ? filteredItems.map((character) => (
                    <div key={character.id} className="container bg-secondary rounded d-flex text-light shadow-lg p-4 m-2">
                        <img src={character.image} alt={character.name} className="rounded shadow-lg"/>
                        <div className="container">
                            <h2>{character.name}</h2>
                            <p>{character.location}</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum quam quisquam reiciendis voluptate? Animi, aperiam blanditiis dolore ducimus fuga hic laboriosam libero magnam non repellat rerum temporibus veniam?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum quam quisquam reiciendis voluptate? Animi, aperiam blanditiis dolore ducimus fuga hic laboriosam libero magnam non repellat rerum temporibus veniam?</p>
                        </div>
                    </div>
                )): <div>hello</div>}

            </div>
        </div>
    )
}