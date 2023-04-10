import { useSelector } from "react-redux";
import {
    AUTO_FILTER, GAME_DB, GAME_API,
    FILTER_NAME, CAMBIO, FILTER,
    FILTER_GENRE, FILTER_RATING, FILTER_STATUS
} from "./types";
import axios from "axios";


export function getGames(opc) {
   

    return async function (dispact) {
        let Response =  await axios.get(`http://localhost:3007/videogames`)
       
        if (opc === "DB" ||opc === 2) {
            const GamesDB = await SearchApiDB(Response, opc)
            return dispact({
                type: GAME_DB,
                payload: GamesDB
            })
        } else {
            if (opc === "API"||opc === 3) {
                const GamesAPI = await SearchApiDB(Response, opc)
                return dispact({
                    type: GAME_API,
                    payload: GamesAPI
                })
            } else {
                return dispact({
                    type: AUTO_FILTER,
                    payload: Response.data
                })
            }
        }


    }
}


export function getGamesName(name,opc) {

    try {
        let GameName = []
        return async function (dispact) {
            const nameGame = await axios.get(`http://localhost:3007/videogames/videogames/?name=${name}`)
           console.log("la opcion en action  es:",opc)
            if (opc === 2) {
                GameName = await SearchApiDB(nameGame, opc)
                console.log("el juego",GameName)
            } else {
                if (opc === 3) {
                    GameName = await SearchApiDB(nameGame, opc)
                    
                } else {
                   if (opc === 1) {
                    return dispact({
                        type: FILTER_NAME,
                        payload: nameGame.data
                    })
                   }
                }
            }
            return dispact({
                type: FILTER_NAME,
                payload: GameName
            })

        }
    } catch (error) {
        throw new Error(error);
    }
}

export function Cambio(ban) {

    return ({
        type: CAMBIO,
        payload: ban
    })
}
export function filter(filtered) {
    return ({
        type: FILTER,
        payload: filtered
    })
}

export function FilterRating(filtered) {
    try {
        // return async function (dispact) {
        // const nameGame = await axios.get(`http://localhost:3007/videogames/videogames/?name=${filtered}`)

        return ({
            type: FILTER_RATING,
            payload: filtered
        })

        //   }
    } catch (error) {
        throw new Error(error);
    }
}

export function FilterGenres(filtered) {
    console.log("filtrado gen", filtered)
    try {
        // return async function (dispact) {
        // const nameGame = await axios.get(`http://localhost:3007/videogames/videogames/?name=${filtered}`)

        return ({
            type: FILTER_GENRE,
            payload: filtered
        })

        //   }
    } catch (error) {
        throw new Error(error);
    }
}

export function filter_status(option) {
    return ({
        type: FILTER_STATUS,
        payload: option
    })
}

const SearchApiDB = (response, opc) => {



    const copyfilter = response.data

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8|9|aA|bB][0-9a-f]{3}-[0-9a-f]{12}$/i;

    const generos = copyfilter.filter(gen => {

        if (opc === "DB"|| opc === 2) {

            if (uuidRegex.test(gen.id)) {
                return gen
            }
        } else
            if (opc === "API"|| opc === 3) {
                if (!uuidRegex.test(gen.id)) {
                    return gen
                }

            }
    })
    return generos;
}






