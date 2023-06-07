import {useEffect, useState} from "react";
import axios from "axios";

export function List(props: any) {
    interface Characters {
        id : number;
        name : string;
        location : string;
        image : string;
    }
    const [characters, setCharacters] = useState<Characters[]>([]);

    // NOTE : buat state characters dapat di search dan di tampilkan pad jsx
    const [filteredData, setFilteredData] = useState<Characters[]>(props.input);
    const [wordEntered, setWordEntered] = useState<string>("");

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
    // const filteredData = characters.filter((el) => {
    //     if (props.input === '') {
    //         console.log(el)
    //         return el;
    //     } else {
    //         console.log(el.name.toLowerCase().includes(props.input))
    //         return el.name.toLowerCase().includes(props.input);
    //     }
    // });

    useEffect((): void => {
        loadCharacters().catch(e => console.log(e));
    }, []);
    return (
        // @ts-ignore
        <div className="">
            <h1>searched data</h1>
            {/*{filteredData.map((item : Characters, index: number) => {*/}
            {/*    <ul key={index}>*/}
            {/*        <li key="name_{index}">{item.name}</li>*/}
            {/*    </ul>*/}
            {/*})}*/}
            <hr/>
            <div className="d-flex">
                {/* NOTE: manual iterasi data */}
                {characters.map(item => (
                    <div className="d-flex">
                        <img src={item.image} className="border border-success p-2 mb-2 border-opacity-25 rounded-circle shadow-lg"alt="img" width="250"/>
                        <div className="fw-bold">
                            <p className="text-uppercase">{item.name}</p>
                            <p>from {item.location}<br></br>
                                having Fool Persona<br/>
                                likes to do Foolish Things<br/>
                                he is a main character<br/>
                                and protagonist in Persona 3 FES
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}