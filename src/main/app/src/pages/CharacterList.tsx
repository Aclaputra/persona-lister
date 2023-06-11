import React, {useEffect, useState} from "react";
// @ts-ignore
import axios, {AxiosResponse} from 'axios';
import {List} from "../components/List";

export function CharacterList() {


    const [inputSearchBar, setInputSearchBar] = useState("");

    const inputHandler = async (e: string): Promise<any> => {
        setInputSearchBar(Object.values(e).join('').toLowerCase())

        console.log(inputSearchBar)
    }

    return (
        <div className="characterlist bg-dark text-secondary">
            <div className="container-sm">
                {/*<h1 className="text-center"

                {/* search bar*/}
                <form className="d-flex container p-4 flex-column" role="search">
                    <input onChange={(e) => inputHandler(e.target.value)} value={inputSearchBar}
                           className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
                    <div className="input-group pt-2">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Sort By Location</label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option defaultValue="location">Location</option>
                            <option value="gekkoukan high school">Gekkoukan High School</option>
                        </select>
                    </div>
                </form>

            </div>

            {/*<div className="d-flex">*/}
            {/*</div>*/}
            <List input={inputSearchBar}/>
        </div>
    )
}