import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stylesDetail from "./Detail.module.css"
import NavBar from '../NavBar/NavBar';
function Detail() {
    const { detailId } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        async function details() {



            console.log("detalle id es", detailId)
            const dataDetal = await axios.get(`http://localhost:3007/videogames/${detailId}`);
            const getDetail = dataDetal.data
            console.log("el get es ", getDetail)
            if (getDetail.name) {
                setDetail(getDetail);
            } else {
                window.alert("No se encontro personaje con este ID")
            }


        }
        details()

    }, [])

    return (
        <div>
            <NavBar />
            <div className={stylesDetail.container}>



<div className={stylesDetail.name1}>
<h1>Detalles del juego {detail.name}</h1>
</div>
                
                {/* <div > */}
                    <div className={stylesDetail.name}>
                        <h2>Nombre: {detail.name}</h2>
                    </div>

                    
                    <div className={stylesDetail.released}>
                        <h2>Publicacion: {detail.released}</h2>
                        <h2>rating: {detail.rating}</h2>
                    </div>

                    <div className={stylesDetail.platform}>
                        <h2>Plataformas:</h2>
                        <ul>
                            {detail.platform?.map((pla, index) => <li key={index}>{pla}</li>)}
                        </ul>
                    </div>

                    <div className={stylesDetail.genre}>
                        <h2>generos:</h2>
                        <ul>
                            {detail.genres?.map((gen, index) => <li key={index}>{gen}</li>)}
                        </ul>
                    </div>
                   
                    <div className={stylesDetail.img}>
                        <img src={detail.background_image} alt="" />

                    </div>
                    <div className={stylesDetail.desc}>

                        {detail.description}
                    </div>

                {/* </div> */}

            </div>
        </div>
    )
}

export default Detail