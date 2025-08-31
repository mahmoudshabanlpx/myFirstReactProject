import { useState } from "react";

export default function Home() {
    let[count,setCount]=useState(0);
    return (
        <div>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, necessitatibus.</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>dencrement</button>
            <p>Counter : {count}</p>
        </div>
    );
}