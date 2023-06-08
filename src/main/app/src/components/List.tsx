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
    const [searchInput, setSearchInput] = useState('');
    let [filteredData, setFilteredData] = useState<String>("");


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

    const characterToLowerCase = async () => {
        characters.filter((item) => {
            console.log("test + " + item.name)
            // if (item.name == props.input) {
            //     console.log("found " + item.name)
            // }
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
    }


    // const filteredData: Characters[] = characters.filter((item: Characters) => {
    //     return item
    //     // return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    // })

    // const filterData = (input: string) => {
    //     console.log("hello " + props.input)
    //     characters.filter((item) => {
    //         if (String(item) == input) {
    //             // @ts-ignore
    //             setFilteredData = item
    //             console.log(item)
    //         }
    //     })
    // }

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
        characterToLowerCase()
        // filterData(props.input)
    }, []);
    // @ts-ignore

    return (
        <div className="">
            <h1>searched data</h1>
            {/*{filteredData.map((item : Characters, index: number) => {*/}
            {/*    <ul key={index}>*/}
            {/*        <li key="name_{index}">{item.name}</li>*/}
            {/*    </ul>*/}
            {/*})}*/}
            {
                props.input
            }
            <h1>filtered data{filteredData}</h1>
            <h1>{searchInput}</h1>
            <hr/>
            <div className="d-flex">
                {/* NOTE: manual iterasi data */}
                {/*{characters.map(item => (*/}
                {/*    <div className="d-flex">*/}
                {/*        <img src={item.image} className="border border-success p-2 mb-2 border-opacity-25 rounded-circle shadow-lg"alt="img" width="250"/>*/}
                {/*        <div className="fw-bold">*/}
                {/*            <p className="text-uppercase">{item.name}</p>*/}
                {/*            <p>from {item.location}<br></br>*/}
                {/*                having Fool Persona<br/>*/}
                {/*                likes to do Foolish Things<br/>*/}
                {/*                he is a main character<br/>*/}
                {/*                and protagonist in Persona 3 FES*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*))}*/}
                {characters.map(item => {
                    if (props.input == item.name.toLowerCase()) {
                        return (
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
                        )
                    } else {
                        return (
                            // bisa ke search jika nama benar benar "makoto yuki" not "makoto" 
                            <div>
                                {item.name.toLowerCase()}
                            </div>
                        )
                    }

                }) }
            </div>
        </div>
    )
}