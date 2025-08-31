import { useState } from "react";

export default function About() {
    let[random,setRandom]=useState(0);
    return (
        <div>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, necessitatibus.</p>
            <button onClick={()=>setRandom(Math.round(Math.random()*100))}>getRandom Number</button>
             <p>Counter : {random}</p>
        </div>
    );
}