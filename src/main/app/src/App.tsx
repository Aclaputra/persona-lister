import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./api/CharacterAPI";
import './App.css';
// @ts-ignore
import * as CharacterAPI from 'api/CharacterAPI';
import {Home} from "./pages/Home";
import {CharacterList} from "./pages/CharacterList";
import {PersonaList} from "./pages/PersonaList";
import {Navbar} from "./layout/Navbar";
import {CharacterDetail} from "./pages/details/CharacterDetail";
import {PersonaDetail} from "./pages/details/PersonaDetail";
import {Footer} from "./layout/Footer";

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/characters" element={<CharacterList/>}/>
                <Route path="/character/:name" element={<CharacterDetail/>}/>
                <Route path="/personas" element={<PersonaList/>}/>
                <Route path="/persona/:name" element={<PersonaDetail/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}
