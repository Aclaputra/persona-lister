import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./api/CharacterAPI";
import './App.css';
// @ts-ignore
import * as CharacterAPI from 'api/CharacterAPI';
import {Home} from "./pages/Home";
import {CharacterList} from "./pages/CharacterList";
import {PersonaList} from "./pages/PersonaList";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<CharacterList/>}/>
                <Route path="/personas" element={<PersonaList/>}/>
            </Routes>
        </Router>
    )
}
