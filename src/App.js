import React from 'react';
import Card from './Card';
import Cdata from './Cdata';
import './App.css';


const App=()=>{

    const ncard=(val,index)=>{return(  <Card 
        key={val.id}
        isrc={val.isrc}
        title={val.sname}
        link={val.link}
        span={val.span}
       />)}
       
       
    return(<>

    <h1 className="heading">My Favourite Netflix Series</h1>
    <div className="main_div">
      {Cdata.map(ncard)}
       </div>
       </>
        
    )
} 

export default App;