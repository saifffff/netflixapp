import React from 'react';
import Card from './Card';
import Cdata from './Cdata';
import './App.css';


const App=()=>{
    return(<>

    <div className="main_div">
        <Card 
        isrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfSaVJADtNW0f28A0YJ1sGeS4oSMfpkZryxeNNZaUEVKgkeVpV"
        title="How I Met Your Mother"
        link="https://www.imdb.com/title/tt0460649/"
        span="A Netflix Original Series"
        />

        <Card 
        isrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfSaVJADtNW0f28A0YJ1sGeS4oSMfpkZryxeNNZaUEVKgkeVpV"
        title="How I Met Your Mother"
        link="https://www.imdb.com/title/tt0460649/"
        span="A Netflix Original Series"
        />

        <Card 
        isrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfSaVJADtNW0f28A0YJ1sGeS4oSMfpkZryxeNNZaUEVKgkeVpV"
        title="How I Met Your Mother"
        link="https://www.imdb.com/title/tt0460649/"
        span="A Netflix Original Series"
        />
       </div>
       </>
        
    )
}

export default App;