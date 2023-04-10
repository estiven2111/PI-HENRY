import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cards.module.css";
import Home from '../Home/Home';
import Paginates from '../Paginate/Paginates';
import { getGames } from '../../redux/actions';
// import load from "../assets/giphy.gif"


function Cards() {
    const dispatch = useDispatch()
    const { allCharacters } = useSelector(state => state)
    const { GamesDB } = useSelector(state => state)
    const { GamesAPI } = useSelector(state => state)
    const { filterGameGener } = useSelector(state => state)
    const { ban } = useSelector(state => state)
    const { filter } = useSelector(state => state)
    const [page, setPage] = useState(1)
    let sliceVideogame = []
    let valor = 0;

    if (ban === 1) valor = allCharacters?.length
    if (ban === 2) valor = GamesDB?.length
    if (ban === 3) valor = GamesAPI?.length
    if (filter === 1) valor = filterGameGener?.length

    useEffect(() => {
        dispatch(getGames(ban))
    }, [])
    useEffect(() => {

        setPage(1)
    }, [ban])
    //? utilizo una bandera para identificar el filtrado del estado 
    if (ban === 1) sliceVideogame = allCharacters?.slice((page - 1) * 15, (page - 1) * 15 + 15);
    if (ban === 2) sliceVideogame = GamesDB?.slice((page - 1) * 15, (page - 1) * 15 + 15);
    if (ban === 3) sliceVideogame = GamesAPI?.slice((page - 1) * 15, (page - 1) * 15 + 15);
    if (filter === 1) sliceVideogame = filterGameGener?.slice((page - 1) * 15, (page - 1) * 15 + 15);

   
    return (
        <div className={styles.containerpp}>

            <h1>Home</h1>

            <div className={styles.paginate}>
                {sliceVideogame.length !== 0 ? <h3>pagina {page}</h3> : ""}
                {sliceVideogame.length !== 0 ? <Paginates page={page} setPage={setPage} allVideogamesLength={valor} /> : ""}
                {sliceVideogame.length === 0 ? <img src="../assets/loading.gif" alt="" /> : ""}
            </div>
            <div className={styles.container}>
                {

                    sliceVideogame?.map(card =>

                        <Home
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            image={card.background_image}
                            genre={card.genres}
                            rating={card.rating}
                            
                        />)

                }
            </div>
        </div>
    )
}

export default Cards