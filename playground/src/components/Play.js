import React from "react";

export default function Play(props){
    return(
        <section>
            <h1>
                {props.arr.map((value, index) => (
                        <li key={index}>
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </li>
                     ))}
    
            </h1>
        </section>
    )
}