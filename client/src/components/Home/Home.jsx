import React, { useState } from 'react'
import styles from './Home.module.css'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Detail from "../Detail/Detail"
function Home(props) {
    const [start, setStart] = useState("&#9733;")
    const { id, name, image, genre,rating } = props

    
    if (rating > 0 && rating < 1) {
        // const start = "&#9733;"
        // setStart(&#9733;)
    } else {
        // const start = "&#9733;&#9733;&#9733;&#9733;"
        // setStart(start)
    }

    return (

        <div className={styles.gamesCards}>

            <div className={styles.name}>
            <p>{name}</p>
            </div>


            <ul>
            {genre?.map((gen,index)=><li key={index}>{gen}</li>)}
            </ul>
            
            
            <div className={styles.gamesimg}>

                <NavLink to={`/Detail/${id}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>
            <div className={styles.rating}>
            <p>&#9733; {rating}</p>
            </div>


        </div>

    )
}

export default Home