import React, {useEffect, useState} from "react";
// @ts-ignore
import axios, {AxiosResponse} from 'axios';
import {List} from "../components/List";

export function CharacterList() {


    const [inputSearchBar, setInputSearchBar] = useState("");

    const inputHandler = async (e: { target: { value: string; }; }): Promise<any> => {
        const lowerCase = e.target.value.toLowerCase();
        await setInputSearchBar(lowerCase)
    }

    return (
        <div className="characterlist">
            <div className="container-sm">
                <h1>Character Lists on Persona 3 FES</h1>
                {/* search bar*/}
                <form className="d-flex container p-4" role="search">
                    <input onChange={inputHandler} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <div className="d-flex">
            </div>
            <List input={inputSearchBar}/>
        </div>
    )
}