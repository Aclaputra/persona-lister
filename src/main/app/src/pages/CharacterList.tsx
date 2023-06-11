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
        <div className="characterlist bg-dark text-secondary d-flex">
            <div className="container col-xs-10 col-sm-2 m-0 border-end border-secondary">
                <div className="container-fluid">
                    <div className="container row m-4">
                        <a className="navbar-brand text-light fw-bold" href="#">GAME FUN FACT</a>
                        <span className="text-secondary">game info forum</span>
                    </div>
                </div>

                <div className="container rounded text-light">
                    <div className="container d-flex flex-column mb-4">

                        <span className="fw-bold py-2 fs-5">Home</span>
                        <hr/>
                        <span className="fw-bold py-2 fs-5">Explore</span>
                        <hr/>
                        <span className="fw-bold py-2 fs-5">Notifications</span>
                        <hr/>
                        <span className="fw-bold py-2 fs-5">Messages</span>
                    </div>
                </div>
            </div>
            <div className="container col-xs-10 col-sm-7 m-0">

                <div className="container">
                    <List input={inputSearchBar}/>
                </div>
            </div>


            <div className="container col-xs-10 col-sm-3 m-0 border-start border-secondary">
                <div className="container-sm m-0">
                    {/* search bar*/}
                    <form className="d-flex container p-4 flex-column" role="search">
                        <input onChange={(e) => inputHandler(e.target.value)} value={inputSearchBar}
                               className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
                        <div className="input-group pt-2">
                            <p>Sort by :</p>
                            <div className="container">
                                <select className="form-select" id="inputGroupSelect01">
                                    <option defaultValue="location">Location</option>
                                    <option value="gekkoukan high school">Gekkoukan High School</option>
                                </select>
                            </div>
                        </div>

                        <hr/>

                        <div className="container bg-secondary rounded text-light">
                            <p className="fw-bold py-2 fs-5">You might like</p>
                            <div className="container d-flex flex-column mb-4">
                                <span>John Firdaus</span>
                                <hr/>
                                <span>Makoto Sutiyep</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}